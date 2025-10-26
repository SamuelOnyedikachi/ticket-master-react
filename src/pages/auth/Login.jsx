import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.email) errs.email = 'Email required';
    if (!form.password) errs.password = 'Password required';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const res = await login(form);
    if (res.ok) navigate('/app/dashboard');
  };

  return (
    <div className="max-w-md mx-auto py-16 px-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow">
        <label className="block mb-3">
          <span className="text-sm">Email</span>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 block w-full border rounded p-2"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </label>

        <label className="block mb-3">
          <span className="text-sm">Password</span>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-1 block w-full border rounded p-2"
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">{errors.password}</p>
          )}
        </label>

        <button className="w-full py-2 rounded bg-indigo-600 text-white mt-2">
          Login
        </button>
        <p className="mt-3 text-sm text-gray-600">
          No account?{' '}
          <Link to="/auth/signup" className="text-indigo-600">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
