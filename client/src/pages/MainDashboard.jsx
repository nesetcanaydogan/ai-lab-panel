import React, { useState } from "react";
import { Users, Send, Bell, Menu, X } from "lucide-react";

const AdminDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default AdminDashboard;
