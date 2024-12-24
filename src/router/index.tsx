import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@/pages/home";
import LoginPage from "@/pages/auth/login";
import RegistrationPage from "@/pages/auth/register";
import ForgotPasswordPage from "@/pages/auth/forgot-password";
import AppLayout from "@/components/layouts/appLayout";
import CreatePassword from "@/pages/auth/create-password";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegistrationPage /> },
      { path: "/forgot-password", element: <ForgotPasswordPage /> },
      {
        path: "create-password/:token",
        element: <CreatePassword />,
      },
    ],
  },
]);

export { router };
