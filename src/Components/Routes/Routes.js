import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Courses from "../Courses/Courses";
import Login from "../Login&Registration/Login";
import Registration from "../Login&Registration/Registration";
import Main from "./Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import SelectedCardDetails from "../Courses/SelectedCardDetails";
import CardWithList from "../Courses/CardWithList";
import PremiumCourse from "../Courses/PremiumCourse";
import Profile from "../Profile/Profile";
import Faq from "../Faq/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("https://education-server-arnob3108.vercel.app/"),
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "course/:id",
        element: <CardWithList></CardWithList>,
        loader: ({ params }) =>
          fetch(
            `https://education-server-arnob3108.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "course/:id/premium",
        element: (
          <PrivateRoute>
            <PremiumCourse></PremiumCourse>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://education-server-arnob3108.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
