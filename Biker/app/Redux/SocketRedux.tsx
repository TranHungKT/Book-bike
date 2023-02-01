import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types
import { SocketState } from '@/Types'

// Constants
import { RETRY_FIND_BIKER } from '@/Constants/SocketEventConstants'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  initSocket: [],
  initSocketSuccess: [''],
  initSocketError: ['error'],

  emitBookingRequest: ['addressAndCoordinates'],
  emitBookingSuccess: [''],
  emitBookingError: ['error'],

  emitDeliveryRequest: [
    'addressAndCoordinates',
    'receiverInfor',
    'packageInfor'
  ],
  emitDeliverySuccess: [''],
  emitDeliveryError: ['error'],

  emitChooseBikerDeliveryRequest: ['phoneNumber', 'rideHash', 'price'],
  emitChooseBikerDeliverySuccess: [''],
  emitChooseBikerDeliveryError: ['error'],

  emitChooseBikerRequest: ['phoneNumber', 'rideHash', 'price'],
  emitChooseBikerSuccess: [''],
  emitChooseBikerError: ['error']
})

export const SocketTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<SocketState> = Immutable({
  isInitSocket: false,
  genericError: null,

  isFindingBikers: false,
  errorEmitBooking: null,

  isChooseBikerRequest: false,
  errorEmitChooseBiker: null
})

/* ------------- Reducers ------------- */

// SOCKETS
export const initSocket = (state = INITIAL_STATE) =>
  state.merge({ isInitSocket: true })
export const initSocketSuccess = (state = INITIAL_STATE) =>
  state.merge({ isInitSocket: false })
export const initSocketError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ genericError: error })

export const emitBookingRequest = (state = INITIAL_STATE) =>
  state.merge({ isFindingBikers: true, errorEmitBooking: null })

export const emitBookingSuccess = (state = INITIAL_STATE) =>
  state.merge({
    isFindingBikers: false,
    errorEmitChooseBiker: null
  })

export const emitBookingError = (state = INITIAL_STATE, { error }: any) => {
  if (error === RETRY_FIND_BIKER) {
    return state.merge({ isFindingBikers: true, errorEmitBooking: error })
  }
  return state.merge({ errorEmitBooking: error, isFindingBikers: false })
}

export const emitDeliveryRequest = (state = INITIAL_STATE) =>
  state.merge({ isFindingBikers: true, errorEmitBooking: null })
export const emitDeliverySuccess = (state = INITIAL_STATE) =>
  state.merge({
    isFindingBikers: false,
    errorEmitChooseBiker: null
  })
export const emitDeliveryError = (state = INITIAL_STATE, { error }: any) => {
  if (error === RETRY_FIND_BIKER) {
    return state.merge({ isFindingBikers: true, errorEmitBooking: error })
  }
  return state.merge({ errorEmitBooking: error, isFindingBikers: false })
}

export const emitChooseBikerRequest = (state = INITIAL_STATE) =>
  state.merge({ isChooseBikerRequest: true, errorEmitChooseBiker: null })
export const emitChooseBikerSuccess = (state = INITIAL_STATE) =>
  state.merge({ isChooseBikerRequest: false, errorEmitChooseBiker: null })
export const emitChooseBikerError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ isChooseBikerRequest: false, errorEmitChooseBiker: error })

export const emitChooseBikerDeliveryRequest = (state = INITIAL_STATE) =>
  state.merge({ isChooseBikerRequest: true, errorEmitChooseBiker: null })
export const emitChooseBikerDeliverySuccess = (state = INITIAL_STATE) =>
  state.merge({ isChooseBikerRequest: false, errorEmitChooseBiker: null })
export const emitChooseBikerDeliveryError = (
  state = INITIAL_STATE,
  { error }: any
) => state.merge({ isChooseBikerRequest: false, errorEmitChooseBiker: error })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT_SOCKET]: initSocket,
  [Types.INIT_SOCKET_SUCCESS]: initSocketSuccess,
  [Types.INIT_SOCKET_ERROR]: initSocketError,

  [Types.EMIT_BOOKING_REQUEST]: emitBookingRequest,
  [Types.EMIT_BOOKING_SUCCESS]: emitBookingSuccess,
  [Types.EMIT_BOOKING_ERROR]: emitBookingError,

  [Types.EMIT_DELIVERY_REQUEST]: emitDeliveryRequest,
  [Types.EMIT_DELIVERY_SUCCESS]: emitDeliverySuccess,
  [Types.EMIT_DELIVERY_ERROR]: emitDeliveryError,

  [Types.EMIT_CHOOSE_BIKER_REQUEST]: emitChooseBikerRequest,
  [Types.EMIT_CHOOSE_BIKER_SUCCESS]: emitChooseBikerSuccess,
  [Types.EMIT_CHOOSE_BIKER_ERROR]: emitChooseBikerError,

  [Types.EMIT_CHOOSE_BIKER_DELIVERY_REQUEST]: emitChooseBikerDeliveryRequest,
  [Types.EMIT_CHOOSE_BIKER_DELIVERY_SUCCESS]: emitChooseBikerDeliverySuccess,
  [Types.EMIT_CHOOSE_BIKER_DELIVERY_ERROR]: emitChooseBikerDeliveryError
})
