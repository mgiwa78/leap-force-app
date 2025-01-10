import React, { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/modules/authServices";
import toast from "react-hot-toast";
import { GenericError } from "@/types";

export default function useForgotPassword() {
  const { forgotPassword } = authService;

  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState<{ email?: string }>({});

  const formSchema = z.object({
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Input must be an email",
      })
      .email({
        message: "Invalid email address entered",
      }),
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
      formSchema.parse(formData);

      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { email?: string; password?: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0] === "email") fieldErrors.email = err.message;
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const {
    mutate,
    status: forgotPasswordStatus,
    isSuccess,
  } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (response: any) => {
      toast.success(response?.data?.message);
    },
    onError: (error: GenericError) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      mutate(formData);
    }
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit,

    isLoading: forgotPasswordStatus === "pending",
    isSuccess,
  };
}
