import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* === HERO SECTION === */}
      <div className="min-h-[70vh] bg-gradient-to-br from-indigo-600 to-sky-500 text-white flex flex-col">
        {/* --- Header --- */}
        <header className="w-full top-0 left-0 z-50 shadow-sm sticky bg-gradient-to-br from-indigo-600 to-sky-500">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-extrabold text-white tracking-wide">
              Ticket<span className="text-sky-200">Master</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/auth/login"
                className="text-white/90 hover:text-white font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="bg-white text-indigo-700 px-5 py-2 rounded-lg font-semibold hover:bg-sky-100 transition-all duration-200"
              >
                Get started
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gradient-to-br from-indigo-600 to-sky-500 px-6 py-4 flex flex-col gap-3">
              <Link
                to="/auth/login"
                className="text-white font-medium hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="bg-white text-indigo-700 px-5 py-2 rounded font-semibold hover:bg-sky-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          )}
        </header>

        {/* --- Hero Content --- */}
        <main className="flex-grow max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Manage tickets faster. <br /> Ship happier.
            </h1>
            <p className="mb-8 text-white/90 text-base sm:text-lg leading-relaxed">
              A compact ticket management app built for efficiency and
              accessibility. Streamline your workflow and stay organized with
              TicketMaster.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/auth/login"
                className="px-5 py-2.5 bg-white text-indigo-700 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="px-5 py-2.5 border border-white/40 rounded hover:bg-white/10 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>

          <div className="relative mt-10 md:mt-0">
            <div className="absolute -top-10 -right-10 md:w-36 md:h-36 w-24 h-24 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -bottom-10 -left-10 md:w-24 md:h-24 w-16 h-16 rounded-full bg-white/10 blur-lg" />
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-xl mb-2">Quick demo card</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Create tickets, update statuses, and move to trash — all stored
                locally for offline use.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* === FEATURES SECTION === */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 bg-gray-50 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why choose TicketMaster?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">⚡ Fast CRUD</h4>
            <p className="text-sm text-gray-600">
              Create, read, update, and delete tickets easily with a responsive
              UI.
            </p>
          </div>
          <div className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">🔒 Protected Routes</h4>
            <p className="text-sm text-gray-600">
              Session-based authentication ensures secure and private access.
            </p>
          </div>
          <div className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">📱 Responsive Design</h4>
            <p className="text-sm text-gray-600">
              Enjoy a seamless experience on desktop, tablet, and mobile.
            </p>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-gray-100 border-t border-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} TicketMaster. All rights reserved.
        </div>
      </footer>
    </>
  );
}
