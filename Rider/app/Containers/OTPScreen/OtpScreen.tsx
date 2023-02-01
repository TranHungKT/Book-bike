import React, { useState, useEffect } from 'react'
import { Text, KeyboardAvoidingView, Platform, View } from 'react-native'
import OtpInputs from 'react-native-otp-inputs'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '@/Navigation/AppNavigationType'
import { MainScreens, AppStacks } from '@/Constants/AppNavigationConstants'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/Types/RootState'
import AuthActions from '@/Redux/AuthRedux'

// Components
import { BActivityIndicator, BBackButton, BButton } from '@/Components'
import { TimeOut } from '../SignUpScreen/Components'

// Functions
import { confirmAlert } from '@/Functions/AlertFunctions'

// Styles
import styles from './Styles/OtpScreenSignUpStyles'

// Language
import { translate } from '@/Language'

type NavigationProp = StackNavigationProp<RootStackParams, AppStacks.AuthStack>

let isVerify = false
const OTPScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  const dispatch = useDispatch()

  const [otpCode, setOtpCode] = useState('')

  const { userName, otpToken, fetchingVerifyRequest, errorVerify, isBiker } =
    useSelector((state: RootState) => state.auth)

  const handleChangeCode = (code: string) => setOtpCode(code)

  const verify = () => {
    dispatch(AuthActions.verifyRequest(userName, otpToken, otpCode))
    isVerify = true
  }

  const navigateToHomeScreen = () =>
    navigation.reset({
      index: 0,
      routes: [
        {
          name: AppStacks.MainStack,
          params: { screen: MainScreens.HomeScreen }
        }
      ]
    })

  const navigateToSignUpDriver = () =>
    navigation.reset({
      index: 0,
      routes: [
        {
          name: AppStacks.AuthStack,
          params: { screen: 'SignUpDriver' }
        }
      ]
    })

  useEffect(() => {
    if (!fetchingVerifyRequest && isVerify) {
      if (errorVerify) {
        confirmAlert({
          title: translate('OTPError'),
          content: translate('RontOTP'),
          onPressOK: () => {}
        })
        return
      } else {
        if (isBiker) {
          navigateToHomeScreen()
        } else {
          navigateToSignUpDriver()
        }
      }
      isVerify = false
    }
  }, [fetchingVerifyRequest, errorVerify, isVerify])

  return (
    <>
      <KeyboardAvoidingView
        style={styles.contentWrapper}
        behavior={'padding'}
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'ios'}
      >
        <View style={styles.container}>
          <BBackButton imageStyle={styles.imageStyle} />
          <Text style={styles.textTitle}>{translate('verificationCode')}</Text>
          <Text style={styles.textDes}>
            {translate('pleaseEnterCode')} {userName}
          </Text>
          <View style={styles.timeOut}>
            <TimeOut />
          </View>
          <OtpInputs
            handleChange={handleChangeCode}
            numberOfInputs={6}
            autofillFromClipboard={false}
            style={styles.codeView}
            inputContainerStyles={styles.inputContainer}
            inputStyles={styles.input}
          />
          <BButton
            content={'Next'}
            buttonStyle={styles.nextButton}
            disable={otpCode.length !== 6 ? true : false}
            onPressButton={verify}
          />
        </View>
      </KeyboardAvoidingView>

      {fetchingVerifyRequest && <BActivityIndicator />}
    </>
  )
}

export default OTPScreen
