import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function AppLayout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('ticketapp_session');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-[1440px] mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            to="/app/dashboard"
            className="text-2xl font-bold text-indigo-600"
          >
            TicketMaster
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link
              to="/app/dashboard"
              className="text-gray-600 hover:text-indigo-600"
            >
              Dashboard
            </Link>
            <Link
              to="/app/tickets"
              className="text-gray-600 hover:text-indigo-600"
            >
              Tickets
            </Link>
            <Link
              to="/app/deleted"
              className="text-gray-600 hover:text-indigo-600"
            >
              Trash
            </Link>
            <button
              onClick={handleLogout}
              className="ml-4 text-sm bg-gray-200 py-2 px-5 rounded-sm text-red-500"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-200 border-t border-t-gray-300">
        <div className="max-w-[1440px] mx-auto px-6 py-6 text-center text-sm text-gray-700">
          &copy; {new Date().getFullYear()} TicketMaster. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
