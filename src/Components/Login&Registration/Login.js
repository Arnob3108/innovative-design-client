import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse glass rounded-2xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
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
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className=" text-sm text-black">Login with social accounts</p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="form-control mt-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
