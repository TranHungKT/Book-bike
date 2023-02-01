import React, { useEffect, useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
  TextInput,
  Keyboard,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Formik } from 'formik'
import messaging from '@react-native-firebase/messaging'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthStackParams } from '@/Navigation/AppNavigationType'
import { AuthScreens } from '@/Constants/AppNavigationConstants'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import AuthActions from '@/Redux/AuthRedux'
import { RootState } from '@/Types'

// Components
import {
  BLabelTextInput,
  BButton,
  BActivityIndicator,
  BBackButton
} from '@/Components'

// Functions
import { refTextInputFocus } from '@/Functions/RefFunctions'
import ValidateSignIn from '@/Functions/Validates/ValidateSignIn'
import { confirmAlert } from '@/Functions/AlertFunctions'

// Styles
import styles from './Styles/SignInScreenStyles'

// Language
import { translate } from '@/Language'

type SignInScreenNavigationProp = StackNavigationProp<
  AuthStackParams,
  AuthScreens.SignInScreen
>

type Value = {
  userName: string
  password: string
}

let isSignIn = false
const SignInScreen = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>()
  const dispatch = useDispatch()

  const [tempUserName, setTempUserName] = useState('')

  const { fetchingSignInRequest, errorSignIn } = useSelector(
    (state: RootState) => state.auth
  )

  const passwordRef = useRef<TextInput>(null)

  const onPhoneNumberSubmitEditing = () => refTextInputFocus(passwordRef)

  const onPressSignInButton = (values: Value) => {
    Keyboard.dismiss()
    const { userName, password } = values
    dispatch(AuthActions.signInRequest(userName, password))
    setTempUserName(userName)
    isSignIn = true
  }

  const navigateToOTPScreen = () =>
    navigation.navigate(AuthScreens.OTPScreen, {
      userName: tempUserName
    })

  const navigateToForgotPassword = () =>
    navigation.navigate(AuthScreens.ForgotPasswordScreen)

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    ;(async () => {
      const authStatus = await messaging().requestPermission()
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL
      if (!enabled) {
        return
      }
      const fcmToken = await messaging().getToken()
      if (!fcmToken) {
        return
      }
      messaging().onMessage(async (remoteMessage) => {
        Alert.alert('A message', JSON.stringify(remoteMessage))
      })
    })()
  })

  useEffect(() => {
    if (!fetchingSignInRequest && isSignIn) {
      isSignIn = false
      if (!!errorSignIn) {
        return confirmAlert({
          title: 'Lỗi đăng nhập',
          content: errorSignIn,
          onPressOK: () => {}
        })
      }
      navigateToOTPScreen()
    }
  }, [isSignIn, fetchingSignInRequest, errorSignIn])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        style={styles.contentWrapper}
        behavior={'padding'}
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'ios'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <BBackButton
            wrapperStyle={styles.bBackButton}
            imageStyle={styles.imageStyle}
          />
          <Text style={styles.signInText}>{translate('signIn')}</Text>
          <Formik
            initialValues={{
              userName: '0971126179',
              password: 'Kaaa@m11e23f58Z!AV44!!'
            }}
            onSubmit={(values) => onPressSignInButton(values)}
            validationSchema={ValidateSignIn}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <>
                <BLabelTextInput
                  value={values.userName}
                  label={translate('userName')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.userName}
                  isRequired
                  returnKeyType={'next'}
                  keyboardType={'number-pad'}
                  onChangeText={handleChange('userName')}
                  onSubmitEditing={onPhoneNumberSubmitEditing}
                />
                <BLabelTextInput
                  ref={passwordRef}
                  value={values.password}
                  label={translate('password')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.password}
                  isRequired
                  secureTextEntry
                  returnKeyType={'done'}
                  onChangeText={handleChange('password')}
                />
                <BButton
                  content={translate('SignIn')}
                  buttonStyle={styles.buttonStyle}
                  onPressButton={handleSubmit}
                />
                <TouchableOpacity
                  onPress={navigateToForgotPassword}
                  style={styles.forgotPasswordButton}
                >
                  <Text style={styles.forgotPassword}>
                    {translate('forgotPassword').toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
      {fetchingSignInRequest && <BActivityIndicator />}
    </SafeAreaView>
  )
}

export default SignInScreen
