import React, { useState } from "react";
import { Users, Send, Bell, Menu, X, LayoutDashboard } from "lucide-react";
import { Outlet, useNavigate, useLocation } from "react-router-dom"; // To render the child-pages

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // To get current URL
  const currentPath = location.pathname; // ./pagename

  // Define styling classes for active/deactive buttons
  const getNavStyle = (path) => {
    // Styling codes from original MainDashboard
    const baseStyle =
      "px-3 sm:px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base border";

    if (currentPath === path) {
      // Active style: blue background
      return `${baseStyle} bg-blue-900 text-white border-transparent`;
    }

    // Deactive style: gray background
    return `${baseStyle} bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200`;
  };

  const getIconNavStyle = (path) => {
    const baseStyle =
      "w-12 h-12 rounded-full flex items-center justify-center transition-colors border";

    if (currentPath === path) {
      return `${baseStyle} bg-blue-900 text-white border-transparent`;
    }
    return `${baseStyle} bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - copied from MainDashboard */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center relative w-full">
            <div className="flex items-center">
              <div className="w-32 h-12 sm:w-40 sm:h-14 rounded-lg flex items-center justify-center m-5">
                <img src="/Group-1.png" alt="Ai Lab Logo" />
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 absolute right-4"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation - copied from MainDashboard */}
      <nav
        className={`bg-white border-b border-gray-200 ${
          mobileMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center py-4 gap-2 md:gap-4">
            <button
              className={getNavStyle("/dashboard")}
              onClick={() => navigate("/dashboard")}
            >
              <LayoutDashboard size={18} />
              <span>Sistem Merkezi</span>
            </button>

            <button
              className={getNavStyle("/team")}
              onClick={() => navigate("/team")}
            >
              <Users size={18} />
              <span>Takımım</span>
            </button>

            <button
              className={getNavStyle("/messages")}
              onClick={() => navigate("/messages")}
            >
              <Send size={18} />
              <span>Mesaj Gönder</span>
            </button>

            <button
              className={getNavStyle("/notifications")}
              onClick={() => navigate("/notifications")}
            >
              <Bell size={18} />
              <span>Bildirimlerim</span>
            </button>

            <button
              className={getNavStyle("/profile")}
              onClick={() => navigate("/profile")}
            >
              <Users size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content - Main Change */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex-grow">
        {/*
          <Outlet /> will render the route from App.jsx to here
        */}
        <Outlet />
      </main>

      {/* Footer - copied from MyProfilePage - 'fixed' removed) */}
      <footer className="bg-white border-t border-gray-200 mt-8 lg:mt-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
            <button
              onClick={() => navigate("/help-center")}
              className="hover:text-blue-900 transition-colors"
            >
              Yardım Merkezi
            </button>
            <button
              onClick={() => navigate("/terms")}
              className="hover:text-blue-900 transition-colors"
            >
              Kullanıcı Sözleşmesi
            </button>
            <button
              onClick={() => navigate("/developers")}
              className="hover:text-blue-900 transition-colors"
            >
              Geliştirici Ekibi
            </button>

            {/* Deactive Button */}
            <span className="text-gray-400 cursor-not-allowed">
              İlgili Sayfada Hata Bildir
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
