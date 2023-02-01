import { createSelector } from 'reselect'

// Types
import { IListMarkers, RootState } from '@/Types'

const getIndexOfPhaseRide = (state: RootState) => state.phase.indexOfPhaseRide
const getRideInfor = (state: RootState) => state.rideInfor
const getPackageInfor = (state: RootState) => state.package.package

const getMapCoordinates = (state: RootState) =>
  state.map.addressAndCoordinates.coordinates
export const getReceiverNameSelector = createSelector(
  getIndexOfPhaseRide,
  getPackageInfor,
  (indexOfPhaseRide, packageInfor) => {
    if (indexOfPhaseRide === 0) {
      return ''
    }
    return packageInfor[indexOfPhaseRide - 1].receiverInfor.name
  }
)

export const getAddressSelector = createSelector(
  getIndexOfPhaseRide,
  getRideInfor,
  getPackageInfor,
  (indexOfPhaseRide, rideInfor, packageInfor) => {
    if (indexOfPhaseRide === 0) {
      return rideInfor.addressAndCoordinates
    }
    return packageInfor[indexOfPhaseRide - 1].addressAndCoordinates
  }
)

export const getUserDetailSelector = createSelector(
  getIndexOfPhaseRide,
  getRideInfor,
  getPackageInfor,
  (indexOfPhaseRide, rideInfor, packageInfor) => {
    if (indexOfPhaseRide === 0) {
      return rideInfor.biker.userDetail
    }
    return packageInfor[indexOfPhaseRide - 1].biker?.userDetail
  }
)

export const getPriceSelector = createSelector(
  getIndexOfPhaseRide,
  getRideInfor,
  getPackageInfor,
  (indexOfPhaseRide, rideInfor, packageInfor) => {
    if (indexOfPhaseRide === 0) {
      return rideInfor.price
    }
    return packageInfor[indexOfPhaseRide - 1].price
  }
)

export const getPhaseBookingSelector = createSelector(
  getIndexOfPhaseRide,
  getRideInfor,
  getPackageInfor,
  (indexOfPhaseRide, rideInfor, packageInfor) => {
    if (indexOfPhaseRide === 0) {
      return rideInfor.phaseBooking
    }
    return packageInfor[indexOfPhaseRide - 1].phaseBooking
  }
)

export const getRideHashSelector = createSelector(
  getIndexOfPhaseRide,
  getRideInfor,
  getPackageInfor,
  (indexOfPhaseRide, rideInfor, packageInfor) => {
    if (indexOfPhaseRide === 0) {
      return rideInfor.rideHash
    }
    return packageInfor[indexOfPhaseRide - 1].rideHash
  }
)

export const getTimeSelector = createSelector(
  getIndexOfPhaseRide,
  getRideInfor,
  getPackageInfor,
  (indexOfPhaseRide, rideInfor, packageInfor) => {
    if (indexOfPhaseRide === 0) {
      return rideInfor.time
    }
    return packageInfor[indexOfPhaseRide - 1].time
  }
)

export const getBikerDetailSelector = (index: number) =>
  createSelector(
    (state: RootState) => state.phase.resultFoundBikers.bikers,
    (result) => result[index]
  )

export const getCoordinatesWithoutIndex = () =>
  createSelector(getMapCoordinates, (coordinates): IListMarkers[] => {
    const { originalLat, originalLng, destinationLat, destinationLng } =
      coordinates
    return [
      {
        lat: originalLat,
        lng: originalLng,
        type: 0
      },
      {
        lat: destinationLat,
        lng: destinationLng,
        type: 1
      }
    ]
  })

export const getCoordinatesWithIndex = (indexToTracking?: number) =>
  createSelector(
    getRideInfor,
    getPackageInfor,
    (rideInfor, packageInfor): IListMarkers[] | undefined => {
      if (indexToTracking !== undefined) {
        if (indexToTracking === 0) {
          const { originalLat, originalLng, destinationLat, destinationLng } =
            rideInfor.addressAndCoordinates.coordinates

          const { lat, lng } = rideInfor.bikerLocationUpdate
          return [
            {
              lat: originalLat,
              lng: originalLng,
              type: 0
            },
            {
              lat: destinationLat,
              lng: destinationLng,
              type: 1
            },
            {
              lat,
              lng,
              type: 2
            }
          ]
        } else {
          const { originalLat, originalLng, destinationLat, destinationLng } =
            packageInfor[indexToTracking - 1].addressAndCoordinates.coordinates
          const { lat, lng } =
            packageInfor[indexToTracking - 1].bikerLocationUpdate

          return [
            {
              lat: originalLat,
              lng: originalLng,
              type: 0
            },
            {
              lat: destinationLat,
              lng: destinationLng,
              type: 1
            },
            {
              lat,
              lng,
              type: 2
            }
          ]
        }
      }
    }
  )
