import {
  createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Home from "../Layouts/Home";
import ErrorPage from "../pages/Error";
import PrivateRoutes from "./PrivateRoutes";
import SingleTask from "../Components/SingleTask";
import BidsDetails from "../Layouts/BidsDetails";
import AddTask from "../pages/AddTask";
import Bouwsetasks from "../pages/Bouwsetasks";
import Login from "../pages/Login";
import MyTask from "../pages/MyTask";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true, Component: Home
      },

      {
        path: '/addtask',
        element: <PrivateRoutes><AddTask></AddTask></PrivateRoutes>

      },
      {
        path: '/browsetasks',
        loader: () => fetch('https://freelance-project-server.vercel.app/task'),
        element: <PrivateRoutes><Bouwsetasks></Bouwsetasks></PrivateRoutes>
      },

      {
        path: '/mytask',
        element: <PrivateRoutes><MyTask></MyTask></PrivateRoutes>
      },
      {
        path: '/login',
        Component: Login
      },

      {
        path: '/signup',
        Component: SignUp
      },

      {
        path: '/task/:id',
        loader: ({ params }) => fetch(`https://freelance-project-server.vercel.app/task/${params.id}`),
        element: <PrivateRoutes><SingleTask></SingleTask></PrivateRoutes>
      },
      {
        path: '/bids/:id',
        loader: ({ params }) => fetch(`https://freelance-project-server.vercel.app/task/${params.id}`),
        element: <PrivateRoutes><BidsDetails></BidsDetails></PrivateRoutes>
      }

    ]
  },
]);


export default router;