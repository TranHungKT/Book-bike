import { Alert } from 'react-native'

// Language
import { translate } from '@/Language'

type RAlertType = {
  title: string
  content: string
  onPressOK: () => void
  onPressCancel?: () => void
  cancelable?: boolean
}

export const RAlert = (props: RAlertType) => {
  const { title, content, onPressOK, onPressCancel, cancelable } = props
  return Alert.alert(
    title,
    content,
    [
      {
        text: translate('cancel'),
        onPress: onPressCancel
      },
      {
        text: translate('ok'),
        onPress: onPressOK
      }
    ],
    { cancelable }
  )
}

export const confirmAlert = (props: RAlertType) => {
  const { title, content, onPressOK } = props
  return Alert.alert(title, content, [
    {
      text: translate('ok'),
      onPress: onPressOK
    }
  ])
}
