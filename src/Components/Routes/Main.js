import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

export const CoursesContext = createContext([]);

const Main = () => {
  const courses = useLoaderData();
  const [selectedCourse, setSelectedCourse] = useState();

  const handleSelectCard = (selected) => {
    setSelectedCourse(selected);
    console.log(selected);
  };

  const info = {
    courses,
    selectedCourse,
    setSelectedCourse,
    handleSelectCard,
  };

  return (
    <CoursesContext.Provider value={info}>
      <Header></Header>
      <Outlet></Outlet>
    </CoursesContext.Provider>
  );
};

export default Main;
