import { Modal as AppModal, TouchableWithoutFeedback, View } from 'react-native'
import { useModalStore } from '@/shared/storage/modal-store'

export function Modal() {
  const { isOpen, content, config, close } = useModalStore()

  if (!(isOpen && config)) {
    return null
  }

  return (
    <AppModal
      animationType={config.animationType}
      onRequestClose={close}
      statusBarTranslucent={config.statusBarTranslucent}
      transparent={config.transparent}
      visible={isOpen}
    >
      <TouchableWithoutFeedback onPress={close}>
        <View className="flex-1 items-center justify-center bg-black/50 px-6">
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View>{content}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </AppModal>
  )
}
