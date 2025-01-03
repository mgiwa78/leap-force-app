import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GenericError } from "@/types";
import { accommodationService } from "@/services/modules/accommodationServices";
import { useNavigate } from "react-router-dom";

const currentDate = new Date();
export default function useCreateAccommodation() {
  const { createHotelBooking } = accommodationService;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    room_type: "",
    number_of_guests: "",
    check_in_date: null,
    check_out_date: null,
    booking_date: null,
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});

  const {
    mutate: createHotelBookingMutation,
    status: createHotelBookingStatus,
  } = useMutation({
    mutationFn: createHotelBooking,
    onSuccess: (response: any) => {
      toast.success(response?.data?.message);
      navigate("/accommodation");
    },
    onError: (error: GenericError) => {
      toast.error(error?.response?.data.message);
    },
  });

  const isFormValid = (): boolean => {
    const validationErrors: { [key: string]: string } = {};

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        validationErrors[key] = "This field is required.";
      }
    }

    const checkinDate = formData.check_in_date
      ? new Date(formData.check_in_date)
      : null;

    const checkoutDate = formData.check_out_date
      ? new Date(formData.check_out_date)
      : null;

    const bookingDate = formData.booking_date
      ? new Date(formData?.booking_date)
      : null;

    if (checkinDate && checkinDate < currentDate) {
      validationErrors.check_in_date = "CheckIn cannot be in the past.";
    }

    if (checkoutDate && checkoutDate < currentDate) {
      validationErrors.check_out_date = "Check out date cannot be in the past.";
    }

    if (bookingDate && bookingDate < currentDate) {
      validationErrors.booking_date = "Booking date cannot be in the past.";
    }

    if (checkinDate && checkoutDate && checkoutDate < checkinDate) {
      validationErrors.check_out_date =
        "Checkout date cannot be before checkIn date.";
    }

    if (checkinDate && bookingDate && checkinDate < bookingDate) {
      validationErrors.check_in_date =
        "CheckIn date cannot be before booking date.";
    }

    if (checkoutDate && bookingDate && checkoutDate < bookingDate) {
      validationErrors.check_out_date =
        "Check out date cannot be before booking date.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
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

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      createHotelBookingMutation(formData);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    handleInputChange,
    handleSubmitForm,
    isLoading: createHotelBookingStatus === "pending",
  };
}
