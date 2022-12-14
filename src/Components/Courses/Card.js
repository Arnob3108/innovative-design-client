import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Routes/Main";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ course }) => {
  const { handleSelectCard } = useContext(CoursesContext);
  const { name, img, price, id } = course;

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
    >
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl shadow-blue-700"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {name}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            {price}
          </span>
          <Link to={`/course/${id}`}>
            <button
              onClick={() => handleSelectCard(course.id)}
              className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
            >
              Course Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
