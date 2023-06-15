import "./main.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./routes/navbar/navbar";
import App from "../client/routes/root";
import FAQ from "../client/routes/faq/faq"
import Signup from "./routes/sign-up/sign-up";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "faq",
    element: <FAQ />
  },
  {
    path: "sign-up",
    element: <Signup />
  }

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
