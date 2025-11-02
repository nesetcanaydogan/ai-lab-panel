import React from "react";
import { HardHat } from "lucide-react";
import { Link } from "react-router-dom";

const InDevelopmentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-xl shadow-sm">
      <HardHat size={64} className="text-yellow-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Sayfa Yapım Aşamasında
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Bu bölüm şu anda geliştirme aşamasındadır. Yakında burada olacak!
      </p>
      <Link
        to="/dashboard"
        className="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default InDevelopmentPage;
