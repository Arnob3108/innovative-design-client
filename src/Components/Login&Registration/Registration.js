import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo2.png";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  const [error, setError] = useState("");
  const { createUser, userProfileUpdate } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoUrl, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateProfile(name, photoUrl);
        toast.success("Registration Successfull");
        toast.success("verify your email to login");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleUpdateProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    userProfileUpdate(profile)
      .then(() => toast.success("Profile Updated"))
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse glass rounded-2xl">
        <div className="w-[20%] lg:w-full">
          <img src={logo} alt="" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered shadow-inner glass shadow-slate-500/80"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered shadow-inner glass shadow-slate-500/80"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered shadow-inner glass shadow-slate-500/80"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered shadow-inner glass shadow-slate-500/80"
              />
            </div>
            <p>
              <small className="text-red-600">{error}</small>
            </p>

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
