import React, { memo, ReactNode } from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

interface BDismissKeyboardProps {
  children: ReactNode
}

const YDismissKeyboard = ({ children }: BDismissKeyboardProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.wrapper}>{children}</View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export default memo(YDismissKeyboard)
