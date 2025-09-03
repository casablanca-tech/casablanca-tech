# Casablanca Technology Ltd

Professional website for Casablanca Technology Ltd - A technology bridge between Tokyo and the world.

## Project Structure

```
casablanca-tech/
├── casablanca-tech-frontend/    # Next.js frontend with internationalization
├── casablanca-tech-backend/     # Ruby on Rails API backend
└── README.md
```

## Frontend (Next.js)

- **Framework:** Next.js 15.5.2 with Turbopack
- **Styling:** Tailwind CSS v4
- **Internationalization:** English/Japanese with next-intl
- **Features:** Responsive design, corporate styling, contact forms

```bash
cd casablanca-tech-frontend
npm install
npm run dev
```

## Backend (Ruby on Rails)

- **Framework:** Ruby on Rails 8.0.2.1
- **Database:** PostgreSQL
- **Features:** API endpoints, contact form handling

```bash
cd casablanca-tech-backend
bundle install
rails server
```

## Deployment

- **Frontend:** Deployed on Vercel
- **Backend:** Can be deployed on Heroku, Railway, or similar platforms

## Development

1. Start the Rails backend:
   ```bash
   cd casablanca-tech-backend && rails server
   ```

2. Start the Next.js frontend:
   ```bash
   cd casablanca-tech-frontend && npm run dev
   ```

Visit `http://localhost:3000` for the frontend.

---

Built with ❤️ by Casablanca Technology Ltd