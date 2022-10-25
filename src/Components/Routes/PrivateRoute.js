import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import HashLoader from "react-spinners/HashLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <HashLoader
        className="w-full mx-auto mt-[20%]"
        color="#36d7b7"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
