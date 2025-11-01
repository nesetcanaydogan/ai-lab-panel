import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContent"; // Global Hook

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // For error message
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await login(formData);
    } catch (error) {
      if (formData.emailOrUsername === "" || formData.password === "") {
        console.error("Eksik veya hatalı giriş yaptınız.");
        alert("Eksik veya hatalı giriş yaptınız.");
        setMessage("Eksik veya hatalı giriş yaptınız.");
      } else if (error.response) {
        console.error("API Hatası:", error.response.data);
        alert("HATA: API Hatası");
        setMessage(
          error.response.data.message || "Giriş başarısız. Bilgiler yanlış."
        );
      } else if (error.request) {
        console.error("Sunucuya ulaşılamadı:", error.message);
        alert("HATA: Sunucuya ulaşılamadı.");
        setMessage("Sunucuya bağlanılamadı. API'nin çalıştığından emin olun.");
      } else {
        console.error("İstek Hatası:", error.message);
        alert("HATA: İstek sırasında bir hata oluştu.");
        setMessage("Bir hata oluştu: " + error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white py-6 sm:py-8">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <div className="w-32 h-12 sm:w-40 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 my-3">
                <img src="/Group-1.png" alt="Ai Lab Logo" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0D1552] my-3 mb-0">
                Sistem Yönetim Paneli
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Login Form */}
      <main className="flex-grow py-6 sm:py-8 lg:py-12 flex items-center">
        <div className="w-full max-w-md mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10">
              Giriş Yap
            </h2>

            <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-2">
                  E-Posta
                </label>
                <input
                  type="email"
                  value={formData.emailOrUsername}
                  name="emailOrUsername"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-2">
                  Şifreniz
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center">
                  <Eye size={14} className="mr-1" /> Gizle
                </p>
              </div>

              {/* Login Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Giriş Yap
                </button>
              </div>

              {/* Terms Text */}
              <p className="text-center text-xs sm:text-sm text-gray-600 pt-1">
                Giriş yaparak{" "}
                <a
                  href="#"
                  className="text-blue-900 underline hover:text-blue-700"
                >
                  Kullanıcı Sözleşmesi
                </a>{" "}
                kurallarını kabul etmiş olursunuz.
              </p>

              {/* Forgot Password Link */}
              <div className="text-center pt-4">
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-700 underline hover:text-blue-900 transition-colors"
                >
                  Şifremi Unuttum
                </a>
              </div>
            </form>
          </div>

          {/* Divider with "New Member" Text */}
          <div className="relative my-8 sm:my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-50 text-sm sm:text-base text-gray-600">
                Yeni üye isen
              </span>
            </div>
          </div>

          {/* Register Button */}
          <div className="px-4 sm:px-6">
            <button
              onClick={() => console.log("Navigate to registration")}
              className="w-full bg-white text-gray-900 py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Hesap kaydı için başvur
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 sm:py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

export default LoginPage;
