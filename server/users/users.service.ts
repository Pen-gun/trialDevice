import { createUserInDb, findUsersFromDb } from './users.repository'

export async function findUsers() {
  return findUsersFromDb()
}

export async function createUser(data: { email: string; name: string }) {
  return createUserInDb(data)
}