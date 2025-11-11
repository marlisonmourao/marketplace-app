import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  type TextInputProps,
} from 'react-native'
import { inputVariants, type InputVariantsProps } from './input.variants'

import { Ionicons } from '@expo/vector-icons'
import { useInputViewModel } from './use-input-view-model'

export type InputProps = TextInputProps &
  InputVariantsProps & {
    label?: string
    leftIcon?: keyof typeof Ionicons.glyphMap
    rightIcon?: keyof typeof Ionicons.glyphMap
    containerClassName?: string
    mask?: (value: string) => string | void
    error?: string
  }

export function Input({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  mask,
  isError,
  secureTextEntry = false,
  onBlur,
  onFocus,
  className,
  isDisabled,
  onChangeText,
  value,
  error,
  ...props
}: InputProps) {
  const {
    isFocused,
    handleBlur,
    handleFocus,
    handlePasswordToggle,
    handleWrapperPress,
    getIconColor,
    showPassword,
  } = useInputViewModel({
    secureTextEntry,
    onBlur,
    onFocus,
    error,
    value,
    isError: !!error,
    onChangeText,
    isDisabled,
    mask,
  })

  const styles = inputVariants({
    isFocused,
  })
  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        <Ionicons name="person" size={22} className='mr-3' />

        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={onChangeText}
          className={styles.input({ className })}
          {...props}
        />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" size={22} />
        </TouchableOpacity>
      </Pressable>
    </View>
  )
}
