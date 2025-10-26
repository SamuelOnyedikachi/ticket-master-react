import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const TicketContext = createContext();
const KEY_TICKETS = 'ticketapp_tickets';
const KEY_DELETED = 'ticketapp_deleted_tickets';
const VALID_STATUSES = ['open', 'in_progress', 'closed'];

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState(() => {
    const raw = localStorage.getItem(KEY_TICKETS);
    if (raw) return JSON.parse(raw);
    const seed = [
      {
        id: String(Date.now() - 300000),
        title: 'Fix login responsive issue',
        description: 'Login form breaks on mobile',
        status: 'open',
        priority: 'high',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
    localStorage.setItem(KEY_TICKETS, JSON.stringify(seed));
    return seed;
  });

  const [deleted, setDeleted] = useState(() =>
    JSON.parse(localStorage.getItem(KEY_DELETED) || '[]')
  );

  useEffect(
    () => localStorage.setItem(KEY_TICKETS, JSON.stringify(tickets)),
    [tickets]
  );
  useEffect(
    () => localStorage.setItem(KEY_DELETED, JSON.stringify(deleted)),
    [deleted]
  );

  const validate = (ticket) => {
    if (!ticket.title || !ticket.title.trim())
      return { ok: false, message: 'Title is required' };
    if (!VALID_STATUSES.includes(ticket.status))
      return {
        ok: false,
        message: `Status must be one of: ${VALID_STATUSES.join(', ')}`,
      };
    if (ticket.description && ticket.description.length > 1000)
      return { ok: false, message: 'Description too long (max 1000 chars)' };
    return { ok: true };
  };

  const createTicket = (data) => {
    const v = validate(data);
    if (!v.ok) {
      toast.error(v.message);
      return { ok: false, message: v.message };
    }
    const t = {
      id: String(Date.now()),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTickets((s) => [t, ...s]);
    toast.success('Ticket created');
    return { ok: true, ticket: t };
  };

  const updateTicket = (id, updates) => {
    const existing = tickets.find((t) => t.id === id);
    if (!existing) {
      toast.error('Ticket not found');
      return { ok: false };
    }
    const merged = {
      ...existing,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    const v = validate(merged);
    if (!v.ok) {
      toast.error(v.message);
      return { ok: false, message: v.message };
    }
    setTickets((s) => s.map((t) => (t.id === id ? merged : t)));
    toast.success('Ticket updated');
    return { ok: true, ticket: merged };
  };

  const deleteTicket = (id) => {
    const t = tickets.find((x) => x.id === id);
    if (!t) {
      toast.error('Ticket not found');
      return { ok: false };
    }
    setTickets((s) => s.filter((x) => x.id !== id));
    setDeleted((s) => [{ ...t, deletedAt: new Date().toISOString() }, ...s]);
    toast.success('Moved to Trash');
    return { ok: true };
  };

  const restoreTicket = (id) => {
    const t = deleted.find((x) => x.id === id);
    if (!t) {
      toast.error('Not found in trash');
      return { ok: false };
    }
    setDeleted((s) => s.filter((x) => x.id !== id));
    setTickets((s) => [t, ...s]);
    toast.success('Restored');
    return { ok: true };
  };

  const permanentlyDelete = (id) => {
    setDeleted((s) => s.filter((x) => x.id !== id));
    toast.success('Permanently deleted');
    return { ok: true };
  };

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === 'open').length,
    in_progress: tickets.filter((t) => t.status === 'in_progress').length,
    closed: tickets.filter((t) => t.status === 'closed').length,
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        deleted,
        createTicket,
        updateTicket,
        deleteTicket,
        restoreTicket,
        permanentlyDelete,
        stats,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);
