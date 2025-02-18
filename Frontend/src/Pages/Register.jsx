import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserMd, FaEnvelope, FaLock, FaLockOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const Register = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (loading) return;
    
    try {
      setLoading(true);
      
      // Validation
      if (formData.name.trim().length < 2) {
        throw new Error("Name must be at least 2 characters long.");
      }

      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      // Password strength validation
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        throw new Error(
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
      }

      const result = await registerUser({
        email: formData.email,
        password: formData.password,
        name: formData.name
      });

      toast.success(result.message);
      
      // Show countdown toast
      let countdown = 3;
      const countdownInterval = setInterval(() => {
        if (countdown > 0) {
          toast.info(`Redirecting to sign in in ${countdown} seconds...`);
          countdown--;
        } else {
          clearInterval(countdownInterval);
          navigate("/signin", { replace: true });
        }
      }, 1000);
      
    } catch (error) {
      toast.error(error.message);
      // Clear password fields on error
      setFormData(prev => ({
        ...prev,
        password: "",
        confirmPassword: ""
      }));
    } finally {
      setLoading(false);
    }
  };

  // Add password strength indicator
  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: "" };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const labels = ["Weak", "Fair", "Good", "Strong", "Excellent"];
    return {
      strength,
      label: labels[strength - 1] || ""
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-center" autoClose={3000} />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-3">
            <FaUserMd className="text-blue-500" />
            <span>Create Account</span>
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <FaUserMd className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
              {formData.password && (
                <div className="mt-1">
                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        passwordStrength.strength === 1 ? "bg-red-500 w-1/5" :
                        passwordStrength.strength === 2 ? "bg-orange-500 w-2/5" :
                        passwordStrength.strength === 3 ? "bg-yellow-500 w-3/5" :
                        passwordStrength.strength === 4 ? "bg-lime-500 w-4/5" :
                        passwordStrength.strength === 5 ? "bg-green-500 w-full" : ""
                      }`}
                    />
                  </div>
                  <p className={`text-xs mt-1 ${
                    passwordStrength.strength <= 2 ? "text-red-500" :
                    passwordStrength.strength === 3 ? "text-yellow-500" :
                    "text-green-500"
                  }`}>
                    {passwordStrength.label}
                  </p>
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <FaLockOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white 
                ${loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                } transition-colors duration-200`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
