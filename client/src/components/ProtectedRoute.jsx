import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContent.jsx";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Get isConnected info from global memory

  if (!isAuthenticated) {
    // If user did not log in - no token
    return <Navigate to="/login" replace />
  }

  // If user did log in - there is token
  return <Outlet />
};

export default ProtectedRoute;
