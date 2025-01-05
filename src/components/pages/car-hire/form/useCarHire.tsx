import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GenericError } from "@/types";
import { carService } from "@/services/modules/carService";
import { z } from "zod";

const currentDate = new Date();

export default function useCarRental() {
  const { rentCar } = carService;

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    number_of_days: "",
    deals: "",
    destination: "",
    pickup_location: "",
    drop_off_location: "",
    pickup_date: null,
    drop_off_date: null,
    message: "",
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});

  const carRentalSchema = z
    .object({
      full_name: z.string().nonempty("Full name is required."),
      email: z
        .string()
        .email("Invalid email address.")
        .nonempty("Email is required."),
      phone_number: z
        .string()
        .nonempty("Phone number is required")
        .regex(/^\+?\d{10,15}$/, "Invalid phone number format"),
      number_of_days: z
        .string()
        .nonempty("Number of days is required.")
        .refine((val) => !isNaN(Number(val)), { message: "Must be a number." }),
      deals: z.string().nonempty("Deals is required"),
      destination: z.string().nonempty("Destination is required."),
      pickup_location: z.string().nonempty("Pickup location is required."),
      drop_off_location: z.string().optional(),
      pickup_date: z
        .string()
        .nullable()
        .refine((val) => val && new Date(val) >= currentDate, {
          message: "Pickup date cannot be in the past.",
        }),
      drop_off_date: z
        .string()
        .nullable()
        .refine((val) => !val || new Date(val) >= currentDate, {
          message: "Dropoff date cannot be in the past.",
        }),
      message: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      // Conditional validations for airport pickup & dropoff deals
      if (data.deals === "airport pickup & dropoff") {
        if (!data.drop_off_date) {
          ctx.addIssue({
            path: ["drop_off_date"],
            message: "Dropoff date is required for this deal.",
            code: "custom",
          });
        }
        if (!data.drop_off_location) {
          ctx.addIssue({
            path: ["drop_off_location"],
            message: "Dropoff location is required for this deal.",
            code: "custom",
          });
        }
      }

      // Ensure dropoff date is after pickup date if both are provided
      if (data.pickup_date && data.drop_off_date) {
        const pickupDate = new Date(data.pickup_date);
        const dropoffDate = new Date(data.drop_off_date);
        if (dropoffDate < pickupDate) {
          ctx.addIssue({
            path: ["drop_off_date"],
            message: "Dropoff date cannot be before pickup date.",
            code: "custom",
          });
        }
      }
    });

  const validateForm = () => {
    try {
      carRentalSchema.parse(formData);
      setErrors({});
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const validationErrors: Record<string, string> = {};
        e.errors.forEach((error) => {
          if (error.path.length > 0) {
            validationErrors[error.path[0]] = error.message;
          }
        });
        setErrors(validationErrors);
      }
      return false;
    }
  };

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

  const { mutate: rentCarMutation, status: rentCarStatus } = useMutation({
    mutationFn: rentCar,
    onSuccess: (response: any) => {
      toast.success(response?.data?.message);
    },
    onError: (error: GenericError) => {
      toast.error(error?.response?.data.message);
    },
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(validateForm());

    if (validateForm()) {
      const { full_name, number_of_days, ...data } = formData;
      const [first_name = "", last_name = ""] = full_name.split(" ", 2);
      const days = Number(number_of_days);

      const formattedData = {
        ...data,
        first_name,
        last_name,
        number_of_days: days,
      };
      console.log(formattedData);

      rentCarMutation(formattedData);
    }
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleSubmitForm,
    errors,
    isLoading: rentCarStatus === "pending",
  };
}
