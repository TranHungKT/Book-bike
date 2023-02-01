import React, { memo } from 'react'
import { Platform } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

const BKeyboardSpacer = () => {
  if (Platform.OS === 'ios') {
    return <KeyboardSpacer />
  }
  return null
}

export default memo(BKeyboardSpacer)
