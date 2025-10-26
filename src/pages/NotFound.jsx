import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">404 — Page not found</h2>
        <Link to="/" className="text-indigo-600">
          Go home
        </Link>
      </div>
    </div>
  );
}
