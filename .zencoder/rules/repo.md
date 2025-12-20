---
description: Repository Information Overview
alwaysApply: true
---

# NodeBase v1 Information

## Summary
NodeBase is a Next.js 15-based full-stack application for building and managing AI-powered workflows. It features real-time workflow visualization, user authentication, database persistence with PostgreSQL, and integrations with multiple AI providers (Anthropic, OpenAI, Google). The application uses tRPC for type-safe API communication and Inngest for workflow orchestration.

## Structure
- **src/app** - Next.js App Router pages and layouts, including auth flows, API routes, and Inngest functions
- **src/components** - React components including UI primitives from shadcn/ui, workflow visualization, and modals
- **src/trpc** - tRPC router and client configuration
- **src/hooks** - Custom React hooks
- **src/lib** - Utility functions and helpers
- **src/config** - Application configuration
- **src/features** - Feature-specific logic and components
- **prisma** - Database schema, migrations, and Prisma configuration
- **public** - Static assets (logos, SVGs)

## Language & Runtime
**Language**: TypeScript 5  
**Runtime**: Node.js (LTS recommended)  
**Framework**: Next.js 15.5.4  
**UI Framework**: React 19.1.0  
**Build System**: Next.js (with Turbopack)  
**Package Manager**: npm

## Dependencies

**Main Dependencies**:
- **Next.js Ecosystem**: Next.js 15.5.4, React 19.1.0, React DOM 19.1.0, next-themes
- **Database & ORM**: Prisma 7.1.0, @prisma/adapter-pg, @prisma/client, pg (PostgreSQL)
- **API & Data**: @trpc/server, @trpc/client, @trpc/tanstack-react-query, TanStack React Query 5.90.12
- **AI Integrations**: ai 5.0.108, @ai-sdk/anthropic, @ai-sdk/openai, @ai-sdk/google
- **Authentication**: @polar-sh/better-auth, better-auth
- **Workflow Management**: Inngest 3.47.0, @polar-sh/sdk
- **UI Components**: @radix-ui (dialog, dropdown-menu, alert-dialog, tooltip, label, separator, slot), shadcn/ui (via components.json), lucide-react, sonner (toast notifications)
- **Forms & Validation**: react-hook-form, @hookform/resolvers, zod
- **Styling**: Tailwind CSS 4, class-variance-authority, tailwind-merge, PostCSS
- **Graph Visualization**: @xyflow/react
- **Utilities**: date-fns, nuqs (URL state management), superjson, random-word-slugs, clsx, client-only, server-only
- **Error Tracking**: @sentry/nextjs

**Development Dependencies**:
- **Linting & Formatting**: ESLint 9, eslint-config-next, eslint-config-prettier, eslint-plugin-prettier, Prettier
- **Type Checking**: TypeScript, @types/react, @types/react-dom, @types/node, @types/pg
- **Utilities**: tsx (TypeScript runner), inngest-cli, mprocs (multi-process runner), tw-animate-css
- **Styling**: @tailwindcss/postcss, Tailwind CSS 4
- **Config**: @eslint/eslintrc

## Build & Installation

**Install Dependencies**:
```bash
npm install
```

**Development Server**:
```bash
npm run dev
```

Starts Next.js dev server on http://localhost:3000 with hot reload.

**Run All Services** (Next.js + Inngest):
```bash
npm run dev:all
```

Uses mprocs to run multiple processes in parallel.

**Production Build**:
```bash
npm run build --turbopack
```

Builds optimized application with Turbopack bundler.

**Start Production Server**:
```bash
npm start
```

**Inngest Development**:
```bash
npm run inngest:dev
```

Starts Inngest CLI for local workflow development.

## Database

**Type**: PostgreSQL  
**ORM**: Prisma 7.1.0  
**Schema Location**: prisma/schema.prisma  
**Migrations**: prisma/migrations/  
**Generated Client**: src/generated/prisma  

Uses Prisma Client adapter for PostgreSQL with migrations and auto-generation of TypeScript types.

## API & Communication

**API Framework**: tRPC (type-safe RPC framework)  
**Server Implementation**: src/trpc/server.tsx  
**Client Implementation**: src/trpc/client.tsx  
**Data Fetching**: TanStack React Query for caching and synchronization  
**Serialization**: superjson for complex type handling

## Authentication

**Framework**: better-auth (@polar-sh/better-auth)  
**Routes**: src/app/(auth)/ for login and signup pages  
**Session Management**: Database-backed sessions via Prisma

## UI & Components

**Component Library**: shadcn/ui (new-york style with CSS variables)  
**Icon Library**: lucide-react  
**Toast Notifications**: sonner  
**Styling**: Tailwind CSS 4 with CSS variables  
**Config**: components.json defines aliases and Tailwind setup

**Key Component Locations**:
- src/components/ui/ - Shadcn primitives
- src/components/workflow-node.tsx - Workflow visualization
- src/components/upgrade-modal.tsx - Upgrade UI

## Error Monitoring & Observability

**Sentry Integration**: @sentry/nextjs  
**Configuration**: sentry.server.config.ts, sentry.edge.config.ts, next.config.ts  
**Features**: Automatic Vercel Cron monitoring, client error tracking, source map uploads  
**Instrumentation**: src/instrumentation.ts, src/instrumentation-client.ts

## Linting & Formatting

**Linter**: ESLint 9  
**Config**: eslint.config.mjs (flat config)  
**Rules**: next/core-web-vitals, next/typescript  
**Formatter**: Prettier 3.7.4  
**Config**: .prettierrc, .prettierignore

**Run Linting**:
```bash
npm run lint
```

## Configuration Files

- **tsconfig.json** - TypeScript compiler options with path aliases (@/* → src/*)
- **next.config.ts** - Next.js configuration with Sentry integration and redirects
- **prisma.config.ts** - Prisma configuration pointing to schema and migrations
- **postcss.config.mjs** - PostCSS with Tailwind CSS 4
- **.env** - Environment variables (API keys, database URL)
- **components.json** - shadcn/ui configuration
- **mprocs.yaml** - Multi-process configuration for dev:all script
