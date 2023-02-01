import React, { FC, memo, Ref, forwardRef } from 'react'
import {
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputProps,
  TextInput,
  Text
} from 'react-native'

// Styles
import styles from './Styles/BLabelTextInputStyles'
import { Colors } from '@/Themes'

// Functions
import { isEmpty } from '@/Functions/ValidateFunctions'

// Language
import { translate } from '@/Language'

interface BLabelTextInputProps extends TextInputProps {
  ref?: Ref<TextInput>
  label: string
  wrapperStyle?: StyleProp<ViewStyle>
  textInputStyle?: StyleProp<TextStyle>
  errorMessage?: string
  errorTextStyle?: StyleProp<TextStyle>
  isRequired?: boolean
}

const BLabelTextInput: FC<BLabelTextInputProps> = forwardRef((props, ref) => {
  const {
    label,
    wrapperStyle,
    textInputStyle,
    errorMessage = '',
    errorTextStyle,
    numberOfLines = 1,
    blurOnSubmit = false,
    isRequired
  } = props
  return (
    <View style={[styles.inputContainer, wrapperStyle]}>
      <View style={styles.rowView}>
        <Text style={styles.label}>{label}</Text>
        {isRequired && <Text style={styles.textStar}>*</Text>}
      </View>

      <TextInput
        ref={ref}
        {...props}
        numberOfLines={numberOfLines}
        blurOnSubmit={blurOnSubmit}
        placeholderTextColor={Colors.black50}
        style={[styles.textInput, textInputStyle]}
      />
      {!isEmpty(errorMessage) && (
        <Text style={[styles.errorMessage, errorTextStyle]} numberOfLines={2}>
          {translate(errorMessage)}
        </Text>
      )}
    </View>
  )
})

export default memo(BLabelTextInput)
