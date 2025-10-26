import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();
const STORAGE_KEY = 'ticketapp_session';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const s = localStorage.getItem(STORAGE_KEY);
    if (!s) return;
    try {
      const parsed = JSON.parse(s);
      if (parsed.expires && parsed.expires < Date.now()) {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        setUser(parsed.user);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const login = async ({ email, password }) => {
    await new Promise((r) => setTimeout(r, 350));
    const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]');
    const found =
      users.find((u) => u.email === email && u.password === password) ||
      (email === 'demo@ticket.com' && password === 'demo123'
        ? { name: 'Demo User', email: 'demo@ticket.com' }
        : null);

    if (!found) {
      toast.error('Invalid credentials');
      return { ok: false };
    }

    const session = {
      user: { name: found.name || email.split('@')[0], email: found.email },
      token: 'mock-' + Date.now(),
      expires: Date.now() + 24 * 3600 * 1000,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    setUser(session.user);
    toast.success('Login successful');
    return { ok: true };
  };

  const signup = async ({ name, email, password }) => {
    await new Promise((r) => setTimeout(r, 350));
    const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]');
    if (users.find((u) => u.email === email)) {
      toast.error('A user with this email already exists');
      return { ok: false };
    }
    users.push({ name, email, password });
    localStorage.setItem('ticketapp_users', JSON.stringify(users));
    const session = {
      user: { name, email },
      token: 'mock-' + Date.now(),
      expires: Date.now() + 24 * 3600 * 1000,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    setUser(session.user);
    toast.success('Account created');
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    toast.success('Logged out');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
