import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name) errs.name = 'Name required';
    if (!form.email) errs.email = 'Email required';
    if (!form.password || form.password.length < 6)
      errs.password = 'Password min 6 chars';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const res = await signup(form);
    if (res.ok) navigate('/app/dashboard');
  };

  return (
    <div className="max-w-md mx-auto py-16 px-6">
      <h2 className="text-2xl font-bold mb-4">Create account</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow">
        <label className="block mb-3">
          <span className="text-sm">Full name</span>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 block w-full border rounded p-2"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </label>

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
          Create account
        </button>
      </form>
    </div>
  );
}
