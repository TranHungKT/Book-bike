import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import AuthActions from '@/Redux/AuthRedux'
import { RootState, RegisterType } from '@/Types'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParams } from '@/Navigation/AppNavigationType'
import { AuthScreens } from '@/Constants/AppNavigationConstants'

// Components
import RenderPhase from './Components/RenderPhase'
import { BActivityIndicator } from '@/Components'

// Functions
import ValidateSchema from '@/Functions/Validates/ValidateSignUp'
import { confirmAlert } from '@/Functions/AlertFunctions'

// Constants
import { errorAuthSignUp } from '@/Constants/ErrorNetworkConstants'
import { translate } from '@/Language'

let isSignUp = false

type SignUpScreenNavigationProps = StackNavigationProp<
  AuthStackParams,
  AuthScreens.SignUpScreen
>

type Values = {
  email: string
  password: string
  firstName: string
  lastName: string
  phoneNumber: string
  gender: boolean
  dateOfBirth: string
  address: string
}

const SignUpScreen = () => {
  const dispatch = useDispatch()

  const navigation = useNavigation<SignUpScreenNavigationProps>()

  const authState = useSelector((state: RootState) => state.auth)

  const { fetchingSignUpRequest, errorSignUp } = authState

  const [phase, setPhase] = useState(0)

  const dateOfBirth = new Date('1999-08-30').toISOString().substr(0, 10)

  const increasePhase = () => setPhase(phase + 1)

  const decreasePhase = () => setPhase(phase - 1)

  const handleSignUp = async (values: Values) => {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      gender,
      dateOfBirth,
      address
    } = values
    const registerDetail: RegisterType = {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      gender,
      dateOfBirth,
      address
    }

    isSignUp = true
    dispatch(AuthActions.signUpRequest(registerDetail))
  }

  const navigateToSignInScreen = () => {
    navigation.reset({
      index: 1,
      routeNames: ['AuthScreen', 'SignInScreen'],
      routes: [
        {
          name: 'AuthScreen'
        },
        {
          name: 'SignInScreen'
        }
      ]
    })
  }

  useEffect(() => {
    if (isSignUp && !fetchingSignUpRequest) {
      if (errorSignUp) {
        confirmAlert({
          title: 'Lỗi đăng ký',
          content: errorSignUp,
          onPressOK: () => {}
        })

        setPhase(0)
        return
      } else {
        navigateToSignInScreen()
      }
      isSignUp = false
    }
  }, [fetchingSignUpRequest, errorSignUp, isSignUp])

  return (
    <>
      <Formik
        initialValues={{
          email: 'tranhieu2761@gmail.com',
          lastName: 'Tran',
          firstName: 'Dong',
          password: 'Kaaa@m11e23f58Z!AV44!!',
          gender: false,
          dateOfBirth,
          address: '123 Tran Phu',
          phoneNumber: '0987827612'
        }}
        validationSchema={ValidateSchema}
        onSubmit={(values) => {
          handleSignUp(values)
        }}
      >
        <RenderPhase
          phase={phase}
          increasePhase={increasePhase}
          decreasePhase={decreasePhase}
        />
      </Formik>
      {fetchingSignUpRequest && <BActivityIndicator />}
    </>
  )
}

export default SignUpScreen
