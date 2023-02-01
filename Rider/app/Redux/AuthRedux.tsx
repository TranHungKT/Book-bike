import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types
import { AuthState } from '@/Types/RootState'

// Functions
import {
  setAsyncStorage,
  clearAsyncStorage
} from '@/Functions/AsyncStorageFunctions'

// Constants
import { REFRESH_TOKEN } from '@/Constants/AsyncStorageKey'
import { pathOr } from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signInRequest: ['userName', 'password'],
  signInSuccess: ['otpToken'],
  signInFailure: ['errorSignIn'],

  signUpRequest: ['registerDetail'],
  signUpSuccess: [''],
  signUpFailure: ['errorSignUp'],

  verifyRequest: ['userName', 'otpToken', 'otpCode'],
  verifySuccess: ['accessToken', 'refreshToken', 'isBiker'],
  verifyFailure: ['errorVerify'],

  refreshTokenRequest: ['userName', 'refreshToken'],
  refreshTokenSuccess: ['accessToken', 'refreshToken', 'isBiker'],
  refreshTokenFailure: ['errorRefreshToken'],

  signOut: [''],

  signUpDriverRequest: ['data'],
  signUpDriverSuccess: ['accessToken', 'refreshToken'],
  signUpDriverError: ['error'],

  setBaseInfor: ['data']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<AuthState> = Immutable({
  fetchingSignInRequest: false,
  errorSignIn: null,

  fetchingSignUpRequest: false,
  errorSignUp: null,
  otpToken: '',

  fetchingVerifyRequest: false,
  errorVerify: null,
  isBiker: null,

  fetchingRefreshToken: false,
  errorRefreshToken: null,

  accessToken: '',
  refreshToken: '',

  fetchingSignUpDriver: false,
  errorSignUpDriver: null,

  userName: '',
  fullName: '',
  type: 0
})

/* ------------- Reducers ------------- */
// Sign In
export const signInRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingSignInRequest: true, errorSignIn: null })

export const signInSuccess = (state = INITIAL_STATE, { otpToken }: any) =>
  state.merge({
    otpToken,
    fetchingSignInRequest: false,
    errorSignIn: null
  })

export const signInFailure = (state = INITIAL_STATE, { errorSignIn }: any) =>
  state.merge({
    fetchingSignInRequest: false,
    errorSignIn: errorSignIn
  })

// Sign Up
export const signUpRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingSignUpRequest: true, errorSignUp: null })
export const signUpSuccess = (state = INITIAL_STATE) =>
  state.merge({
    fetchingSignUpRequest: false,
    errorSignUp: null
  })
export const signUpFailure = (state = INITIAL_STATE, { errorSignUp }: any) =>
  state.merge({
    fetchingSignUpRequest: false,
    errorSignUp: errorSignUp
  })

// Verify
export const verifyRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingVerifyRequest: true, errorVerify: null })
export const verifySuccess = (
  state = INITIAL_STATE,
  { accessToken, refreshToken, isBiker }: any
) => {
  if (isBiker) {
    setAsyncStorage(REFRESH_TOKEN, refreshToken)
  }
  return state.merge({
    accessToken,
    refreshToken,
    fetchingVerifyRequest: false,
    errorVerify: null,
    isBiker
  })
}
export const verifyFailure = (state = INITIAL_STATE, { errorVerify }: any) =>
  state.merge({ fetchingVerifyRequest: false, errorVerify })

// Refresh
export const refreshTokenRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingRefreshToken: true, errorRefreshToken: null })
export const refreshTokenSuccess = (
  state = INITIAL_STATE,
  { accessToken, refreshToken, isBiker }: any
) => {
  if (isBiker) {
    setAsyncStorage(REFRESH_TOKEN, refreshToken)
  }
  return state.merge({
    accessToken,
    refreshToken,
    fetchingVerifyRequest: false,
    errorVerify: null,
    isBiker
  })
}
export const refreshTokenFailure = (
  state = INITIAL_STATE,
  { errorRefreshToken }: any
) => state.merge({ fetchingRefreshToken: false, errorRefreshToken })

// Sign out
export const signOut = (state = INITIAL_STATE) => {
  clearAsyncStorage()
  return state.merge({
    accessToken: '',
    refreshToken: '',
    otpToken: '',
    isBiker: false
  })
}

// Sign up driver
export const signUpDriverRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingSignUpDriver: true, errorSignUpDriver: null })
export const signUpDriverSuccess = (
  state = INITIAL_STATE,
  { accessToken, refreshToken }: any
) => {
  setAsyncStorage(REFRESH_TOKEN, refreshToken)
  return state.merge({
    fetchingSignUpDriver: false,
    errorSignUpDriver: null,
    accessToken,
    refreshToken
  })
}
export const signUpDriverError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({
    fetchingSignUpDriver: false,
    errorSignUpDriver: error
  })

export const setBaseInfor = (state = INITIAL_STATE, { data }: any) =>
  state.merge({
    fullName: data.fullName,
    userName: data.userName,
    type: data.type
  })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,

  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,

  [Types.VERIFY_REQUEST]: verifyRequest,
  [Types.VERIFY_SUCCESS]: verifySuccess,
  [Types.VERIFY_FAILURE]: verifyFailure,

  [Types.REFRESH_TOKEN_REQUEST]: refreshTokenRequest,
  [Types.REFRESH_TOKEN_SUCCESS]: refreshTokenSuccess,
  [Types.REFRESH_TOKEN_FAILURE]: refreshTokenFailure,

  [Types.SIGN_OUT]: signOut,

  [Types.SIGN_UP_DRIVER_REQUEST]: signUpDriverRequest,
  [Types.SIGN_UP_DRIVER_SUCCESS]: signUpDriverSuccess,
  [Types.SIGN_UP_DRIVER_ERROR]: signUpDriverError,

  [Types.SET_BASE_INFOR]: setBaseInfor
})

export const getAccessToken = (state: any) =>
  pathOr(null, ['accessToken'], state)
