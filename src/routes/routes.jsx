import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layouts/HomePageLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import NewArrival from "../pages/NewArrival";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/",
            element:<NewArrival/>
        },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);