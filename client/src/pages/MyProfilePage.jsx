import React, { useState } from "react";
import { Users, Send, Bell, Menu, X, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContent";

const ProfilePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-32 h-12 sm:w-40 sm:h-14 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">
                  ai lab
                </span>
              </div>
            </div>

            {/* Date/Time - Desktop */}
            <div className="hidden md:block text-gray-700 font-medium text-sm lg:text-base">
              14.09.2026 Pazartesi | 14:09
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* User Icon - Desktop */}
            <div className="hidden md:flex items-center">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white">
                <Users size={20} />
              </div>
            </div>
          </div>

          {/* Date/Time - Mobile */}
          <div className="md:hidden mt-3 text-gray-600 text-sm text-center">
            14.09.2026 Pazartesi | 14:09
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className={`bg-white border-b border-gray-200 ${
          mobileMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center py-4 gap-2 md:gap-0">
            <div className="flex flex-wrap gap-2 col-span-2 md:col-span-1">
              <button className="bg-gray-50 text-gray-700 px-3 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base border border-gray-200">
                <Users size={18} />
                <span>Sistem Merkezi</span>
              </button>
              <button className="bg-gray-50 text-gray-700 px-3 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base border border-gray-200">
                <Users size={18} />
                <span>Takımım</span>
              </button>
              <button className="bg-gray-50 text-gray-700 px-3 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base border border-gray-200">
                <Send size={18} />
                <span>Mesaj Gönder</span>
              </button>
              <button className="bg-gray-50 text-gray-700 px-3 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base border border-gray-200">
                <Bell size={18} />
                <span>Bildirimlerim</span>
              </button>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-end">
              <button className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-md">
                <Users size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Profile Header Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Profilim
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Ad Soyad</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                Ahmet Ahmet
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
                  AA
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Ahmet Ahmet
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8 lg:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
            <a href="#" className="hover:text-blue-900 transition-colors">
              Yardım Merkezi
            </a>
            <a href="#" className="hover:text-blue-900 transition-colors">
              Kullanıcı Sözleşmesi
            </a>
            <a href="#" className="hover:text-blue-900 transition-colors">
              Geliştirici Ekibi
            </a>
            <a href="#" className="hover:text-blue-900 transition-colors">
              İlgili Sayfada Hata Bildir
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
