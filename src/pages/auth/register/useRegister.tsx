import React, { useState } from "react";
// import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/modules/authServices";
import toast from "react-hot-toast";
import { GenericError } from "@/types";

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
  const [agree, setAgree] = useState(false);

  console.log(formData);

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

  return { countries, formData, setFormData, agree, setAgree };
}
