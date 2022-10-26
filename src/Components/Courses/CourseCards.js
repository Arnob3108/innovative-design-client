import React, { useContext } from "react";
import { CoursesContext } from "../Routes/Main";
import Card from "./Card";

const CourseCards = () => {
  const { courses } = useContext(CoursesContext);
  return (
    <div className="lg:w-2/3">
      <h1 className="text-center lg:text-4xl text-3xl text-white font-bold my-12">
        Check Our Graphics Design <br /> Courses
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {courses.map((course) => (
          <Card key={course.id} course={course}></Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
