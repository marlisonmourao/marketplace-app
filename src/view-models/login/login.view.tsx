import { AuthFormHeader } from '@/shared/components/auth-form-header'
import { Button } from '@/shared/components/button'
import { InputController } from '@/shared/components/input-controller'
import { KeyboardContainer } from '@/shared/components/keyboard-container'
import { router } from 'expo-router'
import type { FC } from 'react'
import { Text, View } from 'react-native'
import type { useLoginViewModel } from './use-login.view-model'

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => (
  <KeyboardContainer>
    <View className="flex-1 items-center justify-center px-[40px]">
      <View className="w-full flex-1 items-center justify-center">
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

        <Button className="mt-6" onPress={onSubmit} rightIcon="arrow-forward">
          Entrar
        </Button>
      </View>

      <View className="flex-2 pb-16">
        <Text className="mb-6 text-base text-gray-300">
          Ainda não tem uma conta?
        </Text>

        <Button
          className="mb-6"
          onPress={() => router.push('/register')}
          rightIcon="arrow-forward"
          variant="outline"
        >
          Registro
        </Button>
      </View>
    </View>
  </KeyboardContainer>
)
