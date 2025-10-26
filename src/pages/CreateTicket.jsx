import React, { useState } from 'react';
import { useTickets } from '../context/TicketContext';
import { useNavigate } from 'react-router-dom';

export default function CreateTicket() {
  const { createTicket } = useTickets();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'open',
    priority: 'low',
  });
  const [errors, setErrors] = useState({});

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.title) errs.title = 'Title required';
    if (!['open', 'in_progress', 'closed'].includes(form.status))
      errs.status = 'Invalid status';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const res = createTicket(form);
    if (res.ok) navigate('/app/tickets');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create Ticket</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border p-2 rounded mb-3"
        />
        <select
          className="w-full border p-2 rounded mb-3"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border p-2 rounded mb-3"
        />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">
          Create
        </button>
      </form>
    </div>
  );
}
