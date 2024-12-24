import AuthForm from "@/components/pages/auth/authForm";
import { InputComponent } from "@/components/core/input";
import { Checkbox } from "@/components/core/Checkbox/Checkbox";
import CustomButton from "@/components/core/button";
import { Link } from "react-router-dom";
import useRegister from "./useRegister";
import { Icon } from "@iconify/react";
import Dropdown from "@/components/core/Dropdown";

const RegistrationPage = () => {
  const { countries, formData, setFormData, agree, setAgree } = useRegister();
  return (
    <main>
      <AuthForm
        maxWidth="max-w-[1080px]"
        title="Create Account"
        // onSubmit={handleSubmit}
        subtitle="Create your account now!"
      >
        <div className="pb-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-4">
            <InputComponent
              id="fullname"
              label="Full Name"
              name="fullname"
              // value={formData?.fullname}
              // onChange={handleInputChange}
              // error={errors?.fullname}
              type="text"
              placeholder="Enter your full name"
            />
            <InputComponent
              id="email"
              label="Email address"
              name="email"
              // value={formData?.email}
              // onChange={handleInputChange}
              // error={errors?.email}
              type="email"
              placeholder="Enter your email address"
            />
            <InputComponent
              id="phone_number"
              label="Phone Number"
              name="phone_number"
              max={11}
              // value={formData?.phone_number}
              // onChange={handleInputChange}
              type="tel"
              placeholder="Enter your phone number"
              // error={errors?.phone_number}
            />
            <Dropdown
              options={countries}
              label="Country"
              id="country"
              selected={formData?.country}
              onSelect={(data: any) => {
                setFormData({
                  ...formData,
                  country: data?.value,
                });
              }}
              placeholder="Select your country of residence"
            />
            {/* <InputComponent
            id="Country"
            label="Country"
            name="country"
            value={formData?.country}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter your country of residence"
            error={errors?.country}
          /> */}
            <InputComponent
              id="password"
              label="Create Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              // value={formData?.password}
              // onChange={handleInputChange}
              // error={errors?.password}
            />
            <InputComponent
              id="confirm_password"
              label="Confirm Password"
              name="confirm_password"
              type="password"
              placeholder="Enter your password"
              // value={formData?.confirm_password}
              // onChange={handleInputChange}
              // error={errors?.confirm_password}
            />
            <Checkbox
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              label={
                <p>
                  By creating an account, you agree to our{" "}
                  <a href="/" className="underline cursor-pointer">
                    Terms of Service
                  </a>{" "}
                  &{" "}
                  <a href="/" className="underline cursor-pointer">
                    Privacy Policy
                  </a>
                </p>
              }
            />
          </div>
          <div className="flex w-ful mt-8 md:mt-[60px] items-center justify-center">
            <CustomButton
              className="w-[400px] rounded-full h-[50px]"
              theme="primary"
              type="submit"
              // isLoading={isLoading}
              // disabled={!isFormValid}
            >
              Create Account
            </CustomButton>
          </div>
          <div className="w-full mt-[32px] lg:mt-[60px] space-y-5">
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">
                or continue with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <CustomButton
                theme="transparent"
                className="border-[0.5px] text-text2 font-light border-text2 rounded-[12px] py-3"
              >
                <div className="flex gap-1 items-center">
                  <Icon icon="simple-icons:google" />
                  <span>Google</span>
                </div>
              </CustomButton>
              <CustomButton
                variant="outline"
                className="border-[0.5px] text-text2 font-light border-text2 rounded-[12px] py-3"
              >
                <div className="flex gap-1 items-center">
                  <Icon icon="cib:apple" />
                  <span>Apple</span>
                </div>
              </CustomButton>
            </div>
          </div>
        </div>
      </AuthForm>
    </main>
  );
};

export default RegistrationPage;
