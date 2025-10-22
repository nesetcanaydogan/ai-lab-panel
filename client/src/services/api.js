import axios from "axios";

// Back End URL
const API_BASE_URL = "http://localhost:5172/api";

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
  return apiClient.post("/Auth/register", userData);
};

export const loginUser = (loginData) => {
  // loginData = { emailOrUsername, password }
  return apiClient.post("/Auth/login", loginData);
};

export const refreshToken = (tokenData) => {
  return apiClient.post("/Auth/refresh-token", tokenData);
};

export const logoutUser = (tokenData) => {
  return apiClient.post("/Auth/logout", tokenData);
};

export const getMe = (authToken) => {
  return apiClient.get("/Auth/me", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

export default apiClient;
