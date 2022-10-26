import React, { createRef } from "react";
import { FcPrint } from "react-icons/fc";
import { Link } from "react-router-dom";

import Pdf from "react-to-pdf";

const SelectedCardDetails = ({ course }) => {
  const ref = createRef();
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
    <div ref={ref} className="w-full">
      <Pdf targetRef={ref} filename={`${name}.pdf`}>
        {({ toPdf }) => (
          <button className=" lg:ml-[95%] ml-[45%] mt-[1%]" onClick={toPdf}>
            <FcPrint className="text-3xl"></FcPrint>
          </button>
        )}
      </Pdf>
      {/* pdf */}
      <h1 className="text-center text-4xl text-slate-700 font-bold mt-[1%]">
        {name}
      </h1>
      {/* card */}
      <div className="w-full lg:w-2/3 lg:ml-[35%] ml-[4%] lg:mt-[3%] max-w-sm overflow-hidden bg-white rounded-lg shadow-2xl shadow-slate-600 dark:bg-gray-800 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
        <img
          className="object-cover object-center w-full h-56"
          src={img}
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-lg font-semibold text-white">{name}</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Software: {software}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">{discription}</p>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">Total Class: {totalClass}</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">Class Duration: {duration}</h1>
          </div>

          <div className="flex justify-between items-center mt-4 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">Price: {price}</h1>
            <Link to={`/course/${id}/premium`}>
              <button className="btn text-white font-bold bg-amber-500 hover:bg-amber-600">
                Get Premium Access
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* video */}
      <div>
        <section className="lg:w-2/3 lg:ml-[17%] ml-[1%] lg:mt-[3%]">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
              explore our <br /> awesome{" "}
              <span className="text-blue-500">{name}</span>
            </h1>

            <iframe
              className="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden"
              src={video}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen=""
            ></iframe>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      Total Modeuls: {totalClass}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      {software}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      Video Duration: {duration}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      Simple & clean designs
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelectedCardDetails;
