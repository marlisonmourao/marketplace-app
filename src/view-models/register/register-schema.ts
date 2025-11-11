import { z } from 'zod'

const MIN_NAME_LENGTH = 5
const MAX_NAME_LENGTH = 100
const MIN_PASSWORD_LENGTH = 8


export const registerSchema = z.object({
  name: z.string({ error: 'Nome é obrigatório' })
    .min(MIN_NAME_LENGTH, { error: 'Nome deve ter no mínimo 5 caracteres' })
    .max(MAX_NAME_LENGTH, { error: 'Nome deve ter no máximo 100 caracteres' }),
  email: z.email({ error: 'Email inválido' }),
  phone: z.string({ error: 'Telefone é obrigatório' }),
  password: z.string({ error: 'Senha é obrigatória' })
    .min(MIN_PASSWORD_LENGTH, { error: 'Senha deve ter no mínimo 8 caracteres' }),
  confirmPassword: z.string({ error: 'Confirmação de senha é obrigatória' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
})

export type RegisterSchemaType = z.infer<typeof registerSchema>