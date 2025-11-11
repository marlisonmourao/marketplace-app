import { Input } from '@/shared/components/input'
import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import type { useRegisterViewModel } from './use-register-view-model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => (
  <View className="flex-1 justify-center px-4">
    <Input label='E-mail' />
    <Input label='Password' />
    <TouchableOpacity
      className="h-24 w-full items-center justify-center rounded-md bg-blue-500"
      onPress={onSubmit}
    >
      <Text>Registrar</Text>
    </TouchableOpacity>
  </View>
)
