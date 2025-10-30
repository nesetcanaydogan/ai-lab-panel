import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser as apiLoginUser } from "../services/api";
import apiClient from "../services/api";

// Creating Context
const AuthContext = createContext(null);

// Provider Component - Component that wraps up all the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Logged in user info
  const [token, setToken] = useState(localStorage.getItem("token")); // Get token from memory
  const navigate = useNavigate();

  // At first component load, if there is token go tell API
  useEffect(() => {
    if (token) {
      // Make sure that API will use that token for every future requests
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // TODO: With the call of "/api/Auth/me" we can get user data
    } else {
      // Delete the token from the API's header
      delete apiClient.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // Log In Function - Global
  const login = async (loginData) => {
    // loginData = {emailOrUsername, password}

    // API Call
    const response = await apiLoginUser(loginData);

    // if (success)
    const { accessToken, user } = response.data;

    // Save token to the state
    setToken(accessToken);
    // Save user to the state
    setUser(user);
    // Save token to the browser memory
    localStorage.setItem("token", accessToken);
    // Redirect user to the dashboard
    navigate("/dashboard");
  };

  // Log Out Function - Global
  const logout = () => {
    // Clear states
    setUser(null);
    setToken(null);

    // Delete the token from memory
    localStorage.removeItem("token");

    // Redirect the user to the Log In page
    navigate("/login");
  };

  // The values that this box will provide to outside
  const value = {
    token,
    user,
    isAuthenticated: !!token, // If there is token then user did log in
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// A hook for better usage
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth, AuthProvider içinde kullanılmalıdır.");
  }
  return context;
};
