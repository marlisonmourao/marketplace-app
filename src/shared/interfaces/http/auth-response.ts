import type { UserInterface } from '../user'

export type AuthResponse = {
  user: UserInterface
  token: string
  refreshToken: string
}
