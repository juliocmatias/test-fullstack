import { StatusEnum } from '@/enums';
import { z } from 'zod';

import { isValidCPF } from '../utils';

export const schema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'O nome é obrigatório.' })
      .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
      .regex(/^(?!\s)(?!.*\s$)[A-Za-zÀ-ÿ\s]+$/, {
        message:
          'O nome não pode começar ou terminar com espaços e deve conter apenas letras'
      }),
    email: z.string().email({
      message: 'E-mail inválido'
    }),
    cpf: z
      .string()
      .length(11, {
        message: 'CPF deve ter exatamente 11 dígitos'
      })
      .regex(/^\d+$/, {
        message: 'CPF deve conter apenas números'
      })
      .refine(isValidCPF, { message: 'Informe um CPF válido' }),
    phone: z
      .string()
      .length(11, {
        message: 'Telefone deve ter exatamente 11 dígitos'
      })
      .regex(/^\d+$/, {
        message: 'Telefone deve conter apenas números'
      }),
    status: z.nativeEnum(StatusEnum)
  })
  .refine((fields) => fields.status !== StatusEnum.STATUS, {
    path: ['status'],
    message: 'Por favor, selecione um status'
  });

export type DataForm = z.infer<typeof schema>;
