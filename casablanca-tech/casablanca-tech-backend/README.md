# Casablanca Technology - Backend API

Rails API backend for Casablanca Technology website.

## Prerequisites

- Ruby 3.2+
- PostgreSQL
- Bundler

## Setup

1. Install dependencies:
```bash
bundle install
```

2. Setup database:
```bash
rails db:create
rails db:migrate
```

3. Run the server:
```bash
rails server -p 3001
```

The API will be available at http://localhost:3001

## API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Body: `{ name, email, company, message }`
  - Returns: `{ message: "Contact form submitted successfully" }`

## CORS Configuration

Currently configured to accept requests from:
- http://localhost:3000 (development frontend)
- http://localhost:3001

For production, update `config/initializers/cors.rb` with your Vercel domain.

## Environment Variables

No additional environment variables needed for basic setup.

## Testing

```bash
rails test
```

## Deployment

This project is configured for deployment with Kamal and includes Docker support. See deployment guide for Railway deployment details.