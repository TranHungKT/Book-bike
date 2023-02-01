import React, { useState, useEffect } from 'react'
import { Text, KeyboardAvoidingView, Platform, View } from 'react-native'
import OtpInputs from 'react-native-otp-inputs'

// Navigation
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  AuthStackParams,
  RootStackParams
} from '@/Navigation/AppNavigationType'
import { AuthScreens, AppStacks } from '@/Constants/AppNavigationConstants'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/Types/RootState'
import AuthActions from '@/Redux/AuthRedux'

// Components
import { BActivityIndicator, BBackButton, BButton } from '@/Components'
import { TimeOut } from '../SignUpScreen/Components'

// Functions
import { confirmAlert } from '@/Functions/AlertFunctions'
import { setAsyncStorage } from '@/Functions/AsyncStorageFunctions'

// Constants
import { USER_NAME } from '@/Constants/AsyncStorageKey'

// Styles
import styles from './Styles/OtpScreenSignUpStyles'

// Language
import { translate } from '@/Language'

type RouteProps = RouteProp<AuthStackParams, AuthScreens.OTPScreen>

type NavigationProp = StackNavigationProp<RootStackParams, AppStacks.AuthStack>

let isVerify = false
const OTPScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const route = useRoute<RouteProps>()
  const { userName } = route.params
  const dispatch = useDispatch()

  const [otpCode, setOtpCode] = useState('')

  const { otpToken, fetchingVerifyRequest, errorVerify } = useSelector(
    (state: RootState) => state.auth
  )

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
          name: AppStacks.BookingStack,
          params: { screen: 'DashboardScreen' }
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
      }
      setAsyncStorage(USER_NAME, userName)
      navigateToHomeScreen()
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
