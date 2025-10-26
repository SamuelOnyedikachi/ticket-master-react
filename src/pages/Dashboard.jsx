import React from 'react';
import { useTickets } from '../context/TicketContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { stats } = useTickets();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Total tickets</div>
          <div className="text-2xl font-semibold">{stats.total}</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Open</div>
          <div className="text-2xl font-semibold text-green-600">
            {stats.open}
          </div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">In Progress</div>
          <div className="text-2xl font-semibold text-amber-600">
            {stats.in_progress}
          </div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Closed</div>
          <div className="text-2xl font-semibold text-gray-500">
            {stats.closed}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link
          to="/app/tickets"
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          Manage tickets
        </Link>
      </div>
    </div>
  );
}
