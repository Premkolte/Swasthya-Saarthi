import { useContext, useState, useEffect, createContext } from "react";
import ReactLoading from "react-loading";
import { account } from "../utils/Config"; // Ensure this is correctly set up
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ID } from "appwrite";

// Create contexts
export const ErrorContext = createContext();
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  // Check User Status on Load
  const checkUserStatus = async () => {
    try {
      const session = await account.get();
      if (session) {
        setUser(session);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Register Function
  const registerUser = async (userData) => {
    try {
      setLoading(true);
      // Create new user
      await account.create(ID.unique(), userData.email, userData.password, userData.name);
      return {
        success: true,
        message: "Account created successfully! Please sign in.",
      };
    } catch (error) {
      console.error("Registration error:", error);
      if (error.code === 409) {
        throw new Error("Email already registered. Please use a different email.");
      }
      if (error.message.includes("password")) {
        throw new Error("Password must be at least 8 characters long.");
      }
      throw new Error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Login Function
  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      // Create session with email/password
      await account.createEmailSession(email, password);
      // Get user details after successful authentication
      const accountDetails = await account.get();
      setUser(accountDetails);
      return {
        success: true,
        message: `Welcome back, ${accountDetails.name}!`,
        user: accountDetails,
      };
    } catch (error) {
      console.error("Login error:", error);
      if (error.code === 401) {
        throw new Error("Invalid email or password.");
      }
      throw new Error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Logout Function
  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      return { success: true, message: "Logged out successfully!" };
    } catch (error) {
      console.error("Logout error:", error);
      throw new Error("Logout failed. Please try again.");
    }
  };

  // Context Data
  const contextData = {
    user,
    loading,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <ErrorContext.Provider value={{}}>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ReactLoading type="spin" color="#4F46E5" height={50} width={50} />
          </div>
        ) : (
          children
        )}
      </ErrorContext.Provider>
    </AuthContext.Provider>
  );
};

// Custom hooks for using the contexts
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useError = () => useContext(ErrorContext);
