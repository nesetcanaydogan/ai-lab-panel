import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Pages
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationForm from "./pages/RegisterPage.jsx";
import AdminDashboard from "./pages/MainDashboard.jsx";
import ProfilePage from "./pages/MyProfilePage.jsx";
import InDevelopmentPage from "./pages/InDevelopmentPage.jsx";

// Importing Components
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from "./components/Layout.jsx";
// import { Layout } from "lucide-react";

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
        <Route element={<Layout />}>
          {/* Covers all the child-pages */}
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/team" element={<InDevelopmentPage />} />
          <Route path="/messages" element={<InDevelopmentPage />} />
          <Route path="/notifications" element={<InDevelopmentPage />} />
          <Route path="/help-center" element={<InDevelopmentPage />} />
          <Route path="/terms" element={<InDevelopmentPage />} />
          <Route path="/developers" element={<InDevelopmentPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
