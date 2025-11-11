import { Input } from '@/shared/components/input'
import { useState, type FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import type { useRegisterViewModel } from './use-register-view-model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View className="flex-1 justify-center px-4">
      <Input
        label="E-mail"
        leftIcon="mail-outline"
        onChangeText={setEmail}
        value={email}
        error="E-mail inválido"
      />
      <Input
        label="Password"
        leftIcon="lock-closed-outline"
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity
        className="h-24 w-full items-center justify-center rounded-md bg-blue-500"
        onPress={onSubmit}
      >
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}
