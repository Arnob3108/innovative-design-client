import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Routes/Main";

const CourseList = () => {
  const courses = useContext(CoursesContext);
  return (
    <div className="w-1/3 font-bold text-2xl text-black  bg-blue-200 opacity-50 shadow-slate-500 shadow-2xl min-h-screen">
      <p className="text-center text-indigo-600 text-4xl mt-10">
        Find Your Course
      </p>
      {courses.map((course) => (
        <Link key={course.id}>
          <li className="ml-16 mt-16 hover:underline">{course.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
