import React, { useEffect, useRef } from 'react'
import { Text, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { Formik } from 'formik'
import Toast from 'react-native-easy-toast'

// Navigation
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { ChangePasswordStackParams } from '@/Navigation/AppNavigationType'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import AuthActions from '@/Redux/AuthRedux'

// Components
import { BActivityIndicator, BBackButton, BButton, BToast } from '@/Components'
import BTextInput from '../SettingScreen/Components/BTextInput'

// Functions
import Validate from '@/Functions/Validates/ValidateNewPassword'

// Constants
import { errorAuthSignUp } from '@/Constants/ErrorNetworkConstants'

// Types
import { RootState } from '@/Types'

// Styles
import styles from './Styles/ChangePasswordScreenStyles'

// Language
import { translate } from '@/Language'

type RouteProps = RouteProp<ChangePasswordStackParams, 'ChangePasswordScreen'>

let isPressButton = false

const ConfirmUserNameScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const route = useRoute<RouteProps>()

  const { password } = route.params

  const { fetchingChangePassword, errorChangePassword } = useSelector(
    (state: RootState) => state.auth
  )

  const phoneNumber = useSelector(
    (state: RootState) => state.user.userDetail.phoneNumber
  )

  const refToast = useRef<Toast>(null)

  useEffect(() => {
    if (isPressButton && !fetchingChangePassword) {
      if (errorChangePassword) {
        switch (errorChangePassword) {
          case errorAuthSignUp.WEAK_PASSWORD:
            refToast.current?.show(translate('passwordWeak'), 2000)
            break
          case errorAuthSignUp.INVALID_OLD_PASSWORD:
            refToast.current?.show(translate('oldPasswordRont'))

          default:
            refToast.current?.show(translate('cannotChangePassword'), 2000)
            break
        }
      } else {
        refToast.current?.show(translate('changePasswordSuccess'), 1000)
        setTimeout(() => navigation.navigate('SettingScreen'), 1000)
      }

      isPressButton = false
    }
  }, [fetchingChangePassword, errorChangePassword])

  return (
    <SafeAreaView style={styles.container}>
      <BBackButton imageStyle={styles.imageStyle} />
      <Text style={styles.title}>{translate('newPassword')}</Text>
      <Text style={styles.require}>{translate('newPasswordRequire')}</Text>
      <KeyboardAvoidingView>
        <Formik
          initialValues={{
            password: 'Kaaa@m11e23f58Z!AV44!!',
            confirmPassword: 'Kaaa@m11e23f58Z!AV44!!'
          }}
          validationSchema={Validate}
          onSubmit={(values) => {
            isPressButton = true
            dispatch(
              AuthActions.changePasswordRequest(
                phoneNumber,
                password,
                values.password
              )
            )
          }}
        >
          {({ handleChange, values, errors, handleSubmit }) => (
            <>
              <BTextInput
                image={<></>}
                onChangeText={handleChange('password')}
                wrapperStyle={styles.wrapperStyle}
                error={errors.password}
                value={values.password}
                placeholder={'Password'}
              />
              <BTextInput
                image={<></>}
                onChangeText={handleChange('confirmPassword')}
                wrapperStyle={styles.confirm}
                error={errors.confirmPassword}
                value={values.confirmPassword}
                placeholder={'Confirm Password'}
              />
              <BButton
                content={'next'}
                buttonStyle={styles.buttonStyle}
                onPressButton={handleSubmit}
              />
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <BToast ref={refToast} />
      {fetchingChangePassword && <BActivityIndicator />}
    </SafeAreaView>
  )
}

export default ConfirmUserNameScreen
