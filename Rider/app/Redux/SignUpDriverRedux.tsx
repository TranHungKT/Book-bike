import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types
import { SignUpDriverState } from '@/Types/RootState'
import {
  NUMBER_LICENSE,
  IDENTITY,
  BIKE_INFOR
} from '@/Constants/TypeDataSignUpDriver'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setInformation: ['data'],
  resetDataAfterSuccess: ['']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<SignUpDriverState> =
  Immutable({
    numberLicense: '',
    numberID: '',
    licensePlate: '',
    vehicleIssue: ''
  })

export const setInformation = (state = INITIAL_STATE, { data }: any) => {
  switch (data.type) {
    case BIKE_INFOR:
      return state.merge({
        licensePlate: data.value.licensePlate,
        vehicleIssue: data.value.vehicleIssue
      })
    case NUMBER_LICENSE:
      return state.merge({ numberLicense: data.value })
    case IDENTITY:
      return state.merge({ numberID: data.value })

    default:
      return
  }
}

export const resetDataAfterSuccess = (state = INITIAL_STATE) =>
  state.merge({
    numberLicense: '',
    numberID: '',
    licensePlate: '',
    vehicleIssue: ''
  })

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_INFORMATION]: setInformation,

  [Types.RESET_DATA_AFTER_SUCCESS]: resetDataAfterSuccess
})
