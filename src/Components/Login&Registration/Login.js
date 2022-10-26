import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logo from "../../Assets/Images/logo.png";
import { AuthContext } from "../../Context/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { googleProvider, signIn, githubProvider, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // google sign in
  const googleSignInProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleProvider(googleSignInProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success("successfully login");
      })
      .catch((error) => toast.error(error.message));
  };

  // git hub sign in
  const githubSignInProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    githubProvider(githubSignInProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success("successfully login");
      })
      .catch((error) => toast.error(error.message));
  };

  // email password login
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        navigate(from, { replace: true });
        toast.success("login Successfull");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full mt-20 max-w-sm p-6 m-auto mx-auto bg-blue-200/50 rounded-md shadow-2xl">
      <img className="w-[30%] lg:w-[30%] mx-auto" src={logo} alt="" />
      <h1 className="text-3xl font-semibold text-center text-slate-600">
        Innovative Design
      </h1>

      <form onSubmit={handleSubmit} className="mt-6">
        <div>
          <label htmlFor="email" className="block text-sm text-slate-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="block w-full px-4 py-2 mt-2 shadow-inner text-slate-600 glass shadow-slate-500/80 border rounded-md dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm text-slate-600">
              Password
            </label>
            <a href="#" className="text-xs text-slate-600 hover:underline">
              Forget Password?
            </a>
          </div>

          <input
            type="password"
            name="password"
            required
            placeholder="Your Password"
            className="block w-full px-4 py-2 mt-2 shadow-inner text-slate-600 glass shadow-slate-500/80 border rounded-md dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <p>
          <small className="text-red-600">{error}</small>
        </p>

        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600">
            Login
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
          or login with Social Media
        </div>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>

      <div className="flex items-center mt-6 -mx-2">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
        >
          <FcGoogle className="text-2xl"></FcGoogle>

          <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>

        <FaGithub
          onClick={handleGithubSignIn}
          className=" text-4xl  text-slate-600"
        ></FaGithub>
      </div>

      <p className="mt-8 text-xs font-light text-center text-gray-700">
        {" "}
        Don't have an account?{" "}
        <Link
          to="/registration"
          className="font-medium text-indigo-600 hover:underline"
        >
          Create One
        </Link>
      </p>
    </div>
  );
};

export default Login;
