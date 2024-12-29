import { createBrowserRouter, Outlet } from "react-router-dom";
import AppLayout from "@/components/layouts/appLayout";
import Home from "@/pages/home";
import LoginPage from "@/pages/auth/login";
import RegistrationPage from "@/pages/auth/register";
import ForgotPasswordPage from "@/pages/auth/forgot-password";
import ContactUsPage from "@/pages/support/contact-us";
import CreatePassword from "@/pages/auth/create-password";
import VisaPage from "@/pages/visas";
import CarHirePage from "@/pages/car-hire";
import AccommodationPage from "@/pages/accommodation";

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
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/visa", element: <VisaPage /> },
      { path: "/car-hire", element: <CarHirePage /> },
      { path: "/accommodation", element: <AccommodationPage /> },
    ],
  },
]);

export { router };
