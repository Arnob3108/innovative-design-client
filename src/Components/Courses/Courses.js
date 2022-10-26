import React from "react";
import CourseCards from "./CourseCards";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <div className="lg:flex">
      <CourseList></CourseList>
      <CourseCards></CourseCards>
    </div>
  );
};

export default Courses;
