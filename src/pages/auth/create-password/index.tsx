import AuthForm from "@/components/pages/auth/authForm";
import { InputComponent } from "@/components/core/input";
import CustomButton from "@/components/core/button";
import useCreatePassword from "./useCreatePassword";

const CreatePassword = () => {
  const {
    formValues,
    formErrors,
    handleInputChange,
    handleChangePassword,
    isDisabled,
    isLoading,
  } = useCreatePassword();
  return (
    <div>
      <AuthForm
        title="Create Password"
        subtitle="Enter your new password"
        onSubmit={handleChangePassword}
        maxWidth="max-w-[1080px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-4">
          <InputComponent
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter New Password"
            onChange={handleInputChange}
            value={formValues.password}
            error={formErrors.password}
          />
          <InputComponent
            label="Password"
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="New Password"
            value={formValues.confirm_password}
            onChange={handleInputChange}
            error={formErrors.confirm_password}
          />
        </div>
        <div className="flex w-ful mt-8 md:mt-[60px] items-center justify-center">
          <CustomButton
            className="w-[400px] rounded-full h-[50px]"
            theme="primary"
            type="submit"
            disabled={isDisabled}
            isLoading={isLoading}
          >
            Submit
          </CustomButton>
        </div>
      </AuthForm>
    </div>
  );
};

export default CreatePassword;
