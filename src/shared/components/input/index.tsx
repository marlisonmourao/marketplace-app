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
  value,
  error,
  ...props
}: InputProps) {
  const {
    isFocused,
    handleBlur,
    handleFocus,
    handleTextChange,
    handleWrapperPress,
    getIconColor,
    showPassword,
    handlePasswordToggle,
  } = useInputViewModel({
    secureTextEntry,
    onBlur,
    onFocus,
    error,
    value,
    isError: !!error,
    isDisabled,
    mask,
  })

  const styles = inputVariants({
    isFocused,
  })
  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()} onPress={handleWrapperPress}>
        {leftIcon && (
          <Ionicons
            className="mr-3"
            color={getIconColor()}
            name={leftIcon}
            size={22}
          />
        )}
        <TextInput
          className={styles.input({ className })}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          secureTextEntry={showPassword}
          value={value}
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
            />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons className="mr-4" name="alert-circle-outline" size={14} />
          {error}
        </Text>
      )}
    </View>
  )
}
