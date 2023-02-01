import { createReducer, createActions } from 'reduxsauce'
import Immutable, { asMutable } from 'seamless-immutable'

// Types
import { MapState } from '@/Types/RootState'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setOriginalLocation: ['lng', 'lat', 'address'],
  setDestination: ['lng', 'lat', 'address'],
  getDistance: ['distance'],

  resetDataAfterBook: ['']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<MapState> = Immutable({
  addressAndCoordinates: {
    address: {
      addressOriginalLocation: undefined,
      addressDestination: undefined
    },
    coordinates: {
      originalLat: 0,
      originalLng: 0,
      destinationLat: 0,
      destinationLng: 0
    }
  },
  distance: 0
})

/* ------------- Reducers ------------- */
export const setOriginalLocation = (
  state = INITIAL_STATE,
  originalLocationPayload: {
    lng: number
    lat: number
    address: string | undefined
  }
) => {
  const { lat, lng, address } = originalLocationPayload
  return state.merge({
    addressAndCoordinates: {
      coordinates: {
        ...state.addressAndCoordinates.coordinates,
        originalLat: lat,
        originalLng: lng
      },
      address: {
        ...state.addressAndCoordinates.address,
        addressOriginalLocation: address
      }
    }
  })
}

export const setDestination = (
  state = INITIAL_STATE,
  destinationPayload: { lng: number; lat: number; address: string }
) => {
  const { lat, lng, address } = destinationPayload
  return state.merge({
    addressAndCoordinates: {
      coordinates: {
        ...state.addressAndCoordinates.coordinates,
        destinationLat: lat,
        destinationLng: lng
      },
      address: {
        ...state.addressAndCoordinates.address,
        addressDestination: address
      }
    }
  })
}

export const getDistance = (
  state = INITIAL_STATE,
  distancePayload: {
    distance: number
  }
) => state.merge({ distance: distancePayload.distance })

export const resetDataAfterBook = (state = INITIAL_STATE) => {
  const tempAddressAndCoordinates = asMutable(state.addressAndCoordinates, {
    deep: true
  })

  tempAddressAndCoordinates.address.addressDestination = ''
  tempAddressAndCoordinates.coordinates.destinationLat = 0
  tempAddressAndCoordinates.coordinates.destinationLng = 0

  return state.merge({
    addressAndCoordinates: tempAddressAndCoordinates,
    distance: 0
  })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ORIGINAL_LOCATION]: setOriginalLocation,
  [Types.SET_DESTINATION]: setDestination,
  [Types.GET_DISTANCE]: getDistance,

  [Types.RESET_DATA_AFTER_BOOK]: resetDataAfterBook
})
