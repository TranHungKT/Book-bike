import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { SocketState } from '@/Types'
import { pathOr } from 'ramda'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  initSocket: ['accessToken'],
  initSocketSuccess: [''],
  initSocketError: ['error'],

  disconnectSocket: [''],

  setOriginalLocationBeforeRide: ['longitude', 'latitude'],

  emitHeartBeat: ['longitude', 'latitude'],
  listenChooseBiker: ['payloadChooseBiker'],

  startHeartBeat: [''],
  stopHeartBeat: [''],

  emitConfirmRide: ['customer', 'rideHash'],
  emitConfirmRideResult: [''],
  emitConfirmRideError: ['error'],

  emitConfirmDelivery: ['customer', 'rideHash'],
  emitConfirmDeliveryResult: [''],
  emitConfirmDeliveryError: ['error'],

  emitCancelRide: ['customer', 'rideHash'],
  emitCancelRideResult: [''],
  emitCancelRideError: ['error'],

  emitBikerWaiting: ['rideHash'],
  emitBikerWaitingError: ['error'],

  emitDeliveryBikerWaiting: ['rideHash'],
  emitDeliveryBikerWaitingError: ['error'],

  emitBikerReceivedPackage: ['rideHash', 'image'],
  emitBikerReceivedPackageError: ['error'],

  emitCompleteRide: ['phone_number', 'rideHash'],
  emitCompleteRideError: ['error'],

  emitCompleteDelivery: ['rideHash', 'image'],
  emitCompleteDeliveryError: ['error']
})

export const SocketTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<SocketState> = Immutable({
  isInitSocket: false,
  genericError: null,

  isEmitHeartbeat: false,
  currentLocation: {
    lng: 0,
    lat: 0
  }
})

/* ------------- Reducers ------------- */

// SOCKETS
export const initSocket = (state = INITIAL_STATE) => state
export const initSocketSuccess = (state = INITIAL_STATE) =>
  state.merge({ isInitSocket: true })
export const initSocketError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ genericError: error })

export const setOriginalLocationBeforeRide = (
  state = INITIAL_STATE,
  { longitude, latitude }: any
) =>
  state.merge({
    currentLocation: {
      lng: longitude,
      lat: latitude
    }
  })

export const emitHeartBeat = (
  state = INITIAL_STATE,
  { longitude, latitude }: any
) =>
  state.merge({
    currentLocation: {
      lng: longitude,
      lat: latitude
    }
  })
export const stopHeartBeat = (state = INITIAL_STATE) =>
  state.merge({ isInitSocket: false, isEmitHeartbeat: false })
export const startHeartBeat = (state = INITIAL_STATE) =>
  state.merge({ isEmitHeartbeat: true })

export const emitConfirmRide = (state = INITIAL_STATE) => state
export const emitConfirmRideError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ genericError: error })

export const emitConfirmDelivery = (state = INITIAL_STATE) => state
export const emitConfirmDeliveryError = (
  state = INITIAL_STATE,
  { error }: any
) => state.merge({ genericError: error })

export const emitCancelRide = (state = INITIAL_STATE) => state
export const emitCancelRideError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ genericError: error })

export const emitBikerWaiting = (state = INITIAL_STATE) => state
export const emitBikerWaitingError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ genericError: error })

export const emitDeliveryBikerWaiting = (state = INITIAL_STATE) => state
export const emitDeliveryBikerWaitingError = (
  state = INITIAL_STATE,
  { error }: any
) => state.merge({ genericError: error })

export const emitBikerReceivedPackage = (state = INITIAL_STATE) => state
export const emitBikerReceivedPackageError = (
  state = INITIAL_STATE,
  { error }: any
) => state.merge({ genericError: error })

export const emitCompleteRide = (state = INITIAL_STATE) => state
export const emitCompleteRideError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ genericError: error })

export const emitCompleteDelivery = (state = INITIAL_STATE) => state
export const emitCompleteDeliveryError = (
  state = INITIAL_STATE,
  { error }: any
) => state.merge({ genericError: error })

export const disconnectSocket = (state = INITIAL_STATE) =>
  state.merge({ isInitSocket: false })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMIT_HEART_BEAT]: emitHeartBeat,
  [Types.INIT_SOCKET]: initSocket,
  [Types.INIT_SOCKET_SUCCESS]: initSocketSuccess,
  [Types.INIT_SOCKET_ERROR]: initSocketError,
  [Types.SET_ORIGINAL_LOCATION_BEFORE_RIDE]: setOriginalLocationBeforeRide,

  [Types.EMIT_CONFIRM_RIDE]: emitConfirmRide,
  [Types.EMIT_CONFIRM_RIDE_ERROR]: emitConfirmRideError,

  [Types.EMIT_CONFIRM_DELIVERY]: emitConfirmDelivery,
  [Types.EMIT_CONFIRM_DELIVERY_ERROR]: emitConfirmDeliveryError,

  [Types.EMIT_CANCEL_RIDE]: emitCancelRide,
  [Types.EMIT_CANCEL_RIDE_ERROR]: emitCancelRideError,

  [Types.EMIT_BIKER_WAITING]: emitBikerWaiting,
  [Types.EMIT_BIKER_WAITING_ERROR]: emitBikerWaitingError,

  [Types.EMIT_DELIVERY_BIKER_WAITING]: emitDeliveryBikerWaiting,
  [Types.EMIT_DELIVERY_BIKER_WAITING_ERROR]: emitDeliveryBikerWaitingError,

  [Types.EMIT_COMPLETE_RIDE]: emitCompleteRide,
  [Types.EMIT_COMPLETE_RIDE_ERROR]: emitCompleteRideError,

  [Types.EMIT_BIKER_RECEIVED_PACKAGE]: emitBikerReceivedPackage,
  [Types.EMIT_BIKER_RECEIVED_PACKAGE_ERROR]: emitBikerReceivedPackageError,

  [Types.EMIT_COMPLETE_DELIVERY]: emitCompleteDelivery,
  [Types.EMIT_COMPLETE_DELIVERY_ERROR]: emitCompleteDeliveryError,

  [Types.STOP_HEART_BEAT]: stopHeartBeat,
  [Types.START_HEART_BEAT]: startHeartBeat,

  [Types.DISCONNECT_SOCKET]: disconnectSocket
})

export const getIsInitSocket = (state: any) =>
  pathOr(null, ['isInitSocket'], state)
