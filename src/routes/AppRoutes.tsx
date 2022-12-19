import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../config/layout/Default";
import CreatAccount from "../pages/CreatAccount";
import Login from "../pages/Login";
import Messages from "../pages/Messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout page={<Login />} />,
  },
  {
    path: "/CreatAccount",
    element: <DefaultLayout page={<CreatAccount />} />,
  },
  {
    path: "/Messages",
    element: <Messages />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
