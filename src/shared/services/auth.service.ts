import { baseURL, marketPlaceApiClient } from '../api/market-place'
import type { AuthResponse } from '../interfaces/http/auth-response'
import type { LoginHttpParams } from '../interfaces/http/login'
import type { RegisterHttpParams } from '../interfaces/http/register'
import type { UploadAvatarResponse } from '../interfaces/http/upload-avatar-response'

export async function register(userData: RegisterHttpParams) {
  const { data } = await marketPlaceApiClient.post<AuthResponse>(
    '/auth/register',
    userData
  )

  return data
}

export async function login({ email, password }: LoginHttpParams) {
  const { data } = await marketPlaceApiClient.post<AuthResponse>(
    '/auth/login',
    {
      email,
      password,
    }
  )

  return data
}

export async function uploadAvatar(avatarUri: string) {
  const formData = new FormData()

  formData.append('avatar', {
    uri: avatarUri,
    type: 'image/jpeg',
    name: 'avatar.jpg',
  } as unknown as Blob)

  const { data } = await marketPlaceApiClient.post<UploadAvatarResponse>(
    '/users/avatar',
    formData
  )

  data.url = `${baseURL}/${data.url}`

  return data
}
