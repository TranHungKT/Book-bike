import React from 'react'
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useFormikContext } from 'formik'

// Components
import { BBackButton, BNextButton } from '@/Components'

// Styles
import styles from './Styles/GenderStyles'

// Language
import { translate } from '@/Language'

type Gender = {
  gender: boolean
}

const Gender = ({ ...childProps }) => {
  const { increasePhase, decreasePhase } = childProps

  const { setFieldValue } = useFormikContext<Gender>()

  const navigateFunc = () => {
    increasePhase()
  }

  const onValueChange = (itemValue: number) => {
    if (itemValue === 1) {
      setFieldValue('gender', true)
    } else {
      setFieldValue('gender', false)
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <BBackButton backFunc={decreasePhase} imageStyle={styles.imageStyle} />
      <KeyboardAvoidingView
        style={styles.contentWrapper}
        behavior={'padding'}
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'ios'}
      >
        <Text style={styles.textGender}>{translate('gender?')}</Text>

        <Picker style={styles.picker} onValueChange={onValueChange}>
          <Picker.Item label={translate('man')} value={1} />
          <Picker.Item label={translate('woman')} value={0} />
        </Picker>
      </KeyboardAvoidingView>
      <BNextButton navigateFunc={navigateFunc} />
    </SafeAreaView>
  )
}

export default Gender
