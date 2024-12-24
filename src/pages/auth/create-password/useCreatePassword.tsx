import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { z } from "zod";
import toast from "react-hot-toast";
import { GenericError } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/modules/authServices";

export default function useCreatePassword() {
  const { resetPassword } = authService;
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  const { token } = useParams() ?? "";

  // const passwordSchema = z
  //   .string()
  //   .min(8, { message: "Password must be at least 8 characters long" })
  //   .regex(/[A-Z]/, {
  //     message: "Password must contain at least one uppercase letter",
  //   })
  //   .regex(/\d/, { message: "Password must contain at least one number" })
  //   .regex(/[@$!%*?&#.]/, {
  //     message: "Password must contain at least one special character",
  //   });

  // const passwordValidationSchema = z
  //   .object({
  //     password: passwordSchema,
  //     confirm_password: passwordSchema,
  //   })
  //   .refine((data) => data.password === data.confirm_password, {
  //     message: "Passwords do not match",
  //     path: ["confirm_password"],
  //   });

  const [formValues, setFormValues] = useState({
    password: "",
    confirm_password: "",
  });

  const [formErrors, setFormErrors] = useState<{
    password?: string;
    confirm_password?: string;
  }>({});

  // const validateForm = () => {
  //   try {
  //     passwordValidationSchema.parse(formValues);
  //     setFormErrors({});
  //     return true;
  //   } catch (error: any) {
  //     if (error instanceof z.ZodError) {
  //       const errors = error.flatten().fieldErrors;
  //       setFormErrors({
  //         password: errors.password?.[0],
  //         confirm_password: errors.confirm_password?.[0],
  //       });
  //     }
  //     return false;
  //   }
  // };

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
    // if (validateForm()) {
    //   const payload = {
    //     ...formValues,
    //     token: token ?? "",
    //   };

    //   reset(payload);
    // }
  };

  useEffect(() => {
    const hasErrors = Object.keys(formErrors).length > 0;
    const hasEmptyFields = !formValues.password || !formValues.confirm_password;
    const passwordsMismatch =
      formValues.password !== formValues.confirm_password;

    setIsDisabled(hasErrors || hasEmptyFields || passwordsMismatch);
    setFormErrors({});
  }, [formValues]);

  return {
    formValues,
    formErrors,
    handleInputChange,
    handleChangePassword,
    isDisabled,
    isLoading: resetPasswordStatus === "pending",
  };
}
