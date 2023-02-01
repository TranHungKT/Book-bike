import React, { useRef } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Text,
  View
} from 'react-native'
import { useFormikContext } from 'formik'

// Components
import { BBackButton, BLabelTextInput, BNextButton } from '@/Components'

// Functions
import { refTextInputFocus } from '@/Functions/RefFunctions'
import { isEmpty } from '@/Functions/ValidateFunctions'

// Styles
import styles from './Styles/NamePhoneSignUpStyles'

// Language
import { translate } from '@/Language'

type NamePhone = {
  email: string
  password: string
  phoneNumber: string
}

const NamePhoneSignUp = ({ ...childProps }) => {
  const { increasePhase } = childProps

  const {
    values,
    errors,
    validateForm,
    handleChange
  } = useFormikContext<NamePhone>()

  const emailRef = useRef<TextInput>(null)
  const phoneNumberRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)

  const onEmailSubmitEditing = () => refTextInputFocus(phoneNumberRef)
  const onPhoneNumberSubmitEditing = () => refTextInputFocus(passwordRef)
  const onPasswordSubmitEditing = () => navigateFunc()

  const validateFunction = () => {
    const { phoneNumber, email, password } = values

    if (
      !!errors.email ||
      !!errors.phoneNumber ||
      !!errors.password ||
      isEmpty(phoneNumber) ||
      isEmpty(email) ||
      isEmpty(password)
    ) {
      return false
    }
    return true
  }

  const navigateFunc = () => {
    if (!validateFunction()) {
      validateForm(values)
      return
    }
    increasePhase()
  }

  return (
    <>
      <KeyboardAvoidingView
        style={styles.contentWrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <BBackButton
          wrapperStyle={styles.backButton}
          imageStyle={styles.imageStyle}
        />

        <Text style={styles.signUpText}>{translate('SignUp')}</Text>
        <Text style={styles.enterInforText}>
          {translate('pleaseEnterInforBelow')}
        </Text>
        <BLabelTextInput
          value={values.email}
          ref={emailRef}
          label={translate('email')}
          placeholder={translate('exampleEmail')}
          wrapperStyle={styles.textInput}
          errorMessage={errors.email}
          isRequired
          returnKeyType={'next'}
          onChangeText={handleChange('email')}
          onSubmitEditing={onEmailSubmitEditing}
        />
        <BLabelTextInput
          value={values.phoneNumber}
          ref={phoneNumberRef}
          label={translate('phoneNumber')}
          placeholder={'012345679'}
          wrapperStyle={styles.textInput}
          errorMessage={errors.phoneNumber}
          isRequired
          returnKeyType={'next'}
          keyboardType={'number-pad'}
          onChangeText={handleChange('phoneNumber')}
          onSubmitEditing={onPhoneNumberSubmitEditing}
        />
        <BLabelTextInput
          value={values.password}
          ref={passwordRef}
          label={translate('password')}
          wrapperStyle={styles.textInput}
          errorMessage={errors.password}
          isRequired
          returnKeyType={'done'}
          onChangeText={handleChange('password')}
          onSubmitEditing={onPasswordSubmitEditing}
          secureTextEntry
        />
        <View style={styles.blankView} />
      </KeyboardAvoidingView>

      <BNextButton navigateFunc={navigateFunc} />
    </>
  )
}

export default NamePhoneSignUp
