import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTickets } from '../context/TicketContext';

export default function TicketDetails() {
  const { id } = useParams();
  const { tickets } = useTickets();
  const t = tickets.find((x) => x.id === id);
  const navigate = useNavigate();
  if (!t)
    return (
      <div className="p-4 bg-white rounded shadow">
        Ticket not found.{' '}
        <button onClick={() => navigate(-1)} className="text-indigo-600 ml-2">
          Go back
        </button>
      </div>
    );

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">{t.title}</h2>
      <div className="mt-2 text-sm text-gray-500">Status: {t.status}</div>
      <p className="mt-4 text-gray-700">{t.description}</p>
      <div className="mt-4 text-xs text-gray-400">
        Created: {new Date(t.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
