import { colors } from '@/styles/colors'
import { useRef, useState } from 'react'
import type { FocusEvent, TextInput } from 'react-native'

type InputViewModelProps = {
  isError: boolean
  isDisabled?: boolean
  error?: string
  secureTextEntry?: boolean
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
  mask?: (value: string) => string | void
  onChangeText?: (text: string) => void
  value?: string
}

export function useInputViewModel({
  error,
  isDisabled,
  isError,
  mask,
  onBlur,
  onFocus,
  onChangeText,
  secureTextEntry,
  value,
}: InputViewModelProps) {
  const [showPassword, setShowPassword] = useState(secureTextEntry)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<TextInput>(null)

  function handlePasswordToggle() {
    setShowPassword((prev) => !prev)
  }

  function handleWrapperPress() {
    inputRef.current?.focus()
  }

  function handleFocus(event: FocusEvent) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent) {
    setIsFocused(false)
    onBlur?.(event)
  }

  function getIconColor() {
    if (isError) return colors.danger
    if (isFocused) return colors['purple-base']
    if (value) return colors['purple-base']

    return colors.gray[200]
  }

  function handleTextChange(text: string) {
    if (mask) {
      onChangeText?.(mask(text) || '')
    } else {
      onChangeText?.(text)
    }
  }

  return {
    handleBlur,
    handleFocus,
    handlePasswordToggle,
    handleWrapperPress,
    getIconColor,
    inputRef,
    showPassword,
    handleTextChange,
    isFocused,
  }
}
