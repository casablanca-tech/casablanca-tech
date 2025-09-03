# Deployment Guide

## Frontend Deployment (Vercel)

### Prerequisites
- Vercel account
- GitHub repository with frontend code

### Steps

1. Push frontend code to GitHub:
```bash
cd casablanca-tech-frontend
git add .
git commit -m "Initial frontend commit"
git push origin main
```

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "New Project" and import your GitHub repository

4. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. Add environment variables:
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_API_URL` with your Railway backend URL (e.g., `https://your-app.up.railway.app`)

6. Click "Deploy"

## Backend Deployment (Railway)

### Prerequisites
- Railway account
- GitHub repository with backend code

### Steps

1. Push backend code to GitHub:
```bash
cd casablanca-tech-backend
git add .
git commit -m "Initial backend commit"
git push origin main
```

2. Go to [Railway](https://railway.app) and sign in

3. Click "New Project" → "Deploy from GitHub repo"

4. Select your backend repository

5. Railway will auto-detect Rails and set up:
   - Ruby buildpack
   - PostgreSQL database

6. Add environment variables in Railway dashboard:
   - `PORT=3001`
   - `RAILS_MASTER_KEY` (copy from `config/master.key`)
   - `RAILS_ENV=production`

7. Update CORS in your backend:
   - Edit `config/initializers/cors.rb`
   - Add your Vercel domain to origins:
   ```ruby
   origins "https://your-frontend.vercel.app"
   ```

8. Commit and push CORS changes

9. Railway will automatically redeploy

## Post-Deployment

1. Update frontend environment:
   - In Vercel dashboard, update `NEXT_PUBLIC_API_URL` to your Railway URL
   - Redeploy frontend

2. Test the contact form on your live site

3. Monitor logs:
   - Vercel: Functions tab in dashboard
   - Railway: Logs tab in dashboard

## Custom Domains

### Vercel
1. Go to project settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Railway
1. Go to project settings → Domains
2. Generate a Railway domain or add custom domain
3. Update frontend API URL accordingly

## Troubleshooting

- **CORS errors**: Ensure backend CORS config includes your frontend domain
- **API connection failed**: Check that `NEXT_PUBLIC_API_URL` is set correctly
- **Database errors**: Ensure Railway has provisioned PostgreSQL and migrations have run
- **Build failures**: Check build logs for missing dependencies or configuration