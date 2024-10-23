import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedInsert = ({ element }) => {
  const { isAuthenticated, userRole } = useAuth();

  return isAuthenticated && userRole === "ADMIN" ? (
    element
  ) : (
    <Navigate to="/main-page" />
  );
};

export default ProtectedInsert;
