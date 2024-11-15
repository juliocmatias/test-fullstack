import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import Jwt from '#utils/jwt'

export default class TokenValidationMiddleware {
  constructor(private jwtService = Jwt) {}

  async handle(ctx: HttpContext, next: NextFn) {
    const { authorization } = ctx.request.headers()

    if (!authorization) {
      return ctx.response.unauthorized({ message: 'Token not provided' })
    }

    const token = TokenValidationMiddleware.extractBearerToken(authorization)
    const payload = this.jwtService.verify(token)

    if (payload === 'Token must be a valid token') {
      return ctx.response.unauthorized({ message: payload })
    }

    await next()
  }

  private static extractBearerToken(authorization: string): string {
    return authorization.split(' ')[1]
  }
}
