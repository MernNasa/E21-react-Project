import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import HomePageLayout from "../layouts/HomePageLayout";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Home from "../pages/Home";
// import NewArrival from "../pages/NewArrival";
// import Dashboard from "../dashboard/Dashboard";
const HomePageLayout=lazy(()=>import("../layouts/HomePageLayout"))
const Login=lazy(()=>import("../pages/Login"))
const Register=lazy(()=>import("../pages/Register"))
const Home=lazy(()=>import("../pages/Home"))
const NewArrival=lazy(()=>import("../pages/NewArrival"))
const Dashboard=lazy(()=>import("../dashboard/Dashboard"))
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