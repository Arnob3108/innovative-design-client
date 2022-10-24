import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logo from "../../Assets/Images/logo2.png";

const Login = () => {
  return (
    <div className="hero min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse glass rounded-2xl">
        <div className="w-[20%] lg:w-full">
          <img src={logo} alt="" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <from className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered shadow-inner glass shadow-slate-500/80"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered shadow-inner glass shadow-slate-500/80"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className=" text-sm text-center text-black">
              Login with social accounts
            </p>
            <div className="text-center text-3xl my-3">
              <button>
                <FcGoogle></FcGoogle>
              </button>
              <button className="ml-5">
                <FaGithub></FaGithub>
              </button>
            </div>
            <div className="form-control ">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <h1>
                <small>
                  Don't have an account?{" "}
                  <Link className="font-bold text-blue-500" to="/registration">
                    Create Account
                  </Link>
                </small>
              </h1>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Login;
