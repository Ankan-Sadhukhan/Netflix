import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Header from "./Header";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/log",
      element: <div>Hi!!!</div>,
    },
    {
      path: "/header",
      element: <Header />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
