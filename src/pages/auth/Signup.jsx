import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name) errs.name = 'Full name is required.';
    if (!form.email) errs.email = 'Email is required.';
    if (!form.password || form.password.length < 6)
      errs.password = 'Password must be at least 6 characters.';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    const res = await signup(form);
    setLoading(false);

    if (res.ok) navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-sky-500 px-6">
      <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          Create your account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join TicketMaster to manage tickets seamlessly.
        </p>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-3 py-2"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-3 py-2"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-3 py-2"
              placeholder="Enter a secure password"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold text-white transition-all duration-300 ${
              loading
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{' '}
          <Link
            to="/auth/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
