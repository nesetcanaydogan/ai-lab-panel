import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser as apiLoginUser, getUserById } from "../services/api";
import apiClient from "../services/api";

// Creating Context
const AuthContext = createContext(null);

// Provider Component - Component that wraps up all the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Logged in user info
  const [token, setToken] = useState(localStorage.getItem("token")); // Get token from memory
  const [isLoading, setIsLoading] = useState(true); // To know that getting data while page is loading
  const navigate = useNavigate();

  // At first component load, if there is token go tell API
  useEffect(() => {
    const fetchUser = async () => {
      if (token && user) {
        apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        try {
          // Get the token's owner from API
          const response = await getUserById(user);
          setUser(response.data);
        } catch (error) {
          console.error("Token, kullanıcıyı getiremedi, çıkış yapılıyor.");
          logout();
        }
      } else {
        delete apiClient.defaults.headers.common["Authorization"];
      }
      setIsLoading(false); // Loading is over
    };

    fetchUser();
  }, [token, user]);

  // Log In Function - Global
  const login = async (loginData) => {
    // loginData = {emailOrUsername, password}

    // API Call
    const response = await apiLoginUser(loginData);
    console.log(response.data)
    // if (success)
    const { accessToken, user } = response.data;

    // Save token to the state
    setToken(accessToken);
    // Save user to the state
    setUser(user);
    // Save token to the browser memory
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", user);
    // Redirect user to the dashboard
    navigate("/dashboard");
  };

  // Log Out Function - Global
  const logout = () => {
    // Clear states
    setUser(null);
    setToken(null);
    setUser(null);

    // Delete the token from memory
    localStorage.removeItem("token");
    localStorage.removeItem("user");

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

  // Loading Page
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

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
