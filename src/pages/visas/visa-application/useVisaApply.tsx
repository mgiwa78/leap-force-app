import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GenericError } from "@/types";
import { visaService } from "@/services/modules/visaService";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const currentDate = new Date();

export default function useVisaApplication() {
  const { visaApplication } = visaService;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dob: null,
    phone_number: "",
    gender: "",
    relationship_status: "",
    house_address: "",
    occupation: "",
    destination_country: "",
    travel_purpose: "",
    departure_date: null,
    return_date: null,
    passport_number: "",
    passport: File || null,
    docs: File || null,
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});

  const visaApplicationSchema = z
    .object({
      first_name: z.string().nonempty("First name is required."),
      last_name: z.string().nonempty("Last name is required."),
      email: z
        .string()
        .email("Invalid email address.")
        .nonempty("Email is required."),
      dob: z
        .string()
        .nullable()
        .refine(
          (val: any) => {
            const dob = new Date(val);
            return !isNaN(dob.getTime()) && dob < currentDate;
          },
          { message: "Date of birth must be a valid date in the past." }
        ),
      phone_number: z.string().nonempty("Phone number is required."),
      gender: z.string().nonempty("Gender is required."),
      relationship_status: z
        .string()
        .nonempty("Relationship status is required."),
      house_address: z.string().nonempty("House address is required."),
      occupation: z.string().nonempty("Occupation is required."),
      destination_country: z
        .string()
        .nonempty("Destination country is required."),
      travel_purpose: z.string().nonempty("Travel purpose is required."),
      departure_date: z
        .string()
        .nullable()
        .refine((val) => !val || new Date(val) >= currentDate, {
          message: "Departure date cannot be in the past.",
        }),
      return_date: z
        .string()
        .nullable()
        .refine((val) => !val || new Date(val) >= currentDate, {
          message: "Return date cannot be in the past.",
        }),
      passport_number: z.string().nonempty("Passport number cannot be empty"),
      passport: z
        .instanceof(File)
        .nullable()
        .refine((file) => file, { message: "Passport file is required." }),
      docs: z
        .instanceof(File)
        .nullable()
        .refine((file) => file, {
          message: "Supporting document is required.",
        }),
    })
    .superRefine((data, ctx) => {
      const departureDate = data.departure_date
        ? new Date(data.departure_date)
        : null;
      const returnDate = data.return_date ? new Date(data.return_date) : null;

      // Ensure return_date is after departure_date
      if (departureDate && returnDate && returnDate < departureDate) {
        ctx.addIssue({
          path: ["return_date"],
          message: "Return date cannot be before departure date.",
          code: "custom",
        });
      }
    });

  const validateForm = () => {
    try {
      visaApplicationSchema.parse(formData);
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;

    if (files && files[0]) {
      setFormData((prevValues) => ({
        ...prevValues,
        [name]: files[0], // Update the specific file field
      }));

      // Clear errors for the uploaded file field
      if (errors[name as keyof typeof errors]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: undefined,
        }));
      }
    }
  };

  const { mutate: visaApplicationMutation, status: visaApplicationStatus } =
    useMutation({
      mutationFn: visaApplication,
      onSuccess: (response: any) => {
        toast.success(response?.data?.message);
        navigate("/visa");
      },
      onError: (error: GenericError) => {
        toast.error(error?.response?.data.message);
      },
    });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      visaApplicationMutation(formData);
    }
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleFileUpload,
    handleSubmitForm,
    errors,
    isLoading: visaApplicationStatus === "pending",
  };
}
