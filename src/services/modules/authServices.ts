import apiClient from "../axiosInstance";
import { GenericApiResponse } from "@/types";

const login = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;

  const response = await apiClient.post<GenericApiResponse>("/users/login", {
    email,
    password,
  });

  return response;
};

const registerAccount = async (payload: any) => {
  const response = await apiClient.post<GenericApiResponse>(
    "/users/create",
    payload
  );

  return response;
};

const resetPassword = async (payload: {
  password: string;
  confirm_password: string;
  token: string;
}) => {
  const response = await apiClient({
    url: "/users/reset-password",
    method: "post",
    data: payload,
  });

  return response;
};

const changePassword = async (payload: {
  old_password: string;
  new_password: string;
  confirm_password: string;
  email: string;
}) => {
  const response = await apiClient.post<GenericApiResponse>(
    "/users/change-password",
    payload
  );

  return response;
};

const forgotPassword = async (payload: { email: string }) => {
  const response = await apiClient.post<GenericApiResponse>(
    "/users/forgot-password",
    payload
  );
  return response;
};

const getUser = async () => {
  const response = await apiClient.get<GenericApiResponse>("/users/details");

  return response;
};

const verifyEmail = async () => {
  const response = await apiClient.post<GenericApiResponse>(
    "/users/verify-email"
  );

  return response;
};

const contactUs = async (payload: {
  name: string;
  email: string;
  phone_number: string;
  message: string;
  subject: string;
}) => {
  const response = await apiClient.post<GenericApiResponse>(
    "/users/contact-us",
    payload
  );
  return response;
};

const authService = {
  login,
  registerAccount,
  resetPassword,
  changePassword,
  forgotPassword,
  getUser,
  verifyEmail,
  contactUs,
};

export { authService };
