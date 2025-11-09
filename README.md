# FlowLearn PWA (Prototype)

This archive contains a minimal React + Vite + Tailwind prototype and a Supabase SQL schema.

## Quick local run

1. Ensure Node.js (>=18) and npm installed.
2. In project root:
   npm install
   npm run dev
3. Open http://localhost:5173

## Deploy to Vercel

1. Push this repo to GitHub.
2. Create a new project on Vercel and select the GitHub repo.
3. Build command: `npm run build`
   Output directory: `dist`
4. Set environment variables if using Supabase.

## Supabase

1. Create a Supabase project.
2. In SQL editor, run `supabase/schema.sql`.
3. Configure Auth and Storage as needed.

## Notes

- This is a starter scaffold. Ask me to expand components, add auth, integrate Supabase client, or create CI/CD configs.
