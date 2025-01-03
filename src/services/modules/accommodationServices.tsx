import apiClient from "../axiosInstance";
import { GenericApiResponse } from "@/types";

interface ICreateRental {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  room_type: string;
  number_of_guests: string;
  check_in_date: null | string;
  check_out_date: null | string;
  booking_date: null | string;
}

const createHotelBooking = async (payload: ICreateRental) => {
  const response = await apiClient.post<GenericApiResponse>(
    "/hotel/create",
    payload
  );

  return response;
};

const accommodationService = { createHotelBooking };

export { accommodationService };
