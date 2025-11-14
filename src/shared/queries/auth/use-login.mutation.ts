import type { LoginHttpParams } from '@/shared/interfaces/http/login'
import { login } from '@/shared/services/auth.service'
import { useUserStore } from '@/shared/storage/user-store'
import { useMutation } from '@tanstack/react-query'

export const useLoginMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => login(userData),
    onSuccess: (response) => {
      setSession(response)
    },
  })

  return mutation
}
