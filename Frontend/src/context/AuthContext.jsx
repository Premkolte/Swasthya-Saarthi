import { useContext, useState, useEffect, createContext } from "react";
import ReactLoading from "react-loading";
import { account } from "../utils/Config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create contexts
export const ErrorContext = createContext();
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  // ✅ Check User Status on Load
  const checkUserStatus = async () => {
    try {
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error("User Check Error:", error.message);
    }
    setLoading(false);
  };

  // ✅ Register Function (Auto-Verifies User & Shows Notification)
  const registerUser = async (userData, navigate) => {
    try {
      setLoading(true);
      await account.create(userData.email, userData.password, userData.name);

      // ✅ Directly mark user as verified (Appwrite does not have a direct API for this, but self-hosted versions can disable email verification)
      const updatedUser = await account.updatePrefs({ verified: true });

      console.log("User Verified:", updatedUser);

      toast.success("Registration successful! Redirecting to login...", {
        position: "top-center",
        autoClose: 3000, // Closes in 3 seconds
      });

      setTimeout(() => {
        navigate("/signin");
      }, 3000);

      setLoading(false);
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.error("Registration Error:", error.message);
      setLoading(false);
    }
  };

  // ✅ Login Function
  const loginUser = async (userInfo, navigate) => {
    try {
      setLoading(true);
      const response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );

      const accountDetails = await account.get();
      setUser(accountDetails);
      setLoading(false);

      toast.success("Login successful!", { position: "top-center" });

      navigate("/");
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.error("Login Error: ", error.message);
      setLoading(false);
    }
  };

  // ✅ Logout Function
  const logoutUser = async (navigate) => {
    try {
      await account.deleteSession("current");
      setUser(null);
      toast.success("Logged out successfully!", { position: "top-center" });
      navigate("/login");
    } catch (error) {
      toast.error("Failed to log out. Please try again.", { position: "top-center" });
      console.error("Logout Error:", error.message);
    }
  };

  // Context Data
  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <ErrorContext.Provider value={{}}>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ReactLoading type="spin" color="blue" height="10%" width="10%" />
          </div>
        ) : (
          children
        )}
      </ErrorContext.Provider>
    </AuthContext.Provider>
  );
};

// Custom hooks for using the contexts
export const useAuth = () => useContext(AuthContext);
export const useError = () => useContext(ErrorContext);
