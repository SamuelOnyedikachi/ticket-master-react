import React, { useState } from 'react';
import { useTickets } from '../context/TicketContext';
import TicketCard from '../components/TicketCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlusCircle,
  Ticket,
  FolderKanban,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export default function Dashboard() {
  const { tickets, createTicket, updateTicket, deleteTicket, stats } =
    useTickets();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'open',
    priority: 'low',
  });

  const handleCreate = (e) => {
    e.preventDefault();
    const res = createTicket(form);
    if (res.ok) {
      setForm({ title: '', description: '', status: 'open', priority: 'low' });
      setShowForm(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Dashboard</h2>
        <button
          onClick={() => setShowForm((p) => !p)}
          className="flex items-center gap-2 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          <PlusCircle size={18} />
          {showForm ? 'Cancel' : 'Create Ticket'}
        </button>
      </div>

      {/* Ticket Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white py-20 p-4 rounded-lg shadow text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-2 text-indigo-600">
            <Ticket size={24} />
          </div>
          <p className="text-gray-500 text-sm">Total</p>
          <h3 className="text-2xl font-bold">{stats.total}</h3>
        </div>

        <div className="bg-green-50 py-20 p-4 rounded-lg shadow text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-2 text-green-700">
            <FolderKanban size={24} />
          </div>
          <p className="text-gray-500 text-sm">Open</p>
          <h3 className="text-2xl font-bold text-green-700">{stats.open}</h3>
        </div>

        <div className="bg-yellow-50 py-20 p-4 rounded-lg shadow text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-2 text-yellow-700">
            <Clock size={24} />
          </div>
          <p className="text-gray-500 text-sm">In Progress</p>
          <h3 className="text-2xl font-bold text-yellow-700">
            {stats.in_progress}
          </h3>
        </div>

        <div className="bg-gray-50 py-20 p-4 rounded-lg shadow text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-2 text-gray-600">
            <CheckCircle2 size={24} />
          </div>
          <p className="text-gray-500 text-sm">Closed</p>
          <h3 className="text-2xl font-bold text-gray-700">{stats.closed}</h3>
        </div>
      </div>

      {/* Create Ticket Form */}
      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleCreate}
            className="bg-white p-4 rounded-lg shadow mb-6 border border-gray-100"
          >
            <div className="grid md:grid-cols-3 gap-4">
              <input
                required
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
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border p-2 rounded mt-3"
              rows="3"
            />

            <div className="mt-3 flex justify-end">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Create Ticket
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Recent Tickets */}
      <div>
        <h3 className="text-2xl font-semibold mb-3">Recent Tickets</h3>
        <AnimatePresence>
          {tickets.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-center mt-10"
            >
              No tickets yet. Create your first one above 👆
            </motion.p>
          ) : (
            <motion.div
              key="tickets"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {tickets.slice(0, 6).map((t) => (
                <motion.div
                  key={t.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                >
                  <TicketCard
                    ticket={t}
                    onEdit={updateTicket}
                    onDelete={deleteTicket}
                    className="py-15"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
