import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-sky-500 text-white">
      <header className="max-w-[1440px] mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold">TicketMaster</div>
        <div className="flex items-center gap-4">
          <Link to="/auth/login" className="text-white/90">
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="bg-white text-indigo-600 px-4 py-2 rounded"
          >
            Get started
          </Link>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            Manage tickets faster. Ship happier.
          </h1>
          <p className="mb-6 text-white/90">
            A compact ticket management app for the Stage 2 multi-framework task
            — responsive and accessible.
          </p>
          <div className="flex gap-3">
            <Link
              to="/auth/login"
              className="px-4 py-2 bg-white/90 text-indigo-700 rounded font-semibold"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="px-4 py-2 border border-white/40 rounded"
            >
              Sign up
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-lg" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10 blur-lg" />
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="font-semibold">Quick demo card</h3>
            <p className="text-sm mt-2">
              Create tickets, update statuses, and move to trash. Works offline
              (localStorage).
            </p>
          </div>
        </div>
      </main>

      <div className="relative">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0,0 V40 C150,120 350,0 600,40 C850,80 1050,40 1200,20 V0z"
            fill="#ffffff"
            opacity="0.12"
          ></path>
          <path
            d="M0,0 V30 C150,90 350,10 600,50 C850,90 1050,40 1200,20 V0z"
            fill="#ffffff"
            opacity="0.08"
          ></path>
        </svg>
      </div>

      <section className="max-w-[1440px] mx-auto px-6 py-12 bg-gray-50 text-gray-800">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-semibold">Fast CRUD</h4>
            <p className="text-sm mt-2">Create and manage tickets easily.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-semibold">Protected Routes</h4>
            <p className="text-sm mt-2">
              Session-based authentication using localStorage.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-semibold">Responsive</h4>
            <p className="text-sm mt-2">Mobile and desktop friendly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
