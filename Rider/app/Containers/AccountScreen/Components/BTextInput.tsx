import React, { forwardRef, FC, Ref } from 'react'
import { View, TextInput, TextInputProps, ViewStyle } from 'react-native'

// Styles
import styles from './Styles/BTextInputStyles'

interface BTextInputProps extends TextInputProps {
  ref?: Ref<TextInput>
  image: Element
  wrapperStyle?: ViewStyle
}

const BTextInput: FC<BTextInputProps> = forwardRef((props, ref) => {
  return (
    <View style={[styles.container, props.wrapperStyle]}>
      {props.image}
      <TextInput ref={ref} {...props} style={styles.textInput} />
    </View>
  )
})

export default BTextInput
