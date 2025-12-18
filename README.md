# Prescripto

Monolithic project for a medical appointment web app with three parts:

- `admin` — admin dashboard (Vite + React)
- `frontend` — public site (Vite + React)
- `backend` — API server (Node/Express, MongoDB, Cloudinary)

## Overview

This repository contains an Admin SPA, a Frontend SPA, and a Backend API. Use the following commands to start each part in development.

## Prerequisites

- Node.js (v16+ recommended)
- npm
- A running MongoDB instance (or MongoDB Atlas)
- Cloudinary account (optional, used for image uploads)

## Install

Install dependencies in each folder before running:

```bash
cd admin
npm install

cd ../frontend
npm install

cd ../backend
npm install
```

## Run (development)

- Admin and Frontend (both use the dev script):

```bash
# from repository root (example)
cd admin
npm run dev

cd ../frontend
npm run dev
```

- Backend (dev server):

```bash
cd backend
npm run server
```

Notes:
- The admin and frontend apps run via `npm run dev` (Vite). The backend runs via `npm run server` as requested.

## Environment variables (backend)

Create a `.env` file in the `backend` folder with values similar to:

```
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=some-secret
PORT=5000
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

## Project structure (top-level)

- `admin/` — admin dashboard React app
- `frontend/` — public React site
- `backend/` — Node/Express API, models, controllers, routes

## Useful tips

- If ports conflict, edit the Vite configs or set the `PORT` env for the backend.
- To run each part concurrently you can open separate terminals for each folder.
