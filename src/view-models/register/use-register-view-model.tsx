import { useRegisterMutation } from '@/shared/queries/auth/use-register.mutation'
import { useUserStore } from '@/shared/storage/user-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { registerSchema, type RegisterSchemaType } from './register-schema'
import { useImage } from '@/shared/hooks/use-image'
import { useState } from 'react'
import { CameraType } from 'expo-image-picker'

export function useRegisterViewModel() {
  const useRegister = useRegisterMutation()
  const { setSession } = useUserStore()
  const [avatarUri, setAvatarUri] = useState<string | null | undefined>(null)

  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  })

  async function handleSelectAvatar() {
    await handleSelectImage()
  }

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
    const { name, email, phone, password } = formData
    const userData = { name, email, phone, password }

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
    handleSelectAvatar,
    avatarUri,
  }
}
