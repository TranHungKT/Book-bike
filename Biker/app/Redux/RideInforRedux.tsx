import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types
import { RideInforState } from '@/Types/RootState'
import { PhaseBookingBeforeRide } from '@/Constants/PhaseReduxConstants'
import {
  mapDataUserToFrontEnd,
  mapRideStateAfterRefresh
} from '@/Functions/MapDataToFrontendFunctions'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateLocationBiker: ['lng', 'lat'],

  refreshRideDataAfterQuit: ['data'],

  setPhaseRide: ['phase', 'time'],

  setRideAfterConfirmBook: ['rideInfor', 'index']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<RideInforState> =
  Immutable({
    phaseBooking: PhaseBookingBeforeRide.CHOOSE_SERVICE,
    time: 0,
    price: '',
    biker: {
      phone: '',
      userDetail: {
        accountUsername: '',
        address: '',
        dateOfBirth: '',
        firstName: '',
        gender: true,
        lastName: '',
        phoneNumber: '',
        createdDate: ''
      },
      location: { lat: 0, lng: 0 },
      distance: 0,
      realDistance: 0,
      extraFee: 0
    },
    rideHash: '',

    bikerLocationUpdate: {
      lat: 0,
      lng: 0
    },
    addressAndCoordinates: {
      address: {
        addressOriginalLocation: '',
        addressDestination: ''
      },
      coordinates: {
        originalLat: 0,
        originalLng: 0,
        destinationLat: 0,
        destinationLng: 0
      }
    }
  })

/* ------------- Reducers ------------- */

export const updateLocationBiker = (state = INITIAL_STATE, { lng, lat }: any) =>
  state.merge({
    bikerLocationUpdate: { lng, lat }
  })

export const setPhaseRide = (state = INITIAL_STATE, { phase, time }: any) =>
  state.merge({ phaseBooking: phase, time })

export const refreshRideDataAfterQuit = (
  state = INITIAL_STATE,
  { data }: any
) => {
  const {
    coordinates,
    address,
    price,
    biker,
    rideHash,
    isRideConfirmed,
    isRideCancelled,
    haveBikerArrived
  } = data
  console.log(data)
  const tempBikerUserDetail = mapDataUserToFrontEnd(biker.userDetail)

  return state.merge({
    phaseBooking: mapRideStateAfterRefresh({
      isRideConfirmed,
      isRideCancelled,
      haveBikerArrived
    }),
    time: Date.now(),
    price,
    rideHash,
    biker: {
      phone: biker.phone,
      userDetail: tempBikerUserDetail
    },
    addressAndCoordinates: {
      address: {
        addressDestination: address.destination,
        addressOriginalLocation: address.origin
      },
      coordinates: {
        originalLat: coordinates.origin.lat,
        originalLng: coordinates.origin.lng,
        destinationLat: coordinates.destination.lat,
        destinationLng: coordinates.destination.lng
      }
    }
  })
}

export const setRideAfterConfirmBook = (
  state = INITIAL_STATE,
  { rideInfor }: any
) => {
  const { phaseBooking, time, addressAndCoordinates, biker, rideHash, price } =
    rideInfor

  return state.merge({
    addressAndCoordinates,
    phaseBooking,
    time,
    biker,
    rideHash,
    price
  })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_LOCATION_BIKER]: updateLocationBiker,

  [Types.SET_PHASE_RIDE]: setPhaseRide,

  [Types.REFRESH_RIDE_DATA_AFTER_QUIT]: refreshRideDataAfterQuit,

  [Types.SET_RIDE_AFTER_CONFIRM_BOOK]: setRideAfterConfirmBook
})
