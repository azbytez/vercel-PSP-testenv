# Domain Automation Dashboard - Vercel Deployment

This is a Next.js version of the dashboard that can be deployed to Vercel to test the tracking code.

## Quick Deploy to Vercel

1. **Install dependencies:**
   ```bash
   cd vercel-nextjs
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

3. **Deploy to Vercel:**
   - Push this folder to GitHub
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Select the `vercel-nextjs` folder
   - Click "Deploy"

   Or use Vercel CLI:
   ```bash
   npm i -g vercel
   vercel
   ```

## What's Included

- ✅ Matomo/Prospectory tracking code in `_app.tsx`
- ✅ Simple test page to verify tracking
- ✅ Ready for Vercel deployment

The tracking code will load on every page visit and send data to your Matomo instance.

