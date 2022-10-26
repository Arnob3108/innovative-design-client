import React, { useContext } from "react";

import { CoursesContext } from "../Routes/Main";
import List from "./List";

const CourseList = () => {
  const { courses } = useContext(CoursesContext);
  return (
    <div className="lg:w-1/3 font-bold text-2xl text-black  bg-blue-200 opacity-50 shadow-slate-500 shadow-2xl lg:min-h-screen">
      <p className="text-center text-indigo-600 text-4xl mt-10">
        Find Your Course
      </p>
      {courses.map((course) => (
        <List key={course.id} course={course}></List>
      ))}
    </div>
  );
};

export default CourseList;
