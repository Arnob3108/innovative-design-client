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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("http://localhost:5000/"),
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
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
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
      },
      {
        path: "course/:id/premium",
        element: <PremiumCourse></PremiumCourse>,
      },
    ],
  },
]);
