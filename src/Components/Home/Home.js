import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AwsomeSlider from "./AwsomeSlider";
import CourseInfo from "./CourseInfo";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-xl lg:text-4xl text-white font-extrabold mt-[3%]">
        Welcome <br /> To Our <br />{" "}
      </h1>
      <p className="text-white text-center uppercase text-xl lg:text-5xl w-[90%] mb-[5%] lg:mb-0 lg:w-[65%] mx-auto bg-blue-500/50 py-5 mt-3 font-bold px-3 rounded-2xl">
        <Typewriter
          words={[
            "Innovative Design",
            "Get the creativity out of you!",
            "Be a professional Designer.",
            "Check out our courses!",
            "select your desire course! Bhoom!!!",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <AwsomeSlider></AwsomeSlider>
      <CourseInfo></CourseInfo>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
