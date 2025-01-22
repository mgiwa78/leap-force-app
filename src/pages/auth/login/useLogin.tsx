import React, { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/modules/authServices";
import toast from "react-hot-toast";
import { GenericError } from "@/types";

export default function useLogin() {
  const { login } = authService;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});

  const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password must be at least 1 characters"),
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
      LoginSchema.parse(formData);
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

  const { mutate, status: loginStatus } = useMutation({
    mutationFn: login,
    onSuccess: async (response: any) => {
      const token = response?.data?.payload?.token;
      localStorage.setItem("leapforce-token", token);
      localStorage.setItem(
        "leapforce-profile",
        JSON.stringify(response?.data?.payload)
      );
      toast.success("Login successful");
      navigate("/");
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
    handleInputChange,
    errors,
    handleSubmit,
    rememberMe,
    setRememberMe,
    isLoading: loginStatus === "pending",
  };
}
