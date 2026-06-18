# Job Tracker

A full-stack SaaS application for managing job applications and tracking the hiring process.

Built with React, Express, TypeScript, Prisma and PostgreSQL.

---

## Features

### Authentication

* User registration
* User login
* JWT authentication
* Protected routes
* Current user endpoint

### Job Applications

* Create job applications
* Update applications
* Delete applications
* Filter and search
* Application status tracking

### Dashboard

* Statistics
* Charts
* Application overview

---

## Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS v4
* shadcn/ui
* React Router
* React Hook Form
* Zod
* TanStack Query

### Backend

* Express
* TypeScript
* Prisma ORM
* SQLite (development)
* PostgreSQL (production)
* JWT
* bcrypt

### Tooling

* ESLint
* Prettier
* Git
* npm workspaces

---

## Project Structure

```text
job-tracker
├── client/
├── server/
├── docs/
└── README.md
```

### Backend

```text
server/src
├── middleware/
├── lib/
├── modules/
│   ├── auth/
│   ├── jobs/
│   └── dashboard/
├── types/
└── app.ts
```

### Frontend

```text
client/src
├── components/
├── pages/
├── layouts/
├── hooks/
├── services/
├── schemas/
├── store/
├── lib/
├── App.tsx
└── main.tsx
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/juan888420/job-tracker.git
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create:

```bash
server/.env
```

Example:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
```

### Run the application

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:3001
```

---

## API Endpoints

### Auth

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |
| GET    | /api/auth/me       |

### Jobs

| Method | Endpoint      |
| ------ | ------------- |
| POST   | /api/jobs     |
| GET    | /api/jobs     |
| GET    | /api/jobs/:id |
| PATCH  | /api/jobs/:id |
| DELETE | /api/jobs/:id |

---

## Roadmap

* [x] Authentication
* [x] JWT
* [x] Error middleware
* [x] Create job application
* [ ] Full CRUD
* [ ] Dashboard
* [ ] Search and filters
* [ ] Charts
* [ ] PostgreSQL migration
* [ ] Deployment

---

## License

MIT
