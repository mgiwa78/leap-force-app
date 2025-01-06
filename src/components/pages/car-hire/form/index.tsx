import { InputComponent } from "@/components/core/input";
import Dropdown from "@/components/core/Dropdown";
import CustomButton from "@/components/core/button";
import { dealOptions } from "@/constants/form-options";
// import { Textarea } from "@headlessui/react";
import { RenderIf } from "@/components/hoc/RenderIf";
import useCarRental from "./useCarHire";
import CalendarInput from "@/components/core/Calendar/Calendar";

const CarHireForm = () => {
  const {
    formData,
    setFormData,
    handleInputChange,
    handleSubmitForm,
    errors,
    isLoading,
  } = useCarRental();
  return (
    <main>
      <div>
        <h1 className="text-lg lg:text-4xl font-bold text-secondary_1 mb-5">
          Car Rental Assistance
        </h1>
        <p className="text-sm lg:text-base text-gray-600 mb-20">
          Let us help you find the best options for your upcoming trip.
          <br />
          Fill in your details below, and our team will get back to you with
          tailored car rental options.
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6">
          <InputComponent
            name="full_name"
            label="Full Name"
            id="full_name"
            placeholder="Enter your full name"
            value={formData?.full_name}
            error={errors?.full_name}
            onChange={handleInputChange}
          />
          <InputComponent
            label="Email address"
            name="email"
            id="email"
            type="email"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
            placeholder="Enter your email address"
          />
          <InputComponent
            id="phone_number"
            label="Phone Number"
            name="phone_number"
            max={11}
            value={formData?.phone_number}
            onChange={handleInputChange}
            type="tel"
            placeholder="Enter your phone number"
            error={errors?.phone_number}
          />
          <div>
            <Dropdown
              options={dealOptions}
              label="Deals/Packages"
              id="deals"
              selected={formData?.deals}
              onSelect={(data: any) => {
                setFormData({
                  ...formData,
                  deals: data?.value,
                });
              }}
              placeholder="Select a car hire deal"
            />
            {errors?.deals && (
              <p className="text-xs text-error">{errors?.deals}</p>
            )}
          </div>

          <InputComponent
            id="destination"
            name="destination"
            placeholder="Enter your destination"
            label="Destination"
            value={formData?.destination}
            onChange={handleInputChange}
            error={errors?.destination}
          />

          <InputComponent
            id="pickup_location"
            placeholder="Enter your pickup location"
            label="Pickup Location"
            name="pickup_location"
            value={formData?.pickup_location}
            onChange={handleInputChange}
            error={errors?.pickup_location}
          />

          <RenderIf condition={formData?.deals === "airport pickup & dropoff"}>
            <InputComponent
              id="drop_off_location"
              placeholder="Enter your dropoff location"
              label="Dropoff Location"
              name="drop_off_location"
              value={formData?.drop_off_location}
              onChange={handleInputChange}
              error={errors?.drop_off_location}
            />
          </RenderIf>

          <InputComponent
            type="number"
            id="number_of_days"
            name="number_of_days"
            label="Number of Days"
            placeholder="Enter the number of days for rental"
            value={formData?.number_of_days}
            onChange={handleInputChange}
            error={errors?.number_of_days}
          />

          <div>
            <CalendarInput
              label="Pick up Date"
              selectedDate={formData?.pickup_date}
              setSelectedDate={(date: any) => {
                setFormData({ ...formData, pickup_date: date });
              }}
              placeholder="Select Pick up dates"
            />
            {errors?.pickup_date && (
              <p className="text-xs text-error">{errors?.pickup_date}</p>
            )}
          </div>

          <RenderIf condition={formData?.deals === "airport pickup & dropoff"}>
            <div>
              <CalendarInput
                label="Drop off Date"
                selectedDate={formData?.drop_off_date}
                setSelectedDate={(date: any) => {
                  setFormData({ ...formData, drop_off_date: date });
                }}
                placeholder="Select Drop off dates"
              />
              {errors?.drop_off_date && (
                <p className="text-xs text-error">{errors?.drop_off_date}</p>
              )}
            </div>
          </RenderIf>

          {/* <div className=" col-span-1 lg:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-xs">
              Additional Notes
            </label>
            <Textarea
              id="message"
              name="message"
              className="text-text2 text-sm bg-[#F1F1F1] placeholder:text-[12px] p-[12px] rounded-[12px] outline-0 border-grey_1 hide_tap border-1
               focus:border-secondary_1"
              placeholder="Anything you want us to note"
              rows={6}
              value={formData?.message}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
            />
            {errors?.message && (
              <span className="text-error text-xs ">{errors?.message}</span>
            )}
          </div> */}
        </div>

        <div className="flex justify-center ">
          <CustomButton
            theme="primary"
            className="rounded-full py-[12px] w-[250px]"
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

export default CarHireForm;
