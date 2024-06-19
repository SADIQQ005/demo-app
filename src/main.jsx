import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { FormProvider } from "./contexts/formContext.jsx";
import  PaymentReturn from './pages/PaymantReturn/index.jsx'

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/verify",
    element: <PaymentReturn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FormProvider>
        <RouterProvider router={router} />
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>
);
