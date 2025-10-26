import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import CreateTicket from './pages/CreateTicket';
import TicketDetails from './pages/TicketDetails';
import DeletedTickets from './pages/DeletedTickets';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/auth/login', element: <Login /> },
  { path: '/auth/signup', element: <Signup /> },
  {
    path: '/app',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'tickets', element: <Tickets /> },
      { path: 'tickets/new', element: <CreateTicket /> },
      { path: 'tickets/:id', element: <TicketDetails /> },
      { path: 'deleted', element: <DeletedTickets /> },
      { path: '', element: <Dashboard /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
