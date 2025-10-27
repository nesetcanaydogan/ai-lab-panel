import React, {useState} from "react"
import {Eye, EyeOff} from "lucide-react"
import { useNavigate } from "react-router-dom";
import {registerUser} from "../services/api.js"

const RegistrationForm = () => {
  // Defining form and text states
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "", // Missing field
    studentId: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  })

  const [message, setMessage] = useState(""); // For error/success message
  const [isError, setIsError] = useState(false); // For message colour
  const navigate = useNavigate(); // Start the navigator

  // Adding the dynamic handleChange() function
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Adding handleSubmit() function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop the page to reload
    setMessage("");
    setIsError(false);

    // Client-side password control
    if (formData.password !== formData.passwordConfirm) {
      setMessage("Şifreler uyuşmuyor. Lütfen kontrol edin.");
      setIsError(true);
      return;
    }

    // Prepare the data that will send to API
    const apiData = {
      fullName: formData.fullName,
      userName: formData.userName, // TODO: Must be edit
      schoolNumber: formData.studentId,
      email: formData.email,
      phoneNumber: formData.phone,
      password: formData.password,
    }

    // Call API with try/catch
    try {
      const response = await registerUser(apiData);

      console.log("Kayıt Başarılı:", response.data);
      setMessage("Kayıt başvurunuz başarıyla alındı! Giriş sayfasına yönlendiriliyorsunuz...");
      setIsError(false);
      alert("Giriş ekranına yönlendiriliyorsunuz..."); // TODO: Might be removed

      setTimeout(() => {
        navigate("/login")
      }, 2000);
    } catch (error) {
      setIsError(true);
      if (error.response) {
        // Exp: 400, 404, 500 errors
        console.error("API Hatası:", error.response.data);
        setMessage(error.response.data.message || "Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.")
        alert(error.response.data.message || "Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.")
      } else if (error.request) {
        console.error("Sunucuya ulaşılamadı:", error.message);
        setMessage("Bir hata oluştu: " + error.message)
        alert("Bir hata oluştu: " + error.message)
      } else {
        console.error("İstek Hatası:", error.message);
        setMessage("Bilinmeyen bir hata oluştu: " + error.message)
        alert("Bilinmeyen bir hata oluştu: " + error.message)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white py-6 sm:py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <div className="w-32 h-12 sm:w-40 sm:h-14 bg-blue-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white font-bold text-xl sm:text-2xl">ai lab</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Sistem Yönetim Paneli</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Form */}
      <main className="flex-grow py-6 sm:py-8 lg:py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10">
              Kayıt Başvurusu
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {/* Name and Student ID Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    Adınız, Soyadınız
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    Öğrenci Numaranız
                  </label>
                  <input
                    type="text"
                    value={formData.studentId}
                    onChange={(e) => handleChange('studentId', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    E-Postanız
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Password and Confirm Password Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    Şifreniz
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
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
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    Şifrenizi Onaylayın
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswordConfirm ? "text" : "password"}
                      value={formData.passwordConfirm}
                      onChange={(e) => handleChange('passwordConfirm', e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPasswordConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center">
                    <Eye size={14} className="mr-1" /> Gizle
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-900 text-white py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Kayıt Başvurusu Gönder
                </button>
              </div>

              {/* Terms Text */}
              <p className="text-center text-xs sm:text-sm text-gray-600 pt-2">
                Başvuru yaparak{' '}
                <a href="#" className="text-blue-900 underline hover:text-blue-700">
                  Kullanıcı Sözleşmesi
                </a>{' '}
                kurallarını kabul etmiş olursunuz.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 sm:py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
            <a href="#" className="hover:text-blue-900 transition-colors">Yardım Merkezi</a>
            <a href="#" className="hover:text-blue-900 transition-colors">Kullanıcı Sözleşmesi</a>
            <a href="#" className="hover:text-blue-900 transition-colors">Geliştirici Ekibi</a>
            <a href="#" className="hover:text-blue-900 transition-colors">İlgili Sayfada Hata Bildir</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationForm;