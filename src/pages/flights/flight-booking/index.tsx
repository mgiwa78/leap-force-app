import { InputComponent } from "@/components/core/input";
import CustomButton from "@/components/core/button";
import Dropdown from "@/components/core/Dropdown";
import CalendarInput from "@/components/core/Calendar/Calendar";
import useFlightAssitance from "./useFlightBooking";
import {
  travelClassOptions,
  passengersNumberOptions,
} from "@/constants/flights";

const FlightBooking = () => {
  const {
    formData,
    setFormData,
    handleInputChange,
    handleSubmitForm,
    errors,
    isLoading,
  } = useFlightAssitance();
  return (
    <main className="max-w-[1200px] mx-auto px-4 lg:px-0">
      <div className="space-y-[18px] mb-[66px]">
        <h2 className="text-2xl lg:text-4xl font-semibold text-secondary">
          Flight Booking Assistance
        </h2>
        <p className="w-full md:w-3/5 text-sm lg:text-base text-black">
          Let us help you find the best options for your upcoming trip. Fill in
          your details below, and our team will get back to you with tailored
          flight options.
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputComponent
            id="full_name"
            name="full_name"
            label="Full name"
            placeholder="Enter your full name"
            value={formData?.full_name}
            onChange={handleInputChange}
            error={errors?.full_name}
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

          <InputComponent
            id="other_contact"
            name="other_contact"
            label="Other contact info (optional)"
            placeholder="Enter other contact name"
            value={formData?.other_contact}
            onChange={handleInputChange}
            error={errors?.other_contact}
          />

          <InputComponent
            id="location"
            name="location"
            label="Where are you flying from?"
            placeholder="Location"
            value={formData?.location}
            onChange={handleInputChange}
            error={errors?.location}
          />

          <InputComponent
            id="destination"
            name="destination"
            label="Where are you heading to?"
            placeholder="Destination"
            value={formData?.destination}
            onChange={handleInputChange}
            error={errors?.destination}
          />

          <div>
            <CalendarInput
              label="When do you plan to travel"
              selectedDate={formData?.departure_date}
              setSelectedDate={(date: any) => {
                setFormData({ ...formData, departure_date: date });
              }}
              placeholder="Select departure dates"
            />
            {errors?.departure_date && (
              <p className="text-xs text-error">{errors?.departure_date}</p>
            )}
          </div>

          <div>
            <CalendarInput
              label=" When do you plan to return"
              selectedDate={formData?.return_date}
              setSelectedDate={(date: any) => {
                setFormData({ ...formData, return_date: date });
              }}
              placeholder="Select return dates"
            />
            {errors?.return_date && (
              <p className="text-xs text-error">{errors?.return_date}</p>
            )}
          </div>

          <div>
            <Dropdown
              options={passengersNumberOptions}
              label="Number of Passengers"
              id="number_of_passengers"
              selected={formData?.number_of_passengers}
              onSelect={(data: any) => {
                setFormData({
                  ...formData,
                  number_of_passengers: data?.value,
                });
              }}
              placeholder="Select number of passengers"
            />
            {errors?.number_of_passengers && (
              <p className="text-xs text-error">
                {errors?.number_of_passengers}
              </p>
            )}
          </div>

          <div>
            <Dropdown
              options={travelClassOptions}
              label="Travel Class (Optional)"
              id="travel class"
              selected={formData?.travel_class}
              onSelect={(data: any) => {
                setFormData({
                  ...formData,
                  travel_class: data?.value,
                });
              }}
              placeholder="Select preferred travel class"
            />
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

export default FlightBooking;
