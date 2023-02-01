import { UserState } from '@/Types'
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { pathOr } from 'ramda'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getUserDataRequest: [''],
  getUserDataSuccess: ['userDetail'],
  getUserDataError: ['error'],

  updateUserDataRequest: ['newUserData'],
  updateUserDataSuccess: [''],
  updateUserDataError: ['error'],

  setUserAgent: ['userAgent']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<UserState> = Immutable({
  fetchingGetUserDetail: false,
  errorGetUserDetail: null,

  userDetail: {
    accountUsername: '',
    address: '',
    dateOfBirth: '',
    firstName: '',
    gender: true,
    lastName: '',
    phoneNumber: '',
    createdDate: '',
    totalTripRider: 0,
    totalTripCustomer: 0
  },

  userAgent: ''
})

/* ------------- Reducers ------------- */

// Set phase rider
export const getUserDataRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingGetUserDetail: true, errorGetUserDetail: null })
export const getUserDataSuccess = (
  state = INITIAL_STATE,
  { userDetail }: any
) =>
  state.merge({
    fetchingGetUserDetail: false,
    errorGetUserDetail: null,
    userDetail
  })
export const getUserDataError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ fetchingGetUserDetail: false, errorGetUserDetail: error })

export const updateUserDataRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingGetUserDetail: true, errorGetUserDetail: null })
export const updateUserDataSuccess = (state = INITIAL_STATE) =>
  state.merge({ fetchingGetUserDetail: false, errorGetUserDetail: null })
export const updateUserDataError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ fetchingGetUserDetail: false, errorGetUserDetail: error })

export const setUserAgent = (state = INITIAL_STATE, { userAgent }: any) =>
  state.merge({ userAgent })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USER_DATA_REQUEST]: getUserDataRequest,
  [Types.GET_USER_DATA_SUCCESS]: getUserDataSuccess,
  [Types.GET_USER_DATA_ERROR]: getUserDataError,

  [Types.UPDATE_USER_DATA_REQUEST]: updateUserDataRequest,
  [Types.UPDATE_USER_DATA_SUCCESS]: updateUserDataSuccess,
  [Types.UPDATE_USER_DATA_ERROR]: updateUserDataError,

  [Types.SET_USER_AGENT]: setUserAgent
})

export const getUserAgent = (state: any) => pathOr(null, ['userAgent'], state)
