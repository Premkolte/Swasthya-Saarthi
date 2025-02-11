import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { account } from "../utils/Config"; // Import Appwrite account instance

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // ✅ Step 1: Check if a session already exists
      const currentSession = await account.getSession("current").catch(() => null);
  
      if (currentSession) {
        toast.error("You are already signed in!");
        navigate("/dashboard");
        return;
      }
  
      // ✅ Step 2: Authenticate User
      const session = await account.createEmailPasswordSession(email, password);
      console.log("Session Created:", session);
  
      // ✅ Step 3: Get User Details
      const user = await account.get();
      console.log("User Details:", user);
  
      // ✅ Step 4: Ensure User is Verified
      if (!user.prefs.verified) {
        toast.error("Your account is not verified. Please contact support.");
        setLoading(false);
        return;
      }
  
      // ✅ Step 5: Successful Login
      toast.success("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error(error.message);
      console.error("Login Error:", error.message);
    }
  
    setLoading(false);
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <ToastContainer position="top-center" autoClose={3000} />
      
      {/* Sign-In Form */}
      <div className="flex flex-grow justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-96 shadow-xl p-8 rounded-2xl bg-white"
        >
          <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Sign In</h2>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 py-2 border rounded-lg w-full"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 py-2 border rounded-lg w-full"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-white ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-700 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-700 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
