import { useLoginMutation } from '@/shared/queries/auth/use-login.mutation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema, type LoginSchemaType } from './login-schema'

export function useLoginViewModel() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const loginMutation = useLoginMutation()

  const onSubmit = handleSubmit(async ({ email, password }) => {
    await loginMutation.mutateAsync({ email, password })
  })

  return { control, errors, onSubmit }
}
