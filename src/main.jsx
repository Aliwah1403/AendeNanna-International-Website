import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigation,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
