import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check local storage for the token on initial load
    return localStorage.getItem("token") ? true : false;
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("token", "your_token_here"); // Set your token
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token"); // Remove the token
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
