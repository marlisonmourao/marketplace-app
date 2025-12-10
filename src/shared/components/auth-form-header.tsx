import { Image, Text, View } from 'react-native'

type AuthFormHeader = {
  title: string
  subtitle: string
}

export function AuthFormHeader({ title, subtitle }: AuthFormHeader) {
  return (
    <View className="mb-8 items-center">
      <Image
        className="mb-8 h-[60px] w-[80px]"
        resizeMode="contain"
        source={require('@/assets/images/logo.png')}
      />

      <Text className="mb-3 font-bold text-3xl text-gray-500">{title}</Text>
      <Text className="text-center text-base text-gray-300">{subtitle}</Text>
    </View>
  )
}
