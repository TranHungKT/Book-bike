import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { pathOr } from 'ramda'
// Types
import { AuthState } from '@/Types/RootState'

// Functions
import {
  clearAsyncStorage,
  setAsyncStorage
} from '@/Functions/AsyncStorageFunctions'

// Constants
import { REFRESH_TOKEN } from '@/Constants/AsyncStorageKey'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signInRequest: ['userName', 'password'],
  signInSuccess: ['otpToken'],
  signInFailure: ['errorSignIn'],

  signUpRequest: ['registerDetail'],
  signUpSuccess: [''],
  signUpFailure: ['errorSignUp'],

  verifyRequest: ['userName', 'otpToken', 'otpCode'],
  verifySuccess: ['userName', 'accessToken', 'refreshToken'],
  verifyFailure: ['errorVerify'],

  refreshTokenRequest: ['userName', 'refreshToken'],
  refreshTokenSuccess: ['userName', 'accessToken', 'refreshToken'],
  refreshTokenFailure: ['errorRefreshToken'],

  changePasswordRequest: ['phoneNumber', 'password', 'newPassword'],
  changePasswordSuccess: [''],
  changePasswordFailure: ['errorChangePassword'],

  signOut: ['']
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

  fetchingRefreshToken: false,
  errorRefreshToken: null,

  fetchingChangePassword: false,
  errorChangePassword: null,

  accessToken: '',
  refreshToken: '',
  userName: ''
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
  { userName, accessToken, refreshToken }: any
) => {
  setAsyncStorage(REFRESH_TOKEN, refreshToken)
  return state.merge({
    userName,
    accessToken,
    refreshToken,
    fetchingVerifyRequest: false,
    errorVerify: null
  })
}
export const verifyFailure = (state = INITIAL_STATE, { errorVerify }: any) =>
  state.merge({ fetchingVerifyRequest: false, errorVerify })

// Refresh
export const refreshTokenRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingRefreshToken: true, errorRefreshToken: null })
export const refreshTokenSuccess = (
  state = INITIAL_STATE,
  { userName, accessToken, refreshToken }: any
) => {
  setAsyncStorage(REFRESH_TOKEN, refreshToken)
  return state.merge({
    userName,
    accessToken,
    refreshToken,
    fetchingVerifyRequest: false,
    errorVerify: null
  })
}
export const refreshTokenFailure = (
  state = INITIAL_STATE,
  { errorRefreshToken }: any
) => state.merge({ fetchingRefreshToken: false, errorRefreshToken })

// Change password
export const changePasswordRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingChangePassword: true, errorChangePassword: null })
export const changePasswordSuccess = (
  state = INITIAL_STATE,
  { userName, accessToken, refreshToken }: any
) => state.merge({ fetchingChangePassword: false, errorChangePassword: null })

export const changePasswordFailure = (
  state = INITIAL_STATE,
  { errorChangePassword }: any
) => state.merge({ fetchingChangePassword: false, errorChangePassword })

// Sign out
export const signOut = (state = INITIAL_STATE) => {
  clearAsyncStorage()
  return state.merge({ accessToken: '', refreshToken: '' })
}

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

  [Types.CHANGE_PASSWORD_REQUEST]: changePasswordRequest,
  [Types.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [Types.CHANGE_PASSWORD_FAILURE]: changePasswordFailure,

  [Types.SIGN_OUT]: signOut
})

// Selector
export const getAccessToken = (state: any) =>
  pathOr(null, ['accessToken'], state)
export const getRefreshToken = (state: any) =>
  pathOr(null, ['refreshToken'], state)
