# Casablanca Technology - Frontend

Next.js frontend for Casablanca Technology website.

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (already created):
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

3. Run development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js app directory with main pages
- `components/` - React components (Header, Hero, Services, About, Contact, Footer)
- `public/` - Static assets

## Features

- Modern responsive design with Tailwind CSS
- Contact form integration with Rails API
- Japanese business aesthetic
- Mobile-friendly navigation

## Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API URL (defaults to http://localhost:3001)

## Deployment

This project is ready to deploy on Vercel. See deployment guide for details.