import React from "react";
import { Route, Navigate } from "react-router-dom";

// Mock authentication check function
const isAuthenticated = () => {
  return !!localStorage.getItem("userToken"); // Example check
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

// Higher-Order Component for protected routes
// const ProtectedRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Navigate to="/login" replace />
//       )
//     }
//   />
// );

export default ProtectedRoute;
