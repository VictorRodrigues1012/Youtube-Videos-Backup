# YouTube Channel Backup

A full-stack application built with **React, TypeScript, Node.js, and Express** to explore the development of a YouTube channel backup and cataloging platform.

The project is being developed incrementally as a learning and portfolio project, with a focus on understanding full-stack development concepts such as HTTP communication, REST APIs, authentication, asynchronous operations, external API integrations, and application architecture.

> 🚧 **Status:** Work in progress

---

## About the Project

The main goal of this project is to build an application capable of connecting to a YouTube account, retrieving information about a channel and its uploaded videos, and organizing the data required for a channel backup workflow.

The project also serves as a practical environment for studying and applying concepts related to:

- React and frontend development
- Node.js backend development
- TypeScript
- HTTP requests and responses
- REST APIs
- Middleware
- Error handling
- OAuth 2.0
- Google APIs
- YouTube Data API
- Data persistence
- Application architecture

The application is being developed feature by feature, with each stage introducing new concepts before increasing the complexity of the project.

---

## Current Features

At the current development stage, the project includes:

- React frontend created with Vite
- TypeScript on both frontend and backend
- Node.js backend using Express
- Basic REST API routes
- Route parameters
- Query parameters
- JSON request bodies
- Basic backend validation
- Custom Express middleware
- CORS configuration
- Communication between React and the Express API
- POST requests using the Fetch API

Example current flow:

```text
React
  │
  │ HTTP POST
  ▼
Express API
  │
  │ Request validation
  ▼
JSON Response
  │
  ▼
React
```

---

## Planned Features

The project will gradually evolve to include:

- Request loading states
- Frontend error handling
- API service layer
- Environment variables
- Google OAuth 2.0 authentication
- Authenticated YouTube channel retrieval
- YouTube Data API integration
- Upload playlist discovery
- Video pagination
- Channel video catalog
- Database integration
- Channel synchronization
- Google Takeout metadata import
- Local backup file matching
- Backup status dashboard
- Optional background processing worker

---

## Planned Architecture

The expected application architecture is:

```text
                     ┌──────────────────┐
                     │      React       │
                     │    Frontend      │
                     └────────┬─────────┘
                              │
                              │ HTTP
                              ▼
                     ┌──────────────────┐
                     │     Node.js      │
                     │     Express      │
                     │       API        │
                     └────────┬─────────┘
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
          Google OAuth 2.0          Application Data
                 │                         │
                 ▼                         ▼
        YouTube Data API              Database
```

A processing worker may also be introduced later for tasks involving backup files and metadata processing.

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Fetch API

### Backend

- Node.js
- TypeScript
- Express
- CORS

### Planned Integrations

- Google OAuth 2.0
- YouTube Data API v3
- PostgreSQL
- Prisma ORM

Additional technologies may be introduced as the project evolves.

---

## Project Structure

```text
youtube-channel-backup/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

The project structure will be reorganized as new responsibilities are introduced.

For example, the backend may later evolve into:

```text
backend/
└── src/
    ├── controllers/
    ├── routes/
    ├── services/
    ├── middlewares/
    ├── config/
    └── server.ts
```

---

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

---

## Clone the Repository

```bash
git clone https://github.com/VictorRodrigues1012/youtube-channel-backup.git
```

Enter the project directory:

```bash
cd youtube-channel-backup
```

---

## Running the Backend

Enter the backend directory:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The backend will run by default at:

```text
http://localhost:3001
```

---

## Running the Frontend

Open another terminal and enter the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will usually be available at:

```text
http://localhost:5173
```

---

## Current API Example

The backend currently contains a test endpoint that receives video information through an HTTP POST request.

Example request:

```http
POST /videos
Content-Type: application/json
```

Request body:

```json
{
  "title": "Learning React and Node",
  "description": "Testing communication between the frontend and backend"
}
```

Example successful response:

```json
{
  "title": "Learning React and Node",
  "description": "Testing communication between the frontend and backend"
}
```

The endpoint currently exists for studying request handling and will later be replaced or reorganized as the YouTube integration is implemented.

---

## Development Roadmap

### Phase 1 — Full-stack Fundamentals

- [x] Create React application
- [x] Create Node.js backend
- [x] Configure Express
- [x] Create GET routes
- [x] Work with route parameters
- [x] Work with query parameters
- [x] Handle JSON request bodies
- [x] Create POST requests
- [x] Add backend validation
- [x] Understand Express middleware
- [x] Configure CORS
- [x] Connect React to the backend
- [ ] Add frontend loading states
- [ ] Add frontend error handling
- [ ] Create API service layer
- [ ] Configure environment variables

### Phase 2 — YouTube Authentication

- [ ] Configure Google Cloud project
- [ ] Configure Google OAuth 2.0
- [ ] Authenticate YouTube account
- [ ] Handle access tokens
- [ ] Handle refresh tokens
- [ ] Retrieve authenticated channel information

### Phase 3 — YouTube Data

- [ ] Retrieve channel upload playlist
- [ ] Retrieve uploaded videos
- [ ] Implement YouTube pagination
- [ ] Display videos in React
- [ ] Add loading and error states for YouTube requests
- [ ] Add search and filtering

### Phase 4 — Persistence

- [ ] Add PostgreSQL
- [ ] Add Prisma ORM
- [ ] Store channel information
- [ ] Store video metadata
- [ ] Implement channel synchronization
- [ ] Detect new or removed videos

### Phase 5 — Backup Management

- [ ] Import Google Takeout metadata
- [ ] Match local files with YouTube videos
- [ ] Detect missing backup files
- [ ] Organize local backup metadata
- [ ] Create backup status dashboard

---

## Learning Goals

This repository is intentionally being built step by step instead of starting with a complete production architecture.

The objective is to understand why each part of the application exists before introducing abstractions.

Some of the concepts explored throughout the project include:

```text
HTTP
 ↓
Routes
 ↓
Requests / Responses
 ↓
Middleware
 ↓
Frontend ↔ Backend communication
 ↓
Promises
 ↓
Async / Await
 ↓
Error handling
 ↓
Authentication
 ↓
External APIs
 ↓
Persistence
 ↓
Application architecture
```

As the project grows, the codebase will gradually be refactored to reflect more scalable development patterns.

---

## Security

Sensitive information such as API credentials, OAuth secrets, access tokens, and refresh tokens must never be committed to the repository.

Environment files are ignored through `.gitignore`.

Future configuration will follow a structure similar to:

```text
.env
```

for local secrets and:

```text
.env.example
```

for documenting the required environment variables without exposing real credentials.

---

## Disclaimer

This project is not affiliated with or endorsed by YouTube or Google.

YouTube and Google APIs will be used according to their respective developer policies and terms of service.

---

## Author

Developed as a personal learning and portfolio project focused on full-stack development with React, TypeScript, and Node.js.