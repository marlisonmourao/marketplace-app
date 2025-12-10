import type { ImagePickerOptions } from 'expo-image-picker'
import { useCamera } from './use-camera'
import { useGalery } from './use-galery'
import { useModal } from './use-modal'

export function useImage(pickerOptions: ImagePickerOptions) {
  const { openCamera, isLoading: isLoadingCamera } = useCamera(pickerOptions)
  const { openGalery, isLoading: isLoadingGalery } = useGalery(pickerOptions)
  const modals = useModal()

  function handleSelectImage() {
    modals.showSelection({
      title: 'Selecionar foto',
      message: 'Escolha uma opção',
      options: [
        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: () => openCamera(),
        },
        {
          text: 'Galeria',
          icon: 'images-outline',
          variant: 'primary',
          onPress: () => openGalery(),
        },
      ],
    })
  }

  return { handleSelectImage, isLoading: isLoadingCamera || isLoadingGalery }
}
