import { createBrowserRouter, Outlet } from "react-router-dom";
import AppLayout from "@/components/layouts/appLayout";
import Home from "@/pages/home";
// import LoginPage from "@/pages/auth/login";
// import RegistrationPage from "@/pages/auth/register";
// import ForgotPasswordPage from "@/pages/auth/forgot-password";
// import ContactUsPage from "@/pages/support/contact-us";
// import CreatePassword from "@/pages/auth/create-password";
// import VisaPage from "@/pages/visas";
// import CarHirePage from "@/pages/car-hire";
// import AccommodationPage from "@/pages/accommodation";
// import FlightsPage from "@/pages/flights";
// import FlightBooking from "@/pages/flights/flight-booking";
// import HotelBooking from "@/pages/accommodation/book-hotel";
// import VisaApplicationPage from "@/pages/visas/visa-application";
import AboutUsPage from "@/pages/support/about-us";
import ServiceOffering from "@/pages/services";
import NotFound from "@/pages/not-found";
import ErrorBoundary from "@/pages/error-boundary";
import OurServices from "@/pages/our-services";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </ErrorBoundary>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "/service-offering", element: <ServiceOffering /> },
      // { path: "/login", element: <LoginPage /> },
      // { path: "/register", element: <RegistrationPage /> },
      // { path: "/forgot-password", element: <ForgotPasswordPage /> },
      // {
      //   path: "create-password/:token",
      //   element: <CreatePassword />,
      // },
      // { path: "/contact-us", element: <ContactUsPage /> },
      // { path: "/visa", element: <VisaPage /> },
      // { path: "/car-hire", element: <CarHirePage /> },
      // { path: "/accommodation", element: <AccommodationPage /> },
      // { path: "/flight", element: <FlightsPage /> },
      // { path: "/flight-assistance", element: <FlightBooking /> },
      // { path: "/hotel-booking", element: <HotelBooking /> },
      // { path: "/visa-application", element: <VisaApplicationPage /> },
      { path: "/about", element: <AboutUsPage /> },
      { path: "/services", element: <OurServices /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export { router };
