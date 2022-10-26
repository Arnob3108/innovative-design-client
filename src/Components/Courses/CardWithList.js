import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseList from "./CourseList";
import SelectedCardDetails from "./SelectedCardDetails";

const CardWithList = () => {
  const course = useLoaderData();

  return (
    <div className="lg:flex">
      <CourseList></CourseList>
      <SelectedCardDetails
        course={course}
        key={course.id}
      ></SelectedCardDetails>
    </div>
  );
};

export default CardWithList;
