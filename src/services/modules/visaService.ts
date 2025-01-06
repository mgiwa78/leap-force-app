import apiClient from "../axiosInstance";
import { GenericApiResponse } from "@/types";

// interface IVisApplication {
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone_number: string;
//   passport: any;
//   gender: string;
//   relationship_status: string;
//   house_address: string;
//   occupation: string;
//   business_company_name: string;
//   business_company_address: string;
//   business_company_email: string;
//   business_company_phone: string;
//   position: string;
//   single_multiple_entry: string;
//   dob?: string;
// }

const visaApplication = async (payload: any) => {
  const formData = new FormData();
  formData.append("first_name", payload.first_name);
  formData.append("last_name", payload.last_name);
  formData.append("email", payload.email);
  formData.append("phone_number", payload.phone_number);
  formData.append("passport", payload.passport); // File object
  formData.append("gender", payload.gender);
  formData.append("relationship_status", payload.relationship_status);
  formData.append("house_address", payload.house_address);
  formData.append("occupation", payload.occupation);
  formData.append("business_company_name", payload.business_company_name);
  formData.append("business_company_address", payload.business_company_address);
  formData.append("business_company_email", payload.business_company_email);
  formData.append("business_company_phone", payload.business_company_phone);
  formData.append("position", payload.position);
  formData.append("single_multiple_entry", payload.single_multiple_entry);
  //formData.append("dob", payload.dob);

  const response = await apiClient.post<GenericApiResponse>(
    "visa/create",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};

const visaService = { visaApplication };

export { visaService };
