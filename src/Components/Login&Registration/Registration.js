import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="hero min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse glass rounded-2xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration now!</h1>
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
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered shadow-inner glass shadow-slate-500/80"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered shadow-inner glass shadow-slate-500/80"
              />
            </div>
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
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration Now</button>
            </div>
            <div>
              <h1>
                <small>
                  Already have an account?{" "}
                  <Link className="font-bold text-blue-500" to="/login">
                    Login Now
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

export default Registration;
