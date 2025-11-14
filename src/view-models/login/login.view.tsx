import { AuthFormHeader } from '@/shared/components/auth-form-header'
import { InputController } from '@/shared/components/input-controller'
import { KeyboardContainer } from '@/shared/components/keyboard-container'
import { router } from 'expo-router'
import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import type { useLoginViewModel } from './use-login.view-model'

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  errors,
  onSubmit
}) => (
  <KeyboardContainer>
    <View className="flex-1 items-center justify-center px-[40px]">
      <AuthFormHeader
        subtitle="Informe seu e-mail e senha para entrar"
        title="Acesse sua conta"
      />

      <InputController
        control={control}
        errors={errors}
        label="E-MAIL"
        leftIcon="mail-outline"
        name="email"
        placeholder="mail@exemple.com"
      />

      <InputController
        control={control}
        errors={errors}
        label="SENHA"
        leftIcon="lock-closed-outline"
        name="password"
        placeholder="sua senha"
        secureTextEntry
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  </KeyboardContainer>
)
