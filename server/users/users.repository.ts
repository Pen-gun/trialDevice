import { prisma } from '@/lib/prisma'

export async function findUsersFromDb() {
  return prisma.user.findMany()
}

export async function createUserInDb(data: { email: string; name: string }) {
  return prisma.user.create({
    data
  })
}