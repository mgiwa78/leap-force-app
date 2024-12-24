import AuthForm from "@/components/pages/auth/authForm";
import { InputComponent } from "@/components/core/input";
import { Checkbox } from "@/components/core/Checkbox/Checkbox";
import CustomButton from "@/components/core/button";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
const LoginPage = () => {
  const {
    formData,
    handleInputChange,
    errors,
    handleSubmit,
    rememberMe,
    setRememberMe,
    isLoading,
  } = useLogin();
  return (
    <main>
      <AuthForm
        maxWidth="max-w-[645px]"
        title="Login"
        subtitle="Login to your account now!"
        onSubmit={handleSubmit}
      >
        <div className=" w-full">
          <div className="space-y-7">
            <InputComponent
              id="email"
              label="Email address"
              name="email"
              value={formData?.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Enter your email address"
              error={errors?.email}
            />

            <InputComponent
              id="password"
              className="rounded-[12px]"
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData?.password}
              onChange={handleInputChange}
              error={errors?.password}
            />
            <div className="flex justify-between text-xs text-text2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                label="Remember me"
              />
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
          <div className="flex w-ful mt-8 md:mt-[60px] items-center justify-center">
            <CustomButton
              className="w-[400px] rounded-full h-[50px]"
              theme="primary"
              type="submit"
              isLoading={isLoading}
            >
              Login
            </CustomButton>
          </div>
        </div>
      </AuthForm>
    </main>
  );
};

export default LoginPage;
