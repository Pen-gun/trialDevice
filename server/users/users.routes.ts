import { Hono } from 'hono'
import { createUserController, getUsersController } from './users.controller'

export const usersRoutes = new Hono()

usersRoutes.get('/', getUsersController)
usersRoutes.post('/', createUserController)