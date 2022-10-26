import React from "react";
import { Link } from "react-router-dom";
import Carosel from "./Carosel";
import CourseInfo from "./CourseInfo";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-slate-700 font-extrabold my-[5%]">
        Welcome <br /> To Our <br />
        <span className="text-blue-500 text-6xl">Innovative Design</span>{" "}
      </h1>
      <h1 className="text-center text-4xl text-blue-500 font-extrabold my-[2%]">
        Set Your{" "}
        <Link
          className=" transition ease-in-out hover:-translate-y-1 hover:text-blue-700 duration-500 "
          to="/courses"
        >
          Course
        </Link>{" "}
        & Achive Your Goal!!
      </h1>
      <Carosel></Carosel>
      <CourseInfo></CourseInfo>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
