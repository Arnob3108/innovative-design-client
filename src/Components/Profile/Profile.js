import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full mx-auto mt-[18%] max-w-md px-8 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800/80">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img
          className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src={user?.photoURL}
        />
      </div>

      <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-amber-400  md:mt-0 md:text-3xl">
        {user?.displayName}
      </h2>

      <p className="mt-2 text-gray-600 uppercase dark:text-gray-200">
        Login With:{" "}
        <span className=" text-amber-300">
          {user?.providerData[0]?.providerId}
        </span>
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-200">
        Id: <span className=" text-amber-400">{user?.uid}</span>
      </p>

      <div className="flex justify-end mt-4">
        {user?.email ? (
          <p className="text-xl font-medium text-blue-600 dark:text-blue-300">
            {user?.email}
          </p>
        ) : (
          <p className="text-xl font-medium text-red-800 dark:text-red-500">
            Email Not Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
