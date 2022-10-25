import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CoursesContext } from "../Routes/Main";

const List = ({ course }) => {
  //   console.log(course);
  const { handleSelectCard } = useContext(CoursesContext);
  return (
    <div>
      <Link to="/card">
        <li
          onClick={() => handleSelectCard(course)}
          className="ml-16 lg:mt-16 my-10 hover:underline transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
        >
          {course.name}
        </li>
      </Link>
    </div>
  );
};

export default List;
