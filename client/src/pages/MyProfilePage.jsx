import React, { useState } from "react";
import { Users, Send, Bell, Menu, X, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContent";

const ProfilePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout, user } = useAuth();

  return (
    <>
      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Profile Header Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Profilim
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Ad Soyad</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                {user ? user.fullName : "Kullanıcı Adı Yüklenemedi"}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Laboratuvarda Geçirilen Süre
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                11 gün, 4 saat, 43 dakika
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Ai Lab Puanı
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                384 <span className="text-base text-gray-500">| #24</span>
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column - Profile Info */}
          <div className="space-y-4 lg:space-y-6">
            {/* Profile Photo Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col items-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-gray-200 mb-4">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white text-6xl font-bold">
                  {user
                    ? user.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    : "AA"}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {user ? user.fullName : "..."}
              </h3>
            </div>

            {/* Info Cards */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-xs text-gray-500 mb-1">
                  Laboratuvara Son Giriş Tarihi
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-base sm:text-lg font-bold text-gray-900">
                    26.10.2026
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-700"
                  >
                    hata bildir <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-xs text-gray-500 mb-1">Aktif Projeler</p>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  2 Proje
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <button
                  type="button"
                  onClick={logout}
                  className="w-full text-left"
                >
                  <p className="text-base sm:text-lg font-bold text-blue-900 flex items-center">
                    ÇIKIŞ YAP <ArrowRight size={20} className="ml-2" />
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Leaderboard */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Lider Tablosu
            </h3>
            <div className="space-y-3">
              {/* Leader 1 */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500 font-medium w-16">
                    #1 | 665
                  </span>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    AYBERK AYBERK
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-400"></div>
                </div>
              </div>

              {/* Leader 2 */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500 font-medium w-16">
                    #2 | 664
                  </span>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    ŞEVVAL ŞEVVAL
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-400"></div>
                </div>
              </div>

              {/* Leader 3 */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500 font-medium w-16">
                    #3 | 663
                  </span>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    İREM İREM
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-pink-600 to-pink-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
