import { createUserInDb, findUsersFromDb } from './users.repository'
import { z } from 'zod'

export const createUserSchema = z.object({
  email: z.email(),
  name: z.string().trim().min(1).optional(),
})
export type CreateUserInput = z.infer<typeof createUserSchema>

export async function findUsers() {
  return findUsersFromDb()
}

export async function createUser(data: CreateUserInput) {
  return createUserInDb(data)
}