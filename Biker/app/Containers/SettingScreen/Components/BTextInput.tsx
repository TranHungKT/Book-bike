import React, { forwardRef, FC, Ref } from 'react'
import { View, TextInput, TextInputProps, ViewStyle, Text } from 'react-native'

// Styles
import styles from './Styles/BTextInputStyles'

// Language
import { translate } from '@/Language'

interface BTextInputProps extends TextInputProps {
  ref?: Ref<TextInput>
  image: Element
  wrapperStyle?: ViewStyle
  error?: string
}

const BTextInput: FC<BTextInputProps> = forwardRef((props, ref) => {
  return (
    <>
      <View style={[styles.container, props.wrapperStyle]}>
        {props.image}
        <TextInput ref={ref} {...props} style={styles.textInput} />
      </View>
      {props.error && (
        <Text style={styles.error}>{translate(props.error)}</Text>
      )}
    </>
  )
})

export default BTextInput
