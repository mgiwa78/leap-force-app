import AuthForm from "@/components/pages/auth/authForm";
import { InputComponent } from "@/components/core/input";
import { RenderIf } from "@/components/hoc/RenderIf";
import CustomButton from "@/components/core/button";
import useForgotPassword from "./useForgotPassword";
import ConfirmationEmail from "@/components/pages/auth/confirmationEmail";
const ForgotPasswordPage = () => {
  const {
    formData,
    errors,
    handleInputChange,
    isFormValid,
    handleSubmit,
    isSuccess,
    isLoading,
  } = useForgotPassword();

  return (
    <>
      <RenderIf condition={!isSuccess}>
        <AuthForm
          maxWidth="max-w-[645px]"
          title="Forgot Password"
          subtitle="Reset your password"
          onSubmit={handleSubmit}
        >
          <div className="">
            <InputComponent
              id="email"
              label="Email address"
              name="email"
              type="email"
              value={formData?.email}
              error={errors?.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
            />
            <div className="flex w-ful mt-8 md:mt-[60px] items-center justify-center">
              <CustomButton
                className="w-[400px] rounded-[12px] h-[50px]"
                theme="primary"
                type="submit"
                disabled={!isFormValid}
                isLoading={isLoading}
              >
                Submit
              </CustomButton>
            </div>
          </div>
        </AuthForm>
      </RenderIf>

      <RenderIf condition={isSuccess}>
        <AuthForm maxWidth="max-w-[645px]">
          <ConfirmationEmail
            title="Email Confirmation"
            subtitle="We have sent a password reset link to your email."
          >
            <CustomButton
              className="w-[400px] rounded-[12px] h-[50px]"
              theme="primary"
            >
              Open Mail
            </CustomButton>
          </ConfirmationEmail>
        </AuthForm>
      </RenderIf>
    </>
  );
};

export default ForgotPasswordPage;
