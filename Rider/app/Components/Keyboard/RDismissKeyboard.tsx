import React, { memo, ReactNode } from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

interface RDismissKeyboardProps {
  children: ReactNode
}

const RDismissKeyboard = ({ children }: RDismissKeyboardProps) => {
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

export default memo(RDismissKeyboard)
