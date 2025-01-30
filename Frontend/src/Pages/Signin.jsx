import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in with", email, password);
    // Authentication logic goes here
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
    

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
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-gray-700 mt-4">
            Don't have an account? <a href="/signup" className="text-blue-700 hover:underline font-medium">Sign up</a>
          </p>
        </motion.div>
      </div>

  
    </div>
  );
}
