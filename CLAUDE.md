# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for Dr. Elizaveta Efimova (Dokliza), a pediatrician and integrative medicine specialist. The site is built with React + TypeScript + Vite and deployed on Vercel at https://dokliza.com.

## Development Commands

```bash
# Navigate to main project directory
cd landing_main

# Install dependencies
npm install

# Development server (runs on localhost:3000)
npm run dev

# Production build
npm run build

# Preview build locally
npm run preview
```

## Deployment

**CRITICAL**: This project uses team-owned domains on Vercel. Standard `vercel --prod` will NOT update the live domain. Use this exact workflow:

```bash
# 1. Navigate to project
cd landing_main

# 2. Clean build
rm -rf dist
npm run build

# 3. Deploy
npx vercel --prod --yes

# 4. REQUIRED: Alias the domain (replace [deployment-url] with output from step 3)
npx vercel alias set [deployment-url] dokliza.com --scope=team_9l7lyoDdNecgmaXzevA2DPvY

# 5. Verify deployment
curl -s https://dokliza.com/ | grep "index-"
```

Without step 4, the deployment creates but the domain continues pointing to the old version.

## Architecture

### Structure
- `App.tsx`: Single-file React component containing the entire landing page (~52KB)
- `index.tsx`: React mount point
- `index.html`: Entry point with Tailwind CSS via CDN
- `public/`: Static assets (images, certificates)
- `vercel.json`: Deployment configuration with security headers

### Key Features
- **Component Design**: All sections in one App.tsx file with shared components (Button, Section, AccordionItem)
- **Feature Flags**: `FEATURE_FLAGS` object controls section visibility
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Mobile menu, lightbox for certificates, smooth scrolling
- **Assets**: Doctor photos and certificate documents in `/public/documents/`

### Styling
- **Tailwind CSS**: Loaded via CDN script (not as stylesheet)
- **Custom Colors**: "Nature" color scheme (greens, beiges, stone tones)
- **Icons**: Lucide React icons
- **Typography**: Serif fonts for headings, sans-serif for body

### Content Sections
1. Hero with doctor photo and call-to-action
2. Problems section ("Вам это знакомо?")
3. About section with expandable credentials
4. Method (3-step approach) - controlled by feature flag
5. Personal story section
6. Testimonials
7. FAQ

## Environment Variables
- `GEMINI_API_KEY`: Google Gemini API key (defined in vite.config.ts)

## Important Files
- `landing_main/App.tsx`: Main application component
- `landing_main/vite.config.ts`: Vite configuration with API key setup
- `landing_main/vercel.json`: Vercel deployment config
- `notes/2025-11-28_dokliza_deployment_summary.md`: Detailed deployment troubleshooting guide

## Vercel Configuration
- **Project ID**: `prj_fX7o5rZs1sLxxg3xjfcTkgr8VQ63`
- **Team**: `team_9l7lyoDdNecgmaXzevA2DPvY`
- **Domain**: `dokliza.com`
- **Output**: `dist/` directory
- **Build**: Uses `npm run build` (Vite)