import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { z, ZodError } from 'zod'

export default class UsersMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const userSchema = z.object({
      email: z.string().email('Invalid format for email'),
      password: z.string().min(5, 'Password must be at least 5 characters'),
      fullName: z.string().min(3, 'Full name must be at least 3 characters'),
    })

    try {
      userSchema.parse(ctx.request.all())
      return await next()
    } catch (error) {
      if (error instanceof ZodError) {
        const { message } = error.errors[0]
        return ctx.response.badRequest({ message })
      }
      return ctx.response.internalServerError({ message: 'Unexpected error' })
    }
  }
}
