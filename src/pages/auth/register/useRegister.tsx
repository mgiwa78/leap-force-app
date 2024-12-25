import React, { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/modules/authServices";
import toast from "react-hot-toast";
import { GenericError } from "@/types";
import { passwordSchema } from "@/utils/schema";

export default function useRegister() {
  const { registerAccount } = authService;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    country: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});

  const [agree, setAgree] = useState(false);

  const registerSchema = z
    .object({
      fullname: z
        .string({
          required_error: "Full name is required",
          invalid_type_error: "Full name must be a string",
        })
        .nonempty("Full name is required"),
      email: z.string().email("Invalid email address"),
      password: passwordSchema,
      phone_number: z
        .string()
        .min(11, { message: "Phone number is required" })
        .max(11, { message: "Phone number should be less than 12" }),
      country: z
        .string({ message: "Country is required" })
        .nonempty("Country is required"),
      confirm_password: passwordSchema,
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    });

  const countries = [
    {
      label: "Nigeria",
      value: "Nigeria",
    },
    {
      label: "Ghana",
      value: "Ghana",
    },
  ];

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
      registerSchema.parse(formData);
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

  const { mutate, status: registerStatus } = useMutation({
    mutationFn: registerAccount,
    onSuccess: (response: any) => {
      navigate("/login", { replace: true });
      toast.success(response?.data?.message);
    },
    onError: (error: GenericError) => {
      toast.error(error?.response?.data.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const { fullname, confirm_password, ...otherData } = formData;
      const [first_name = "", last_name = ""] = fullname.split(" ", 2);
      const formattedData = {
        ...otherData,
        first_name,
        last_name,
      };
      mutate(formattedData);
    }
  };

  return {
    countries,
    formData,
    setFormData,
    agree,
    setAgree,
    errors,
    handleSubmit,
    handleInputChange,
    isLoading: registerStatus === "pending",
  };
}
