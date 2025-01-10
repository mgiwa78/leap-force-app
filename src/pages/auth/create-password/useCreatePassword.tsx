import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import toast from "react-hot-toast";
import { GenericError } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/modules/authServices";
import { passwordSchema } from "@/utils/schema";

export default function useCreatePassword() {
  const { resetPassword } = authService;
  const navigate = useNavigate();

  const { token } = useParams() ?? "";

  const passwordValidationSchema = z
    .object({
      password: passwordSchema,
      confirm_password: passwordSchema,
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    });

  const [formValues, setFormValues] = useState({
    password: "",
    confirm_password: "",
  });

  const [formErrors, setFormErrors] = useState<{
    [key in keyof typeof formValues]?: string;
  }>({});

  const validateForm = () => {
    try {
      passwordValidationSchema.parse(formValues);
      setFormErrors({});
      return true;
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const errors = error.flatten().fieldErrors;
        setFormErrors({
          password: errors.password?.[0],
          confirm_password: errors.confirm_password?.[0],
        });
      }
      return false;
    }
  };

  const { mutate: reset, status: resetPasswordStatus } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (response: any) => {
      toast.success(response?.data?.message);
      setFormErrors({});
      navigate("/login");
    },
    onError: (error: GenericError) => {
      toast.error(error?.response?.data.message);
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleChangePassword = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      const payload = {
        ...formValues,
        token: token ?? "",
      };

      reset(payload);
    }
  };

  return {
    formValues,
    formErrors,
    handleInputChange,
    handleChangePassword,
    isLoading: resetPasswordStatus === "pending",
  };
}
