import type {
  SelectionOptions,
  SelectionVariant,
} from '@/shared/hooks/use-modal'
import { colors } from '@/styles/colors'
import { Ionicons } from '@expo/vector-icons'
import clsx from 'clsx'
import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export interface SelectionModalProps {
  title: string
  message?: string
  options: SelectionOptions[]
}

export const SelectionModal: FC<SelectionModalProps> = ({
  title,
  message,
  options,
}) => {
  const getButtonClass = (variant: SelectionVariant) =>
    clsx(
      'mb-2 w-full flex-row items-center justify-center rounded-lg px-4 py-3',
      {
        'bg-danger': variant === 'danger',
        'bg-blue-dark': variant === 'secondary',
        'bg-purple-base': variant === 'primary',
      }
    )

  return (
    <View className="mx-auto w-[85%] max-w-sm rounded-xl bg-white p-6 shadow-2xl">
      <View className="items-center">
        <Text className="mb-3 font-bold text-gray-900 text-lg">{title}</Text>
      </View>
      {message && (
        <Text className="mb-6 text-base text-gray-600 leading-6">
          {message}
        </Text>
      )}

      <View className="gap-3">
        {options.map((option) => (
          <TouchableOpacity
            className={getButtonClass(option.variant ?? 'primary')}
            key={option.text}
            onPress={option.onPress}
          >
            {option.icon && (
              <Ionicons
                className="mr-2"
                color={colors.white}
                name={option.icon}
                size={20}
              />
            )}
            <Text className="font-semibold text-white">{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
