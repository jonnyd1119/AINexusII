# AI Nexus Agency - Marketing Website

## Overview

This is a marketing website for AI Nexus Agency, a company that provides AI automation solutions for businesses. The application is built as a full-stack web application using a modern TypeScript stack with React on the frontend and Express on the backend. The site showcases the agency's services, features client testimonials, displays case studies, and provides a way for potential clients to schedule consultations via Calendly integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using **React with TypeScript** and follows a component-based architecture:

- **Framework**: React 18+ with TypeScript, configured via Vite for fast development and optimized builds
- **Routing**: Uses Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom design system based on shadcn/ui components
  - Theme uses CSS variables for consistent theming
  - Dark mode support with custom color palette (primary: #5846f6, secondary: #06d6a0)
  - Responsive design with mobile-first approach
- **UI Components**: Comprehensive shadcn/ui component library (Radix UI primitives)
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

**Design Decision**: The frontend is structured as a single-page application (SPA) with all pages rendered client-side. This provides smooth navigation and better user experience for the marketing site. The component structure separates concerns with dedicated components for each section (Hero, About, Services, FAQ, etc.).

### Backend Architecture

The backend uses **Express.js** with TypeScript in ESM mode:

- **Server Framework**: Express with middleware for JSON parsing and URL encoding
- **Development Setup**: Uses tsx for development with hot reloading
- **Build Process**: esbuild bundles the server code for production deployment
- **Request Logging**: Custom middleware logs API requests with duration and response data
- **Error Handling**: Centralized error handler middleware
- **Storage Layer**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`)
  - Designed to be easily swappable with database implementations
  - Currently implements basic user CRUD operations

**Design Decision**: The storage layer uses an interface-based approach to allow easy migration from in-memory storage to a database solution (PostgreSQL with Drizzle ORM based on configuration). This abstraction enables development without database setup while maintaining a clear migration path.

### Build and Development Setup

- **Monorepo Structure**: Client and server code share the same repository with clear separation
  - `/client` - Frontend React application
  - `/server` - Backend Express application  
  - `/shared` - Shared types and schemas (database schema)
- **Module Resolution**: Path aliases configured for clean imports
  - `@/` - Client source files
  - `@shared/` - Shared schemas and types
  - `@assets/` - Static assets
- **Development Server**: Vite serves the frontend with HMR, Express handles API routes
- **Production Build**: 
  - Frontend builds to `dist/public`
  - Backend bundles to `dist/index.js`
  - Static frontend served by Express in production

**Design Decision**: The vite.config.ts sets up middleware mode in development, allowing Express to handle both API routes and serve the Vite dev server. This unified development experience simplifies the workflow while maintaining separation of concerns.

### Database Schema (Prepared)

The application includes Drizzle ORM configuration for PostgreSQL:

- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Database**: Configured for PostgreSQL (via @neondatabase/serverless)
- **Schema Location**: `/shared/schema.ts`
- **Migrations**: Configured to output to `/migrations` directory

**Current Schema**:
- `users` table with id, username, and password fields
- Zod schemas for insert validation

**Design Decision**: Database schema is defined in the shared directory to enable type sharing between frontend and backend. Drizzle provides type-safe queries and automatic TypeScript types. The schema uses drizzle-zod to generate Zod validators from database schema, ensuring consistency.

### Styling System

- **CSS Framework**: Tailwind CSS with custom configuration
- **Component Library**: shadcn/ui (New York style variant)
- **Design Tokens**: CSS custom properties for theming
- **Typography**: Inter font family from Google Fonts
- **Color System**: HSL-based colors with semantic naming (primary, secondary, accent, etc.)

**Design Decision**: Tailwind CSS provides utility-first styling with excellent developer experience. shadcn/ui components are copied into the project rather than installed as dependencies, allowing full customization while maintaining consistent design patterns.

## External Dependencies

### Third-Party Services

1. **Calendly Integration**
   - External scheduling platform for consultation bookings
   - Hardcoded link: `https://calendly.com/jon-ainexus/15-minute-meeting-ai-automation-solution-overview`
   - Used in CTA sections and service descriptions

2. **Unsplash Images**
   - Stock photography for visual content
   - Images loaded via Unsplash CDN URLs

3. **Google Fonts**
   - Inter font family loaded from Google Fonts CDN

4. **Replit Services** (Development)
   - Replit dev banner script
   - Vite plugin for runtime error overlay
   - Cartographer plugin for code mapping (development only)

### Database and Infrastructure

1. **Neon Database** (Prepared)
   - Serverless PostgreSQL via @neondatabase/serverless
   - Connection via DATABASE_URL environment variable
   - Not currently active but configuration ready

2. **Session Management** (Prepared)
   - connect-pg-simple for PostgreSQL-backed sessions
   - Configured but not currently implemented

### Key NPM Packages

**Frontend**:
- React 18+ with TypeScript
- Wouter (routing)
- TanStack Query (data fetching)
- Radix UI components (30+ component primitives)
- Tailwind CSS, class-variance-authority, clsx (styling)
- React Hook Form + Zod (forms)
- date-fns (date utilities)
- cmdk (command menu)
- embla-carousel-react (carousels)

**Backend**:
- Express (server framework)
- Drizzle ORM (database ORM)
- Drizzle-Zod (schema validation)

**Build Tools**:
- Vite (frontend build)
- esbuild (backend build)
- tsx (TypeScript execution)
- drizzle-kit (database migrations)

**Design Decision**: The application uses Radix UI primitives via shadcn/ui to ensure accessibility, consistent behavior, and customizability. All components are composable and follow WAI-ARIA guidelines.