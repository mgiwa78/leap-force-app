import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@/pages/home";
import AppLayout from "@/components/layouts/appLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [{ path: "", element: <Home /> }],
  },
]);

export { router };
