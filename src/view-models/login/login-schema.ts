import { z } from 'zod'

const MIN_PASSWORD_LENGTH = 8

export const loginSchema = z.object({
  email: z.email({ error: 'Email inválido' }),
  password: z
    .string({ error: 'Senha é obrigatória' })
    .min(MIN_PASSWORD_LENGTH, {
      error: 'Senha deve ter no mínimo 8 caracteres',
    }),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
