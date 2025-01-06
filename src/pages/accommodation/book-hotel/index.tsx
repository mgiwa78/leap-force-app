import useCreateAccommodation from "./useBookHotel";
import { InputComponent } from "@/components/core/input";
import CustomButton from "@/components/core/button";
import Dropdown from "@/components/core/Dropdown";
import CalendarInput from "@/components/core/Calendar/Calendar";
import { roomTypeOptions } from "@/constants/accommodation";

const HotelBooking = () => {
  const {
    formData,
    setFormData,
    errors,
    handleInputChange,
    handleSubmitForm,
    isLoading,
  } = useCreateAccommodation();

  return (
    <main className="max-w-[900px] mx-auto px-4 lg:px-0">
      <div className="space-y-[18px] mb-[66px]">
        <h2 className="text-2xl lg:text-4xl font-semibold text-secondary">
          Book an Hotel
        </h2>
        <p className="w-full md:w-3/5 text-sm lg:text-base text-black">
          Let us help you find the best hotel for your upcoming trip. <br />
          Fill in your details below, and our team will get back to you with
          tailored booking options.
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputComponent
            id="first_name"
            name="first_name"
            label="First name"
            placeholder="Enter your first name"
            value={formData?.first_name}
            onChange={handleInputChange}
            error={errors?.first_name}
          />
          <InputComponent
            id="last_name"
            name="last_name"
            label="Last name"
            placeholder="Enter your last name"
            value={formData?.last_name}
            onChange={handleInputChange}
            error={errors?.last_name}
          />
          <div className="col-span-2">
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
          </div>
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
              options={roomTypeOptions}
              id="room_type"
              label="Room Type"
              placeholder="Select the type room"
              selected={formData?.room_type}
              onSelect={(data: any) => {
                setFormData({
                  ...formData,
                  room_type: data?.value,
                });
              }}
            />
            {errors?.room_type && (
              <span className="text-xs text-error">{errors?.room_type}</span>
            )}
          </div>

          <InputComponent
            id="number_of_guests"
            name="number_of_guests"
            type="number"
            label="Number of Guests"
            placeholder="Enter the number of guests"
            value={formData?.number_of_guests}
            onChange={handleInputChange}
            error={errors?.number_of_guests}
          />

          <div>
            <CalendarInput
              label="Booking Date"
              selectedDate={formData?.booking_date}
              setSelectedDate={(date: any) => {
                setFormData({ ...formData, booking_date: date });
              }}
              placeholder="Select Booking date"
            />
            {errors?.booking_date && (
              <p className="text-xs text-error">{errors?.booking_date}</p>
            )}
          </div>

          <div>
            <CalendarInput
              label="Check In Date"
              selectedDate={formData?.check_in_date}
              setSelectedDate={(date: any) => {
                setFormData({ ...formData, check_in_date: date });
              }}
              placeholder="Select Check In dates"
            />
            {errors?.check_in_date && (
              <p className="text-xs text-error">{errors?.check_in_date}</p>
            )}
          </div>
          <div>
            <CalendarInput
              label="Checkout Date"
              selectedDate={formData?.check_out_date}
              setSelectedDate={(date: any) => {
                setFormData({ ...formData, check_out_date: date });
              }}
              placeholder="Select return dates"
            />
            {errors?.check_out_date && (
              <p className="text-xs text-error">{errors?.check_out_date}</p>
            )}
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

export default HotelBooking;
