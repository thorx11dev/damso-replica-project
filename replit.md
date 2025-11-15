# iPod-Style Music Player

## Project Overview
This project is a web application featuring an iPod-style music player interface, originally created in Lovable and migrated to Replit's fullstack environment.

## Recent Changes
- **November 15, 2025**: Successfully migrated from Lovable to Replit fullstack template
  - Restructured project to use client/server architecture
  - Updated from react-router-dom to wouter for routing
  - Configured Express 4.x backend server (downgraded from Express 5 for compatibility)
  - Set up Vite development environment with proper port binding (5000)
  - Configured Vite allowedHosts to support Replit's dynamic URLs
  - Created queryClient for TanStack Query integration
  - Added tsx watch with ignore patterns to prevent unnecessary restarts
  - Migration completed and verified - application is fully functional

## Project Architecture
- **Frontend**: React + TypeScript + Vite
  - Located in `client/` directory
  - Uses wouter for routing
  - TanStack Query for data fetching
  - Shadcn UI components
  - Tailwind CSS for styling
- **Backend**: Express + TypeScript
  - Located in `server/` directory
  - Serves both API and static frontend files
  - Development mode uses Vite middleware
- **Shared**: Common types and schemas
  - Located in `shared/` directory

## Tech Stack
- React 18
- TypeScript
- Vite
- Express
- Wouter (routing)
- TanStack Query
- Shadcn UI
- Tailwind CSS
- Lucide React (icons)

## Development
- Run `npm run dev` to start the development server
- Frontend and backend both served on port 5000
- Hot module replacement enabled via Vite

## User Preferences
None documented yet.
