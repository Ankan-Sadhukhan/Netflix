import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Header from "./Header";
import Browse from "./Browse";

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
    {
      path: "/browse",
      element: <Browse />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
