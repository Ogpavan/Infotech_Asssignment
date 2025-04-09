// src/auth/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // adjust path if needed

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-orange-400 border-dashed rounded-full animate-spin" />
      </div>
    );
  }

  return user ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
