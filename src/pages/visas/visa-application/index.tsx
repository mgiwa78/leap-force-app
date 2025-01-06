import { InputComponent } from "@/components/core/input";
import CalendarInput from "@/components/core/Calendar/Calendar";
import Dropdown from "@/components/core/Dropdown";
import {
  genderOptions,
  relationshipOptions,
  shengenCountries,
} from "@/constants/visa";
import { Textarea } from "@headlessui/react";
import useVisaApplication from "./useVisaApply";
import CustomButton from "@/components/core/button";

const VisaApplicationPage = () => {
  const {
    formData,
    setFormData,
    handleInputChange,
    handleFileUpload,
    handleSubmitForm,
    errors,
    isLoading,
  } = useVisaApplication();

  return (
    <main className="pt-6 lg:pt-[80px] max-w-4xl mx-auto">
      <div>
        <h1 className="text-lg lg:text-4xl font-bold text-secondary_1 mb-5">
          Application Form
        </h1>
      </div>

      <form className="mt-10 space-y-8" onSubmit={handleSubmitForm}>
        <div>
          <h1 className="text-lg text-text2 font-medium">
            Personal Information
          </h1>
          <div className="mt-8 space-y-8">
            <div className="flex w-full flex-col md:flex-row gap-6">
              <InputComponent
                id="surname"
                label="Surname"
                name="first_name"
                placeholder="Enter your surname"
                value={formData?.first_name}
                error={errors?.first_name}
                onChange={handleInputChange}
                className="w-full"
              />

              <InputComponent
                id="last_name"
                label="Other name"
                name="last_name"
                placeholder="Enter your last name"
                value={formData?.last_name}
                error={errors?.last_name}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div className="flex w-full flex-col md:flex-row gap-6">
              <div className="w-full">
                <Dropdown
                  options={genderOptions}
                  selected={formData?.gender}
                  onSelect={(data: any) =>
                    setFormData({
                      ...formData,
                      gender: data.value,
                    })
                  }
                  label="Gender"
                  id="gender"
                  placeholder="Select your gender"
                />
              </div>
              <div className="w-full">
                <Dropdown
                  options={relationshipOptions}
                  selected={formData?.relationship_status}
                  label="Relationship Status"
                  id="relationship_status"
                  placeholder="Select your relationship status"
                  onSelect={(data: any) =>
                    setFormData({
                      ...formData,
                      relationship_status: data.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="w-full col-span-1 lg:col-span-2">
              <label className="text-xs text-text2" htmlFor="address">
                House Address
              </label>
              <Textarea
                id="address"
                rows={4}
                placeholder="Enter your house address"
                className="text-sm text-text2 w-full p-[12px] outline-0  hide_tap border-1
                    rounded-[12px] focus:border-secondary_1 placeholder:text-[12px] bg-[#F1F1F1]"
                value={formData?.house_address}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setFormData({
                    ...formData,
                    house_address: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-span-2">
              <InputComponent
                id="email"
                name="email"
                type="email"
                value={formData?.email}
                error={errors?.email}
                onChange={handleInputChange}
                placeholder="Enter your e-mail address"
                label="Email Address"
              />
            </div>
            <InputComponent
              id="phone_number"
              name="phone_number"
              type="tel"
              max={11}
              value={formData?.phone_number}
              error={errors?.phone_number}
              onChange={handleInputChange}
              placeholder="Enter Phone number"
              label="Phone Number (WhatsApp preferrable for communication)"
            />

            <CalendarInput
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              selectedDate={formData?.dob}
              setSelectedDate={(date: any) => {
                setFormData({ ...formData, dob: date });
              }}
            />
          </div>
        </div>

        <div>
          <div className="space-y-3">
            <h1 className="text-lg text-text2 font-medium">Travel Details</h1>
            <p className="text-xs text-text2">
              Please select the type of Schengen Visa you are applying for
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Dropdown
                placeholder="Select your destination country"
                label="Destination Country"
                id="destination-country"
                options={shengenCountries}
                selected={formData?.destination_country}
                onSelect={(data: any) =>
                  setFormData({
                    ...formData,
                    destination_country: data.value,
                  })
                }
              />
            </div>

            <div>
              <Dropdown
                label="Purpose of Travel"
                id="travel-purpose"
                placeholder="Select your purpose for Traveling"
                options={[]}
                selected={formData?.travel_purpose}
                onSelect={(data: any) =>
                  setFormData({
                    ...formData,
                    travel_purpose: data.value,
                  })
                }
              />
            </div>
            <div>
              <CalendarInput
                label="When do you plan to travel?"
                placeholder="Select departure date"
                selectedDate={formData?.departure_date}
                setSelectedDate={(date: any) => {
                  setFormData({ ...formData, departure_date: date });
                }}
              />
            </div>
            <div>
              <CalendarInput
                label="When do you plan to return?"
                placeholder="Select return date"
                selectedDate={formData?.return_date}
                setSelectedDate={(date: any) => {
                  setFormData({ ...formData, return_date: date });
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-3">
            <h1 className="text-lg text-text2 font-medium">
              Supporting Information
            </h1>
            <p className="text-xs text-text2">please upload the following</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              {" "}
              <InputComponent
                label="Passport Number"
                placeholder="Enter passport number"
                id="passport_number"
                value={formData?.passport_number}
                onChange={handleInputChange}
                error={errors?.passport_number}
              />
            </div>

            <div className="col-span-1 lg:col-span-2">
              <p className="text-xs text-text2">Passport copy</p>
              <div className="mt-2 bg-[#F1F1F1] rounded-lg py-[27px] px-6">
                <input
                  type="file"
                  accept="application/pdf"
                  id="passport-upload"
                  className="hidden"
                  name="passport"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="passport-upload"
                  className="border-dashed border-[0.5px] border-[#000000] w-full py-[52.5px] my-auto flex flex-col items-center justify-center gap-y-3"
                >
                  <div className="bg-[#E3E3E3] rounded-full px-5 py-2">
                    <p className="flex text-sm text-type font-medium items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#9CA73A"
                          strokeWidth={2}
                          d="M2.998 1H17.5L21 4.5V23H3zM16 1v5h5m-9 14v-9m-4 3l4-4l4 4"
                        ></path>
                      </svg>
                      Upload Passport Copy
                    </p>
                  </div>
                  <p className="text-xs font-light text-center">
                    Upload a picture/PDF format of your passport
                  </p>
                  {formData.passport?.name && (
                    <p className="text-sm text-green-500 mt-2">
                      Selected File: {formData.passport?.name}
                    </p>
                  )}
                </label>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2">
              <p className="text-xs text-text2">
                Upload other required documents
              </p>
              <div className="mt-2 bg-[#F1F1F1] rounded-lg py-[27px] px-6">
                <input
                  type="file"
                  accept="application/pdf"
                  id="other-upload"
                  className="hidden"
                  name="docs"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="other-upload"
                  className="border-dashed border-[0.5px] border-[#000000] w-full py-[52.5px] my-auto flex flex-col items-center justify-center gap-y-3"
                >
                  <div className="bg-[#E3E3E3] rounded-full px-5 py-2">
                    <p className="flex text-sm text-type font-medium items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#9CA73A"
                          strokeWidth={2}
                          d="M2.998 1H17.5L21 4.5V23H3zM16 1v5h5m-9 14v-9m-4 3l4-4l4 4"
                        ></path>
                      </svg>
                      Upload
                    </p>
                  </div>
                  <p className="text-xs font-light text-center">
                    Upload a PDF format of the document
                  </p>
                  {formData.docs.name && (
                    <p className="text-sm text-green-500 mt-2">
                      Selected File: {formData.docs?.name}
                    </p>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <CustomButton
            type="submit"
            loading={isLoading}
            size="44"
            className="bg-primary hover:bg-primary/90 text-white px-10 lg:px-20 rounded-md"
          >
            Submit Request
          </CustomButton>
        </div>
      </form>
    </main>
  );
};

export default VisaApplicationPage;
