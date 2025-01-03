import { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GenericError } from "@/types";
import { flightService } from "@/services/modules/FlightService";

const currentDate = new Date();

export default function useFlightAssitance() {
  const { flightAssistance } = flightService;

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    location: "",
    destination: "",
    number_of_passengers: "",
    travel_class: "",
    departure_date: null,
    return_date: null,
    other_contact: "",
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const flightAssistanceSchema = z
    .object({
      full_name: z
        .string()
        .nonempty("Full name is required")
        .min(3, "Full name must be at least 3 characters long"),
      email: z.string().email("Invalid email address"),
      phone_number: z
        .string()
        .nonempty("Phone number is required")
        .regex(/^\+?\d{10,15}$/, "Invalid phone number format"),
      location: z.string().nonempty("Location is required"),
      destination: z.string().nonempty("Destination is required"),
      number_of_passengers: z
        .string()
        .nonempty("Number of Passengers is required"),

      travel_class: z.string().optional(),
      departure_date: z.string().refine(
        (date) => {
          const parsedDate = new Date(date);
          return !isNaN(parsedDate.getTime()) && parsedDate >= currentDate;
        },
        { message: "Departure date must be a valid future date" }
      ),
      return_date: z.string().optional(),
      other_contact: z.string().optional(),
    })
    .superRefine(({ departure_date, return_date }, ctx) => {
      if (return_date && new Date(return_date) < new Date(departure_date)) {
        ctx.addIssue({
          path: ["return_date"],
          message: "Return date cannot be before departure date",
          code: "custom",
        });
      }
    });

  const validateForm = () => {
    try {
      flightAssistanceSchema.parse(formData);
      return true;
    } catch (error) {
      // const errors: { [key in keyof typeof formData]?: string } = {};
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce((acc, curr) => {
          const field = curr.path[0] as keyof typeof formData;
          acc[field] = curr.message;
          return acc;
        }, {} as { [key in keyof typeof formData]?: string });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const { mutate: flightAssistanceMutation, status: flightAssistanceStatus } =
    useMutation({
      mutationFn: flightAssistance,
      onSuccess: (response: any) => {
        toast.success(response?.data?.message);
      },
      onError: (error: GenericError) => {
        toast.error(
          error?.response?.data.message ||
            "Error Occurred performing this action"
        );
      },
    });

  console.log(errors);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const { full_name, other_contact, ...data } = formData;
      const [first_name = "", last_name = ""] = full_name.split(" ", 2);

      const formattedData = {
        ...data,
        first_name,
        last_name,
      };

      console.log(formattedData);

      // flightAssistanceMutation(formattedData);
    }
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleSubmitForm,
    errors,
    isLoading: flightAssistanceStatus === "pending",
  };
}
