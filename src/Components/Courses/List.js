import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Routes/Main";

const List = ({ course }) => {
  const { handleSelectCard } = useContext(CoursesContext);

  return (
    <div>
      <Link to={`/course/${course.id}`}>
        <li
          onClick={() => handleSelectCard(course)}
          className="ml-16 lg:mt-16 my-10 text-black hover:underline transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
        >
          {course.name}
        </li>
      </Link>
    </div>
  );
};

export default List;
