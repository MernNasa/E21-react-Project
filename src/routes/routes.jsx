import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layouts/HomePageLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import NewArrival from "../pages/NewArrival";
import Dashboard from "../dashboard/Dashboard";
import PrivateRouting from "./privaterouting/PrivateRouting";

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
            path:"/newarrival",
            element:<NewArrival/>
        },
        {
          path:"/dashboard",
          element:<PrivateRouting>
              <Dashboard/>
          </PrivateRouting>
        }
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