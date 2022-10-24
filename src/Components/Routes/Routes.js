import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Login from "../Login&Registration/Login";
import Registration from "../Login&Registration/Registration";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
