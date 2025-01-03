import apiClient from "../axiosInstance";
import { GenericApiResponse } from "@/types";

interface IFlight {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  location: string;
  destination: string;
  number_of_passengers: string;
  travel_class: string;
  departure_date: string | null;
  return_date: string | null;
  other_contact?: string;
}

const flightAssistance = async (payload: IFlight) => {
  const response = await apiClient.post<GenericApiResponse>(
    "/flight-booking/create",
    payload
  );

  return response;
};

const flightService = { flightAssistance };

export { flightService };
