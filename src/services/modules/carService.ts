import apiClient from "../axiosInstance";
import { GenericApiResponse } from "@/types";

interface IRent {
  number_of_days: number;
  destination: string;
  pickup_location: string;
  drop_off_location: string;
  pickup_date: string | null;
  drop_off_date: string | null;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  message: string;
}

interface IService {
  service_type: string;
  gender: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  preference?: string;
}

const rentCar = async (payload: IRent) => {
  const response = await apiClient.post<GenericApiResponse>(
    "/car-rentals/create",
    payload
  );

  return response;
};

const provideService = async (payload: IService) => {
  const response = await apiClient.post<GenericApiResponse>(
    "/leapforce/create",
    payload
  );

  return response;
};

const carService = { rentCar, provideService };

export { carService };
