import type { Context } from 'hono'
import { createUser, createUserSchema, findUsers } from './users.service'
import { treeifyError } from 'zod/v4/core'

export async function getUsersController(c: Context) {
  const users = await findUsers()
  return c.json(users)
}

export async function createUserController(c: Context) {
  const body = await c.req.json()
  const result = createUserSchema.safeParse(body)
  if (!result.success) {
    return c.json({ 
      message: 'Validation failed',
      error: treeifyError(result.error) }, 400)
  }
  const user = await createUser(result.data)
  return c.json(user, 201)
}