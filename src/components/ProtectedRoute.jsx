import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const raw = localStorage.getItem('ticketapp_session');
  if (!raw) return <Navigate to="/auth/login" replace />;
  try {
    const s = JSON.parse(raw);
    if (s.expires && s.expires < Date.now()) {
      localStorage.removeItem('ticketapp_session');
      return <Navigate to="/auth/login" replace />;
    }
  } catch {
    localStorage.removeItem('ticketapp_session');
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
