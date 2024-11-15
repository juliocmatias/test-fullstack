import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class UsersMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { email, password, fullName } = ctx.request.all()

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (email && !emailPattern.test(email)) {
      return ctx.response.badRequest({ message: 'Invalid format for email' })
    }

    if (password && password.length < 5) {
      return ctx.response.badRequest({ message: 'Password must be at least 5 characters' })
    }

    if (fullName && fullName.length < 3) {
      return ctx.response.badRequest({ message: 'Full name must be at least 3 characters' })
    }

    await next()
  }
}
