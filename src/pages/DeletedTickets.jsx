import React from 'react';
import { useTickets } from '../context/TicketContext';

export default function DeletedTickets() {
  const { deleted, restoreTicket, permanentlyDelete } = useTickets();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Deleted Tickets</h2>
      {deleted.length === 0 ? (
        <p className="text-gray-600">Trash is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {deleted.map((d) => (
            <div key={d.id} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{d.title}</h3>
                <span className="text-xs text-gray-400">
                  {new Date(d.deletedAt).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{d.description}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => restoreTicket(d.id)}
                  className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
                >
                  Restore
                </button>
                <button
                  onClick={() => permanentlyDelete(d.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
