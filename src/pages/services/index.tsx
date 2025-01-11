import { InputComponent } from "@/components/core/input";
import CustomButton from "@/components/core/button";
import Dropdown from "@/components/core/Dropdown";
import { Textarea } from "@headlessui/react";
import useService from "./useService";
import { genderOptions, serviceOfferingOptions } from "@/constants/visa";

const ServiceOffering = () => {
  const {
    formData,
    setFormData,
    handleInputChange,
    handleSubmitForm,
    errors,
    isLoading,
  } = useService();
  return (
    <main className="max-w-6xl mx-auto pt-4 lg:pt-20">
      <div className="space-y-2">
        <h1 className="text-secondary_1 text-3xl md:text-[48px] md:leading-[57.6px] font-bold">
          Start Planning Your Journey Now
        </h1>
        <p className="text-black text-sm md:text-base">
          Fill in the details below, and let Leapforce Travels handle the rest.
          It’s quick, easy, and stress-free!
        </p>
      </div>

      <form className="my-16" onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <InputComponent
              id="full_name"
              label="Full Name"
              name="full_name"
              placeholder="Enter your full name"
              value={formData?.full_name}
              onChange={handleInputChange}
              error={errors?.full_name}
            />
          </div>
          <div>
            <Dropdown
              options={genderOptions}
              selected={formData?.gender}
              onSelect={(data: any) =>
                setFormData({
                  ...formData,
                  gender: data.value,
                })
              }
              id="gender"
              label="Gender"
              placeholder="Select your gender"
            />
            {errors?.gender && (
              <span className="text-red-600 text-xs">{errors?.gender}</span>
            )}
          </div>
          <InputComponent
            type="email"
            id="email"
            label="Email Address"
            name="email"
            placeholder="Enter your e-mail address"
            value={formData?.email}
            error={errors?.email}
            onChange={handleInputChange}
          />

          <InputComponent
            type="tel"
            id="phone_number"
            name="phone_number"
            label="Phone Number"
            placeholder="Enter your phone number"
            value={formData?.phone_number}
            error={errors.phone_number}
            onChange={handleInputChange}
          />

          <div>
            <Dropdown
              options={serviceOfferingOptions}
              id="service_type"
              label="Preferred Service"
              placeholder="Select your preferred service"
              selected={formData?.service_type}
              onSelect={(data: any) =>
                setFormData({
                  ...formData,
                  service_type: data.value,
                })
              }
            />
            {errors?.service_type && (
              <span className="text-red-600 text-xs">
                {errors?.service_type}
              </span>
            )}
          </div>

          <div className="col-span-1 lg:col-span-2 flex flex-col gap-2">
            <label htmlFor="preference" className="text-xs">
              Preferences (Optional)
            </label>
            <Textarea
              name="preference"
              id="preference"
              className="text-text2 text-sm bg-[#F1F1F1] placeholder:text-[12px] p-[12px] rounded-[12px] outline-0 border-grey_1 hide_tap border-1
               focus:border-secondary_1"
              placeholder="Enter your preference"
              rows={6}
              value={formData?.preference}
              onChange={(e: any) => {
                setFormData({
                  ...formData,
                  preference: e.target.value,
                });
              }}
            />
            {errors?.preference && (
              <span className="text-red-600 text-xs">{errors?.preference}</span>
            )}
          </div>
        </div>
        <div className="mt-[59px] flex justify-center items-center">
          <CustomButton
            className="w-[250px]"
            theme="primary"
            size="44"
            type="submit"
            loading={isLoading}
          >
            Submit Request
          </CustomButton>
        </div>
      </form>
    </main>
  );
};

export default ServiceOffering;
