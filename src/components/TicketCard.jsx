import React, { useState } from 'react';

const statusClass = {
  open: 'text-green-700 bg-green-100',
  in_progress: 'text-amber-700 bg-amber-100',
  closed: 'text-gray-600 bg-gray-100',
};

export default function TicketCard({ ticket, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    title: ticket.title,
    description: ticket.description || '',
    status: ticket.status,
    priority: ticket.priority || 'low',
  });

  const save = () => {
    onEdit(ticket.id, form);
    setEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          {!editing ? (
            <>
              <h3 className="font-semibold text-lg">{ticket.title}</h3>
              <span
                className={`inline-block mt-2 px-2 py-0.5 rounded text-xs ${
                  statusClass[ticket.status]
                }`}
              >
                {ticket.status.replace('_', ' ')}
              </span>
            </>
          ) : (
            <input
              className="w-full border rounded px-2 py-1"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          )}
        </div>

        <div className="flex items-center gap-2">
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="text-indigo-600 text-sm"
            >
              Edit
            </button>
          ) : (
            <button onClick={save} className="text-green-600 text-sm">
              Save
            </button>
          )}
          <button
            onClick={() => onDelete(ticket.id)}
            className="text-red-500 text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      {!editing ? (
        <p className="text-sm text-gray-600 mt-3">{ticket.description}</p>
      ) : (
        <textarea
          className="w-full border rounded p-2 mt-3"
          rows="4"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      )}

      {editing && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          <select
            className="border p-2 rounded"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          <select
            className="border p-2 rounded"
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      )}
    </div>
  );
}
