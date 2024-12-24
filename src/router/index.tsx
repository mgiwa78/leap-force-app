import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@/pages/home";
import LoginPage from "@/pages/auth/login";
import AppLayout from "@/components/layouts/appLayout";

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
    ],
  },
]);

export { router };
