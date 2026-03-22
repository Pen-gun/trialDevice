import { prisma } from '@/lib/prisma'
import {CreateUserInput} from './users.service'

export async function findUsersFromDb() {
  return prisma.user.findMany()
}

export async function createUserInDb(data: CreateUserInput) {
  return prisma.user.create({
    data
  })
}