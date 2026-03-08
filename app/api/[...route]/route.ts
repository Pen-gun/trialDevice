import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { prisma } from '@/lib/prisma'

const app = new Hono().basePath('/api')

app.get('/users', async (c) => {
  const users = await prisma.user.findMany()
  return c.json(users)
})

app.post('/users', async (c) => {
  const body = await c.req.json()
  const user = await prisma.user.create({
    data: { email: body.email, name: body.name }
  })
  return c.json(user)
})

export const GET = handle(app)
export const POST = handle(app)