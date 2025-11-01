import React, { useState } from "react";
import { Users, Send, Bell, Menu, X } from "lucide-react";

const AdminDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center relative w-full">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-32 h-12 sm:w-40 sm:h-14 rounded-lg flex items-center justify-center m-5">
                <img src="/Group-1.png" alt="Ai Lab Logo" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 absolute right-4"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
          <div className="flex flex-wrap justify-center items-center py-4 gap-2 md:gap-4">
            <button className="bg-blue-900 text-white px-3 sm:px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base border border-gray-200">
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
            <button className="bg-gray-50 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base border border-gray-200">
              <Users size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 pb-24 mt-10">
        {/* Stats Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Laboratuvar Doluluğu /{" "}
            <span className="text-blue-900 font-bold">
              İçerideki Takım Arkadaşlarının Sayısı
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <p className="text-gray-600 text-sm mb-2">
                İçerideki Çalışan Sayısı
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                8{" "}
                <span className="text-xl sm:text-2xl text-gray-500">/ 16</span>
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2">
                İçerideki Takım Arkadaşlarının Sayısı
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                3 <span className="text-xl sm:text-2xl text-gray-500">/ 5</span>
              </p>
            </div>
          </div>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Aktivitem */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Aktivitem
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <p className="text-xs text-gray-500 mb-1">
                  Laboratuvara Son Giriş
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  10 Eylül 2026
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <p className="text-xs text-gray-500 mb-1">Takımım</p>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  Ai Lab ABC Takımı
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <p className="text-xs text-gray-500 mb-1">Projem/Projelerim</p>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  Teknofest Savaşan İHA{" "}
                  <span className="text-blue-600 text-sm">diğer →</span>
                </p>
              </div>
            </div>
          </div>

          {/* Mesajlarım */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Mesajlarım
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <p className="text-xs text-gray-500 mb-1">
                  Ahmet Ahmet - Takım Kaptanı
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  Tasarım Revizesi
                </p>
                <span className="text-blue-600 text-sm font-medium">
                  devamını oku →
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <p className="text-xs text-gray-500 mb-1">
                  Ayşe Ayşe - Yönetim Ekibi
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  Uyarı
                </p>
                <span className="text-blue-600 text-sm font-medium">
                  devamını oku →
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <p className="text-xs text-gray-500 mb-1">
                  Fatih Fatih - Danışman
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  TÜBİTAK Projesi
                </p>
                <span className="text-blue-600 text-sm font-medium">
                  devamını oku →
                </span>
              </div>
            </div>
          </div>

          {/* Takım Görevleri */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Takım Görevleri
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <p className="text-xs text-gray-500 mb-1">STT: 23.09.2026</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  KTR Rapor Teslimi
                </p>
                <span className="text-green-600 text-xs font-medium">
                  teslim edildi
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <p className="text-xs text-gray-500 mb-1">STT: 09.10.2026</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  ÖTR Rapor Teslimi
                </p>
                <span className="text-green-600 text-xs font-medium">
                  teslim edildi
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <p className="text-xs text-gray-500 mb-1">STT: 11.12.2026</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  Aylık Faaliyet Raporu
                </p>
                <span className="text-red-600 text-xs font-medium">
                  teslim edilmedi
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8 lg:mt-12 fixed bottom-0 left-0 w-full">
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

export default AdminDashboard;
