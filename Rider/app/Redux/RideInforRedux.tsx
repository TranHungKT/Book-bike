import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { RideInforState } from '@/Types'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getInforRide: ['rideInfor'],
  getInforDelivery: ['deliveryData']
})

export const RideInforTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<RideInforState> =
  Immutable({
    addressAndCoordinates: {
      address: {
        addressDestination: '',
        addressOriginalLocation: ''
      },
      coordinates: {
        originalLat: 0,
        originalLng: 0,
        destinationLat: 0,
        destinationLng: 0
      }
    },

    rideHash: '',
    price: 0
  })

/* ------------- Reducers ------------- */

export const getInforRide = (state = INITIAL_STATE, { rideInfor }: any) => {
  const { addressAndCoordinates, customer, rideHash, price } = rideInfor

  return state.merge({
    addressAndCoordinates,
    customer,
    rideHash,
    price
  })
}

export const getInforDelivery = (
  state = INITIAL_STATE,
  { deliveryData }: any
) => {
  const { addressAndCoordinates, sender, receiver, rideHash, price } =
    deliveryData

  return state.merge({
    addressAndCoordinates,
    sender,
    receiver,
    package: deliveryData.package,
    rideHash,
    price
  })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_INFOR_RIDE]: getInforRide,

  [Types.GET_INFOR_DELIVERY]: getInforDelivery
})
