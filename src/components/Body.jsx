import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Header from "./Header";
import Browse from "./Browse";
import { Button } from "semantic-ui-react";
import ButtonExampleAnimated from "./ButtonExampleAnimated";
import RatingExampleDisabled from "./RatingExampleDisabled";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/log",
      element: <RatingExampleDisabled/>,
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
    {
      path: "/hi",
      element: <ButtonExampleAnimated />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
