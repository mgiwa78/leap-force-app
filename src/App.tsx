import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "./router";
import QueryProvider from "./services/queryProvider";

function App() {
  return (
    <>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
      <Toaster position="bottom-left" reverseOrder={true} />
    </>
  );
}

export default App;
