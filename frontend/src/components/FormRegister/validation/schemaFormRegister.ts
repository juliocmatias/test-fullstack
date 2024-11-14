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
      .length(14, {
        message: 'Digite um CPF no tamanho de 14 caracteres Ex: 999.999.999-99'
      })
      .refine(isValidCPF, { message: 'Informe um CPF válido' }),
    phone: z.string().length(15, {
      message: 'Digite um número de telefone válido Ex: (99) 99999-9999'
    }),
    status: z.nativeEnum(StatusEnum)
  })
  .refine((fields) => fields.status !== StatusEnum.STATUS, {
    path: ['status'],
    message: 'Por favor, selecione um status'
  });

export type DataForm = z.infer<typeof schema>;
