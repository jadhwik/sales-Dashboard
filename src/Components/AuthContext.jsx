// AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    // No need to clear user data, just redirect to login page
    setUser(null);
    window.location.replace("/login"); // Redirect to login page
  };

  const authRegister = (username, password) => {
    setUser({ username });
    localStorage.setItem("user", JSON.stringify({ username, password }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, authRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
