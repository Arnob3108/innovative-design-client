import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo2.png";

const Header = () => {
  return (
    <div>
      <div className="navbar lg:justify-evenly text-slate-600 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu glass text-slate-600 menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Courses</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <button className="text-slate-600 w-24 flex h-16 normal-case text-xl font-bold">
            {" "}
            <img className="w-full h-full" src={logo} alt="" />
            Innovative Design
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li tabIndex={0}>
              <a>Courses</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div>
            <Link to="login">
              <button className="btn text-black glass">LogIn</button>
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content glass rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
