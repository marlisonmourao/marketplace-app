import type { ReactNode } from 'react'
import { create } from 'zustand'

type ModalConfig = {
  animationType?: 'none' | 'slide' | 'fade'
  transparent?: boolean
  statusBarTranslucent?: boolean
}

type ModalStoreProps = {
  isOpen: boolean
  content: ReactNode | null
  config: ModalConfig
  open: (content: ReactNode, config?: ModalConfig) => void
  close: () => void
}

export const useModalStore = create<ModalStoreProps>((set, get) => ({
  isOpen: false,
  content: null,
  config: {
    animationType: 'fade',
    transparent: true,
    statusBarTranslucent: false,
  },
  open: (content: ReactNode, config?: ModalConfig) =>
    set({ isOpen: true, content, config: { ...get().config, ...config } }),
  close: () => set({ isOpen: false, content: null }),
}))
