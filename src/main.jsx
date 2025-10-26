import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthProvider } from './context/AuthContext';
import { TicketProvider } from './context/TicketContext';
import { Toaster } from 'react-hot-toast';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TicketProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </TicketProvider>
    </AuthProvider>
  </React.StrictMode>
);
