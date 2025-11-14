import { AuthFormHeader } from '@/shared/components/auth-form-header'
import { Button } from '@/shared/components/button'
import { InputController } from '@/shared/components/input-controller'
import { KeyboardContainer } from '@/shared/components/keyboard-container'
import { router } from 'expo-router'
import type { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import type { useRegisterViewModel } from './use-register-view-model'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  errors,
}) => (
  <KeyboardContainer>
    <ScrollView className="flex-1 px-[40px]">
      <AuthFormHeader
        subtitle="Informe seus dados pessoais de acesso"
        title="Crie sua conta"
      />

      <InputController
        control={control}
        errors={errors}
        label="NOME"
        leftIcon="person-outline"
        name="name"
        placeholder="seu nome"
      />

      <InputController
        control={control}
        errors={errors}
        label="TELEFONE"
        leftIcon="call-outline"
        name="phone"
        placeholder="(99) 99999-9999"
      />

      <Text className="mt-6 font-bold text-base text-gray-500">Acesso</Text>

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

      <InputController
        control={control}
        errors={errors}
        label="CONFIRMAR SENHA"
        leftIcon="lock-closed-outline"
        name="confirmPassword"
        placeholder="confirme sua senha"
        secureTextEntry
      />

      <Button onPress={onSubmit}>Registrar</Button>

      <View className="mt-16">
        <Text className="mb-6 text-base text-gray-300">Já tem uma conta ?</Text>

        <Button onPress={() => router.push('/login')} variant="outline">
          Login
        </Button>
      </View>
    </ScrollView>
  </KeyboardContainer>
)
