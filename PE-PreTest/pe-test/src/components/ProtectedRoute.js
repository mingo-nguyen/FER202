import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  if (!user.username) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default ProtectedRoute;