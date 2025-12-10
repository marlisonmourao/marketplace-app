import type { ImagePickerOptions } from 'expo-image-picker'
import { useCallback, useState } from 'react'

import * as ImagePìcker from 'expo-image-picker'
import { Toast } from 'toastify-react-native'
import { Alert, Linking } from 'react-native'

export const useGalery = (pickerOptions: ImagePickerOptions) => {
  const [isLoading, setIsLoading] = useState(false)

  const requestGalleryPermission = useCallback(async () => {
    try {
      const { status } = await ImagePìcker.requestMediaLibraryPermissionsAsync()

      const currentStatus = status === 'granted'

      if (!currentStatus) {
        Alert.alert(
          'Permissão negada',
          'Precisamos da permissão para usar a galeria',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Abrir configurações',
              onPress: () => Linking.openSettings(),
            },
          ]
        )
        return false
      }

      return currentStatus
    } catch {
      Toast.error('Erro ao abrir a galeria', 'top')
      return false
    }
  }, [])

  const openGalery = useCallback(async () => {
    try {
      setIsLoading(true)

      const hasPermission = await requestGalleryPermission()

      if (!hasPermission) {
        return
      }

      const result = await ImagePìcker.launchImageLibraryAsync({
        ...pickerOptions,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success('Imagem selecionada com sucesso', 'top')
        return result.assets[0].uri
      }

      return null
    } catch {
      Toast.error('Erro ao abrir a galeria', 'top')
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    openGalery,
  }
}
