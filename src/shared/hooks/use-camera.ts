import { useCallback, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Toast } from 'toastify-react-native'

export const useCamera = (pickerOptions: ImagePicker.ImagePickerOptions) => {
  const [isLoading, setIsLoading] = useState(false)

  const requestCameraPermission = useCallback(async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync()

      const currentStatus = status === 'granted'

      if (!currentStatus) {
        Toast.error('Precisamos da permissão para usar a câmera', 'top')
      }

      return currentStatus
    } catch {
      return false
    }
  }, [])

  const openCamera = useCallback(async (): Promise<string | null> => {
    setIsLoading(true)
    try {
      const hasPermission = await requestCameraPermission()

      if (!hasPermission) {
        return null
      }

      const result = await ImagePicker.launchCameraAsync({
        ...pickerOptions,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success('Imagem capturada com sucesso', 'top')
        return result.assets[0].uri
      }

      return null
    } catch {
      Toast.error('Erro ao abrir a câmera', 'top')
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    requestCameraPermission,
    openCamera,
    isLoading,
  }
}
