import type { UserInterface } from '../user'

export type RegisterHttpParams = {
  name: string
  email: string
  avatarUrl?: string
  phone: string
  password: string
}

export type RegisterHttpResponse = {
  user: UserInterface
  token: string
  refreshToken: string
}
