import axios from "axios";

// Back End URL
const API_BASE_URL = "https://api.ailab.org.tr";

// creating instance - Axios Basic Settings
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API Requests
export const registerUser = (userData) => {
  // userData = { email, userName, schoolNumber, password, fullName, phoneNumber }
  return apiClient.post("api/Auth/register", userData);
};

export const loginUser = (loginData) => {
  // loginData = { emailOrUsername, password }
  return apiClient.post("api/Auth/login", loginData);
};

export const refreshToken = (tokenData) => {
  return apiClient.post("api/Auth/refresh-token", tokenData);
};

export const logoutUser = (tokenData) => {
  return apiClient.post("api/Auth/logout", tokenData);
};

export const getMe = () => {
  return apiClient.get("api/Auth/me");
};

export default apiClient;
