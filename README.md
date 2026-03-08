# trialDevice

Small Next.js + Hono + Prisma app.

## App Location

- Main project: `my-app/`

## Quick Start

```bash
cd my-app
npm install
npm run dev
```

Open: http://localhost:3000

## API Structure (Users)

- Next entry: `my-app/app/api/[...route]/route.ts`
- HTTP app: `my-app/server/http/app.ts`
- Feature layer:
	- `my-app/server/users/users.routes.ts`
	- `my-app/server/users/users.controller.ts`
	- `my-app/server/users/users.service.ts`
	- `my-app/server/users/users.repository.ts`

## Current Endpoint

- `GET /api/users`
- `POST /api/users`
