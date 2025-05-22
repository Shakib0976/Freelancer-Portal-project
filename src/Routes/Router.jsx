import {
  createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Home from "../Layouts/Home";
import AddTask from "../../pages/AddTask";
import Bouwsetasks from "../../pages/Bouwsetasks";
import MyTask from "../../pages/MyTask";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import ErrorPage from "../../pages/Error";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage> ,
    Component: Root ,
    children:[
      {
        index:true , Component:Home
      },

      {
        path:'/addtask',
        Component: AddTask

      },
      {
        path:'/browsetasks',
        element: <PrivateRoutes><Bouwsetasks></Bouwsetasks></PrivateRoutes>
      },

      {
        path:'/mytask',
        Component:MyTask
      },
      {
        path:'/login',
        Component:Login
      },

      {
        path: '/signup',
        Component: SignUp
      }

    ]
  },
]);


export default router;