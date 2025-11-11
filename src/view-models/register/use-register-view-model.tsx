import { useRegisterMutation } from '@/shared/queries/auth/use-register.mutation'
import { useUserStore } from '@/shared/storage/user-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { registerSchema, type RegisterSchemaType } from './register-schema'

export function useRegisterViewModel() {
  const useRegister = useRegisterMutation()
  const { setSession } = useUserStore()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = handleSubmit(async (formData) => {
    const { confirmPassword, ...userData } = formData

    const mutationResponse = await useRegister.mutateAsync(userData)

    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    })
  })

  return {
    control,
    errors,
    onSubmit,
  }
}
