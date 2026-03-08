import { handle } from 'hono/vercel'
import { app } from '@/server/http/app'

export const GET = handle(app)
export const POST = handle(app)