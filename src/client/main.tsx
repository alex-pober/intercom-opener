import "./main.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./routes/navbar/navbar";
import App from "../client/routes/root";
import FAQ from "../client/routes/faq/faq"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "faq",
    element: <FAQ />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
