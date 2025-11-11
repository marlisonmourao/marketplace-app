import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { UserInterface } from '../interfaces/user'

interface SetSessionParams {
  user: UserInterface | null
  token: string | null
  refreshToken: string | null
}

interface UpdateTokensParams {
  token: string | null
  refreshToken: string | null
}

export interface UserStore {
  user: UserInterface | null
  token: string | null
  refreshToken: string | null

  setSession: (sessionData: SetSessionParams) => void
  logout: () => void
  updateTokens: (params: UpdateTokensParams) => void
}

export const useUserStore = create(persist<UserStore>((set) => ({
  user: null,
  token: null,
  refreshToken: null,

  logout: () => set({
    user: null,
    token: null,
    refreshToken: null,
  }),
  setSession: (sessionData) => set({ ...sessionData }),
  updateTokens: (params) => set({ ...params }),
}), {
  name: 'marketplace:auth',
  storage: createJSONStorage(() => AsyncStorage),
}))

