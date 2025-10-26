import React, { useState } from 'react';
import { useTickets } from '../context/TicketContext';
import TicketCard from '../components/TicketCard';

export default function TicketList() {
  const { tickets, createTicket, updateTicket, deleteTicket } = useTickets();
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'open',
    priority: 'low',
  });
  const [errors, setErrors] = useState({});

  const handleCreate = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.title) errs.title = 'Title required';
    if (!['open', 'in_progress', 'closed'].includes(form.status))
      errs.status = 'Invalid status';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    createTicket(form);
    setForm({ title: '', description: '', status: 'open', priority: 'low' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tickets</h2>

      <form
        onSubmit={handleCreate}
        className="bg-white p-4 rounded shadow mb-6"
      >
        <div className="grid md:grid-cols-3 gap-3">
          <input
            aria-label="title"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border p-2 rounded"
          />
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <textarea
          aria-label="description"
          placeholder="Description (optional)"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border p-2 rounded mt-3"
        />

        {errors.title && (
          <p className="text-sm text-red-500 mt-2">{errors.title}</p>
        )}
        {errors.status && (
          <p className="text-sm text-red-500 mt-2">{errors.status}</p>
        )}

        <div className="mt-3">
          <button className="px-4 py-2 rounded bg-green-600 text-white">
            Create ticket
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-3 gap-4">
        {tickets.map((t) => (
          <TicketCard
            key={t.id}
            ticket={t}
            onEdit={updateTicket}
            onDelete={deleteTicket}
          />
        ))}
      </div>
    </div>
  );
}