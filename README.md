🎟️ TicketMaster - React Version
🚀 Overview

TicketMaster (React Version) is the React implementation of the Stage 2 Multi-Framework Ticket Web App.
It’s a feature-rich ticket management system designed with a clean, interactive UI, smooth animations, and full local persistence.


🧠 Tech Stack

⚛️ React (Vite) – for fast development and modular structure

🧭 React Router v6 – for client-side routing

🎨 Tailwind CSS – for sleek, responsive styling

🔥 react-hot-toast – for instant feedback and notifications

💾 LocalStorage – for user sessions and ticket persistence


⚙️ Setup Instructions

Clone this repository

git clone https://github.com/SamuelOnyedikachi/ticket-master-react.git
cd ticket-master-react


Install dependencies

npm install


Run the app locally

npm run dev


Open your browser and visit

http://localhost:3000/


🔐 Authentication

Session is stored under ticketapp_session in localStorage.

You can test with demo credentials:

email: demo@ticket.com
password: demo123


New signups create a local user stored in ticketapp_users.


🎫 Ticket Management

Tickets are stored in ticketapp_tickets.

Deleted tickets are stored in ticketapp_deleted_tickets.

You can:

✏️ Create, edit, and delete tickets

♻️ Restore deleted tickets from Trash

📊 View open, in-progress, and closed stats on the dashboard

🧾 View recent tickets in card layout for quick actions

🧭 App Structure

/auth/* → Authentication routes (Login, Signup)

/app/* → Protected routes (Dashboard, Tickets, Trash)

Unauthorized users are automatically redirected to /auth/login.


✅ Accessibility

Uses semantic HTML and visible focus states

Maintains high color contrast for improved readability

Keyboard navigation supported for all major components

⚠️ Known Limitations

This is a frontend-only mock app (no backend).

Session expiry is simulated via an optional expires field.

Data persistence is local to the browser.


🌍 Live Demo: https://ticket-master-react.netlify.app/

👉 TicketMaster (React)

🧩 GitHub Repository

🔗 https://github.com/SamuelOnyedikachi/ticket-master-react.git
