import { InputComponent } from "@/components/core/input";
import CustomButton from "@/components/core/button";
import { Textarea } from "@headlessui/react";
import useContactUsForm from "./useContactForm";

const ContactUsForm = () => {
  const { formData, errors, handleInputChange, handleSubmitForm, isLoading } =
    useContactUsForm();
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-1 gap-x-3 gap-y-9 lg:grid-cols-2">
          <InputComponent
            label="Name"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors?.name}
          />
          <InputComponent
            label="Email address"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your e-mail address"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
          />
          <InputComponent
            label="Phone Number"
            id="phone_number"
            name="phone_number"
            type="tel"
            placeholder="Enter your phone number"
            value={formData?.phone_number}
            onChange={handleInputChange}
            error={errors?.phone_number}
          />
          <InputComponent
            label="Subject"
            id="subject"
            name="subject"
            placeholder="Enter the subject of your message"
            value={formData?.subject}
            onChange={handleInputChange}
            error={errors?.subject}
          />
          <div className="col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-xs">
              Message
            </label>
            <Textarea
              name="message"
              id="message"
              className="text-text2 text-sm bg-[#F1F1F1] placeholder:text-[12px] p-[12px] rounded-[12px] outline-0 border-grey_1 hide_tap border-1
               focus:border-secondary_1"
              placeholder="Enter your message"
              rows={6}
            />
            {errors?.message && (
              <span className="text-error text-xs ">{errors?.message}</span>
            )}
          </div>
        </div>

        <div className="mt-8">
          <CustomButton
            loading={isLoading}
            className="w-full"
            theme="primary"
            size="44"
            type="submit"
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
