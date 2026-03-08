import { Hono } from 'hono'
import { usersRoutes } from '../users/users.routes'

export const app = new Hono().basePath('/api')

app.route('/users', usersRoutes)