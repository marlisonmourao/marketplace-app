import { marketPlaceApiClient } from '../api/market-place'
import type { AuthResponse } from '../interfaces/http/auth-response'
import type { LoginHttpParams } from '../interfaces/http/login'
import type {
  RegisterHttpParams
} from '../interfaces/http/register'

export async function register(userData: RegisterHttpParams) {
  const { data } = await marketPlaceApiClient.post<AuthResponse>(
    '/auth/register',
    userData
  )

  return data
}

export async function login({ email, password }: LoginHttpParams) {
  const { data } = await marketPlaceApiClient.post<AuthResponse>('/auth/login', {
    email,
    password,
  })

  return data
}