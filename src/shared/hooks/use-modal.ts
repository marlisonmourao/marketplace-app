import type { Ionicons } from '@expo/vector-icons'
import { createElement } from 'react'
import { useModalStore } from '../storage/modal-store'
import {
  SelectionModal,
  type SelectionModalProps,
} from '../components/modal/selection-modal'

export type SelectionVariant = 'primary' | 'secondary' | 'danger'

export type SelectionOptions = {
  text: string
  onPress: () => void
  icon?: keyof typeof Ionicons.glyphMap
  variant?: SelectionVariant
}

export const useModal = () => {
  const { open } = useModalStore()

  const showSelection = ({
    title,
    message,
    options,
  }: {
    title: string
    message?: string
    options: SelectionOptions[]
  }) => {
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      } as SelectionModalProps)
    )
  }
  return { showSelection }
}
