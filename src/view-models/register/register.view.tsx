import { InputController } from '@/shared/components/input-controller'
import { type FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import type { useRegisterViewModel } from './use-register-view-model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  errors,
}) => {
  return (
    <View className="flex-1 justify-center px-4">
      <InputController
        control={control}
        errors={errors}
        label="E-MAIL"
        leftIcon="mail-outline"
        name="email"
      />
      <InputController
        control={control}
        errors={errors}
        label="SENHA"
        leftIcon="lock-closed-outline"
        name="password"
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
