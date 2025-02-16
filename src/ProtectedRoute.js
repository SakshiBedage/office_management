import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ path, ...props }) => {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  // Otherwise, render the requested route
  return <Route path={path} {...props} />;
};

export default ProtectedRoute;
