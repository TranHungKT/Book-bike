import React, { useRef } from 'react'
import {
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput
} from 'react-native'
import { useFormikContext } from 'formik'

// Components
import { BBackButton, BLabelTextInput, BNextButton } from '@/Components'

// Functions
import { refTextInputFocus } from '@/Functions/RefFunctions'
import { isEmpty } from '@/Functions/ValidateFunctions'

// Styles
import styles from './Styles/NameSignUpStyles'

import { translate } from '@/Language'

type NameSignUp = {
  firstName: string
  lastName: string
}

const NameSignUp = ({ ...childProps }) => {
  const { increasePhase, decreasePhase } = childProps

  const { values, errors, handleChange } = useFormikContext<NameSignUp>()

  const FirstNameRef = useRef<TextInput>(null)
  const LastNameRef = useRef<TextInput>(null)

  const onFirstNameSubmitEditing = () => refTextInputFocus(LastNameRef)
  const onLastNameSubmitEditing = () => navigateFunc()

  const validateFunction = () => {
    const { firstName, lastName } = values
    if (
      !!errors.firstName ||
      !!errors.lastName ||
      isEmpty(lastName) ||
      isEmpty(firstName)
    ) {
      return false
    }
    return true
  }

  const navigateFunc = () => {
    if (!validateFunction()) {
      return
    }

    increasePhase()
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.smallView}>
        <BBackButton backFunc={decreasePhase} imageStyle={styles.imageStyle} />
      </View>
      <KeyboardAvoidingView
        style={styles.contentWrapper}
        behavior={'padding'}
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'ios'}
      >
        <View style={styles.titleView}>
          <Text style={styles.name}>{translate('name?')}</Text>
          {!validateFunction() && (
            <Text style={styles.error}>{translate('nameRequired')}</Text>
          )}
        </View>
        <View style={styles.nameView}>
          <BLabelTextInput
            value={values.firstName}
            ref={FirstNameRef}
            label={translate('firstName')}
            placeholder={translate('exampleFirstName')}
            wrapperStyle={styles.wrapperStyle}
            isRequired
            returnKeyType={'next'}
            onChangeText={handleChange('firstName')}
            onSubmitEditing={onFirstNameSubmitEditing}
          />
          <BLabelTextInput
            value={values.lastName}
            ref={LastNameRef}
            label={translate('lastName')}
            placeholder={translate('exampleLastName')}
            wrapperStyle={styles.wrapperStyle}
            isRequired
            returnKeyType={'done'}
            onChangeText={handleChange('lastName')}
            onSubmitEditing={onLastNameSubmitEditing}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.smallView}>
        <BNextButton
          navigateFunc={navigateFunc}
          wrapperStyle={styles.wrapperStyleNext}
        />
      </View>
    </SafeAreaView>
  )
}

export default NameSignUp
