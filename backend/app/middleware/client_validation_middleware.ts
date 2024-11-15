import CPFValidator from '#utils/is_valid_cpf'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { z, ZodError } from 'zod'

export default class ClientValidationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const clientSchema = z.object({
      name: z.string().min(3, 'Name must be at least 3 characters'),
      email: z.string().email('Invalid format for email'),
      cpf: z
        .string()
        .length(11, 'CPF must be at least 11 characters')
        .refine((cpf) => new CPFValidator(cpf).isValid(), 'Invalid CPF format'),
      phone: z.string().length(11, 'Phone number must be at least 11 characters'),
      status: z.enum(['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'], {
        message: 'Invalid status',
      }),
    })

    try {
      clientSchema.parse(ctx.request.all())
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
