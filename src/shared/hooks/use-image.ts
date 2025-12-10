import type { ImagePickerOptions } from 'expo-image-picker'
import { useCamera } from './use-camera'
import { useGalery } from './use-galery'
import { useModal } from './use-modal'
import { useModalStore } from '../storage/modal-store'

type UseImageParams = ImagePickerOptions & {
  callback: (uri: string | null | undefined) => void
}

export function useImage({ callback, ...pickerOptions }: UseImageParams) {
  const { openCamera, isLoading: isLoadingCamera } = useCamera(pickerOptions)
  const { openGalery, isLoading: isLoadingGalery } = useGalery(pickerOptions)
  const modals = useModal()

  const { close } = useModalStore()

  function handleCallback(uri: string | null | undefined) {
    close()
    callback(uri)
  }

  function handleSelectImage() {
    modals.showSelection({
      title: 'Selecionar foto',
      message: 'Escolha uma opção',
      options: [
        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: async () => {
            const uri = await openCamera()
            handleCallback(uri)
          },
        },
        {
          text: 'Galeria',
          icon: 'images-outline',
          variant: 'primary',
          onPress: async () => {
            const uri = await openGalery()
            handleCallback(uri)
          },
        },
      ],
    })
  }

  return { handleSelectImage, isLoading: isLoadingCamera || isLoadingGalery }
}
