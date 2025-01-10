import React, { useState } from "react";
import { authService } from "@/services/modules/authServices";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { GenericError } from "@/types";
import { z } from "zod";

export default function useContactUsForm() {
  const { contactUs } = authService;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    subject: "",
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});

  const contactSchema = z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    phone_number: z
      .string()
      .min(11, { message: "Phone number is required" })
      .max(11, { message: "Phone number should be less than 12" }),
    subject: z
      .string({
        required_error: "Subject is required",
        invalid_type_error: "Subject must be a string",
      })
      .nonempty("Subject is required"),
    message: z
      .string({
        required_error: "Message is required",
        invalid_type_error: "Message must be a string",
      })
      .nonempty("Message is required"),
  });

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

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      return true;
    } catch (error) {
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

  const { mutate: contactUsMutation, status: contactUsStatus } = useMutation({
    mutationFn: contactUs,
    onSuccess: (response: any) => {
      toast.success(response?.data?.message);
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        message: "",
        subject: "",
      });
    },
    onError: (error: GenericError) => {
      toast.error(error?.response?.data.message);
    },
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      contactUsMutation(formData);
    }
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleSubmitForm,
    isLoading: contactUsStatus === "pending",
  };
}
