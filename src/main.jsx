import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from "./pages/HomeContainer/HomeContainer.jsx";
import About from "./pages/About/About.jsx";
import Bus from "./pages/Bus/Bus.jsx";
import Search from "./pages/Search/Search.jsx";
import Service from "./pages/Service/Service.jsx";
import BusBooking from "./pages/Bus/BusBooking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        path: "/",
        element: <HomeContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bus",
        element: <Bus />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path:"/booking/:id",
        element: <BusBooking />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
