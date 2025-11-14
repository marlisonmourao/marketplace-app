import { colors } from '@/styles/colors'
import { Ionicons } from '@expo/vector-icons'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'
import { buttonVariants, type ButtonVariants } from './button.variants'

type ButtonProps = TouchableOpacityProps &
  ButtonVariants & {
    leftIcon?: keyof typeof Ionicons.glyphMap
    rightIcon?: keyof typeof Ionicons.glyphMap
    children: string
  }

export function Button({
  leftIcon,
  rightIcon,
  children,
  variant = 'field',
  isLoading,
  isDisabled,
  className,
  ...props
}: ButtonProps) {
  const contentColor =
    variant === 'field' ? colors.white : colors['purple-base']

  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isDisabled,
    isLoading,
    variant,
  })

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color={contentColor} size="small" />
    }

    return (
      <>
        {leftIcon && (
          <Ionicons color={contentColor} name={leftIcon} size={24} />
        )}

        <Text className={styles.text()}>{children}</Text>

        {rightIcon && (
          <Ionicons color={contentColor} name={rightIcon} size={24} />
        )}
      </>
    )
  }

  return (
    <TouchableOpacity className={styles.base({ className })} {...props}>
      {renderContent()}
    </TouchableOpacity>
  )
}
