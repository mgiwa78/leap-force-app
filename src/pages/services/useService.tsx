import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { carService } from "@/services/modules/carService";
// import { GenericError } from "@/types";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export default function useService() {
  const { provideService } = carService;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    service_type: "",
    gender: "",
    phone_number: "",
    preference: "",
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});

  const serviceSchema = z.object({
    full_name: z.string().nonempty("Full name is required."),
    email: z
      .string()
      .email("Invalid email address.")
      .nonempty("Email is required."),
    service_type: z.string().nonempty("Preferred service is required."),
    gender: z.string().nonempty("Gender is required."),
    phone_number: z.string().nonempty("Phone number is required."),
    preference: z.string().nonempty("Preference is required"), // Optional field
  });

  const validateForm = () => {
    try {
      serviceSchema.parse(formData);
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

  const { mutate: submitServiceMutation, status: serviceRequestStatus } =
    useMutation({
      mutationFn: provideService,
      onSuccess: (response: any) => {
        toast.success(response?.data?.message);
        navigate("/");
      },
      onError: (error: any) => {
        console.log(error?.response);
        toast.error(error?.response?.data);
      },
    });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const { full_name, ...data } = formData;
      const [first_name = "", last_name = ""] = full_name.split(" ", 2);

      const formattedData = { ...data, first_name, last_name };
      submitServiceMutation(formattedData);
    }
  };
  return {
    formData,
    setFormData,
    handleInputChange,
    handleSubmitForm,
    errors,
    isLoading: serviceRequestStatus === "pending",
  };
}
