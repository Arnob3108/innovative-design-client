import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";

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
      <Footer></Footer>
    </CoursesContext.Provider>
  );
};

export default Main;
