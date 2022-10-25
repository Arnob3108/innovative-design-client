import React from "react";
import CourseList from "./CourseList";
import SelectedCardDetails from "./SelectedCardDetails";

const CardWithList = () => {
  return (
    <div className="lg:flex">
      <CourseList></CourseList>
      <SelectedCardDetails></SelectedCardDetails>
    </div>
  );
};

export default CardWithList;
