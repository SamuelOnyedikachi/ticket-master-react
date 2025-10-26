# TicketMaster - React Version

## What this is
React implementation of the Stage 2 Multi-Framework Ticket Web App.

## Tech
- React (Vite)
- React Router v6
- Tailwind CSS (optional; this project uses Tailwind utility classes)
- react-hot-toast

## Setup
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000/`

## Auth
- Session stored under `ticketapp_session` in localStorage.
- Demo credentials:
  - email: `demo@ticket.com`
  - password: `demo123`
- Signup creates local user stored in `ticketapp_users`.

## Notes
- Protected routes are under `/app/*`. Unauthorized users will be redirected to `/auth/login`.
- Tickets stored in `ticketapp_tickets`, deleted tickets in `ticketapp_deleted_tickets`.

## Accessibility
- Uses semantic HTML and visible focus states via browser/Tailwind defaults.
- Color contrast kept high for primary UI elements.

## Known issues
- This is a client-only mock (no backend). Session expiry is simulated with an optional `expires` field.


live demo: https://ticket-master-react.netlify.app/
git repo: https://github.com/SamuelOnyedikachi/ticket-master-react.git

