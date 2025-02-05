import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { account } from "../utils/Config";

// Create contexts
export const ErrorContext = createContext();
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); // ✅ Use React Router's navigate function

  useEffect(() => {
    checkUserStatus();
  }, []);

  // ✅ Login Function
  const loginUser = async (userInfo) => {
    try {
      setLoading(true);
      const response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
      const accountDetails = await account.get();
      setUser(accountDetails);
      setLoading(false);
    } catch (error) {
      console.error("Login Error: ", error.message);
      setErrorMessage(error.message);
      navigate("/login"); // ✅ Redirect using React Router
      setLoading(false);
    }
  };

  // ✅ Logout Function
  const logoutUser = async () => {
    try {
      await account.deleteSession("current"); // ✅ Ensure session deletion is awaited
      setUser(null);
      navigate("/login"); // ✅ Redirect after logout
    } catch (error) {
      console.error("Logout Error:", error.message);
      setErrorMessage("Failed to log out. Please try again.");
    }
  };

  // ✅ Register Function (Placeholder)
  const registerUser = async (userData) => {
    try {
      setLoading(true);
      const newUser = await account.create(userData.email, userData.password, userData.name);
      await loginUser(userData); // ✅ Auto-login after registration
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Registration Error:", error.message);
    }
    setLoading(false);
  };

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

  // Context Data
  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <ErrorContext.Provider value={{ errorMessage, setErrorMessage }}>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ReactLoading type="spin" color="#ed8936" height="10%" width="10%" />
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
