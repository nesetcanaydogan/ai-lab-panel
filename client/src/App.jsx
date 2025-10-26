import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Pages
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationForm from "./pages/RegisterPage.jsx";
import AdminDashboard from "./pages/MainDashboard.jsx";
import ProfilePage from "./pages/MyProfilePage.jsx";

// Importing Components
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      {/* Redirecting user to directly to log in page
       */}
      <Route path="/" element={<LoginPage />} />

      {/* Other pages' routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationForm />} />

      {/* Conditionally accessible routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
