import type { Context } from 'hono'
import { createUser, findUsers } from './users.service'

export async function getUsersController(c: Context) {
  const users = await findUsers()
  return c.json(users)
}

export async function createUserController(c: Context) {
  const body = await c.req.json()
  const user = await createUser({ email: body.email, name: body.name })
  return c.json(user)
}