import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PremiumCourse = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();

  const {
    img,
    name,
    discription,
    price,
    totalClass,
    duration,
    software,
    video,
    id,
  } = course;

  return (
    <div className="relative w-full h-full">
      <div className="absolute hidden w-full lg:block h-96" />
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Affordable</span>
            </span>{" "}
            for everyone
          </h2>
          <h1 className="text-4xl font-bold text-slate-700 mb-[3%]">{name}</h1>
          <p className="text-base text-gray-700 md:text-lg">{discription}</p>
          <div className="mt-[2%]">
            <h1 className="text-2xl text-green-500 font-bold">
              Your Name: {user.displayName}
            </h1>
            <p className="text-xl text-slate-700 font-semibold">
              Course Name: {name}
            </p>
            <p className="text-xl text-slate-700 font-semibold">
              Course Id: {id}
            </p>
          </div>
        </div>
        <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
          <div>
            <div className="p-8 bg-gray-900 rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-white">
                  Stater Plan
                </p>
                <p className="text-2xl font-medium tracking-wide text-blue-500">
                  {name}
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    {price}
                  </p>
                  <p className="text-lg text-gray-500">/ one time</p>
                </div>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">10 videos per day</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">
                    5 aditional resources
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">2 market place</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">
                    Support in live 1 time a day
                  </p>
                </li>
              </ul>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get Now
              </button>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          <div>
            <div className="p-8 bg-gray-900 rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-white">
                  Premium Plan
                </p>
                <p className="text-2xl font-medium tracking-wide text-blue-500">
                  Get All Courses Access
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    $59
                  </p>
                  <p className="text-lg text-gray-500">/ month</p>
                </div>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">20 videos per day</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">
                    Unlimited Resources
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">5 market place</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">
                    Support in live 5 time a day
                  </p>
                </li>
              </ul>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-black transition duration-200 rounded shadow-lg bg-teal-400 hover:bg-amber-500 focus:shadow-outline focus:outline-none"
              >
                Get Now
              </button>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCourse;
