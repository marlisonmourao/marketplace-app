import { useRegisterMutation } from '@/shared/queries/auth/use-register.mutation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { registerSchema, type RegisterSchemaType } from './register-schema'

export function useRegisterViewModel() {
  const useRegister = useRegisterMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: 'Marlison Mourão',
      email: 'marlison@email.com',
      phone: '932939299293',
      password: '12345678',
      confirmPassword: '12345678',
    },
  })

  console.log(errors)

  const onSubmit = handleSubmit(async (formData) => {
    const { confirmPassword, ...userData } = formData

    await useRegister.mutateAsync(userData)
  })

  return {
    control,
    errors,
    onSubmit,
  }
}
