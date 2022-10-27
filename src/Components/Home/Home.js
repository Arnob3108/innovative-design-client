import React from "react";
import { Link } from "react-router-dom";
import AwsomeSlider from "./AwsomeSlider";
import CourseInfo from "./CourseInfo";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-xl lg:text-4xl text-white font-extrabold mt-[3%]">
        Welcome <br /> To Our <br />{" "}
      </h1>
      <p className="text-white text-center text-2xl lg:text-5xl w-[60%] lg:w-[25%] mx-auto bg-blue-500/50 py-5 mt-3 font-bold px-3 rounded-2xl">
        Innovative Design
      </p>
      <h1 className="text-center text-2xl lg:text-4xl text-blue-500 font-extrabold mt-[2%]">
        Set Your{" "}
        <Link
          className=" transition ease-in-out hover:-translate-y-1 hover:text-blue-700 duration-500 "
          to="/courses"
        >
          Course
        </Link>{" "}
        & Achive Your Goal!!
      </h1>
      <AwsomeSlider></AwsomeSlider>
      <CourseInfo></CourseInfo>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
