import { call, put, select } from 'redux-saga/effects'

import RideInforActions from '@/Redux/RideInforRedux'
import PhaseRiderActions from '@/Redux/PhaseRiderRedux'

// Functions
import { getAccessToken } from '@/Redux/AuthRedux'
import {
  mapAddressAndCoordinate,
  mapDeliveryStateAfterRefresh,
  mapSenderStateToFrontEnd
} from '@/Functions/MapDataToFrontendFunctions'

// Service
import RefreshDataApi from '@/Services/RefreshDataApi'

// Types
import { ResponseTypes, RootState } from '@/Types'

import { SERVICE } from '@/Constants/PhaseRiderConstants'

const RefreshDataAPI = RefreshDataApi.create()

const selectAccessToken = (state: RootState) => getAccessToken(state.auth)

export function* refreshDataAfterQuit() {
  try {
    const accessToken: string = yield select(selectAccessToken)
    const response: ResponseTypes<any> = yield call<any>(
      RefreshDataAPI.refreshDataAfterQuitRequest,
      accessToken
    )

    if (response.ok && response.status === 200) {
      yield put(PhaseRiderActions.findRideAfterQuitSuccess())
      // ----------- WAIT NEW RESPONSE -------------------------
      // if (response.data.ride.counts !== 0) {
      //   const {
      //     coordinates,
      //     address,
      //     customer,
      //     rideHash,
      //     price,
      //     isRideConfirmed,
      //     haveBikerArrived,
      //     isRideCancelled
      //   } = response.data.ride.paginatedResults[0]
      //   const addressAndCoordinates = mapAddressAndCoordinate(
      //     address,
      //     coordinates
      //   )
      //   const currentState = mapRideStateAfterRefresh({
      //     isRideCancelled,
      //     isRideConfirmed,
      //     haveBikerArrived
      //   })
      //   const basicCustomer = mapSenderStateToFrontEnd(customer)
      //   yield put(
      //     RideInforActions.getInforRide({
      //       addressAndCoordinates,
      //       customer: basicCustomer,
      //       rideHash,
      //       price
      //     })
      //   )

      //   yield put(PhaseRiderActions.setPhaseRider(currentState))
      //   yield put(PhaseRiderActions.setService(SERVICE.RIDE))
      // }

      // ---------------------------------------------------

      if (response.data.deliveries[0].counts !== 0) {
        const {
          coordinates,
          address,
          deliveryHash,
          price,
          sender,
          receiver,
          isDeliveryConfirmed,
          isDeliveryCancelled
        } = response.data.deliveries[0].paginatedResults[0]

        const addressAndCoordinates = mapAddressAndCoordinate(
          address,
          coordinates
        )

        const basicSender = mapSenderStateToFrontEnd(sender)

        const currentState = mapDeliveryStateAfterRefresh({
          isDeliveryConfirmed,
          isDeliveryCancelled,
          PackageData: response.data.deliveries[0].paginatedResults[0].package
        })

        yield put(
          RideInforActions.getInforDelivery({
            addressAndCoordinates,
            sender: basicSender,
            receiver,
            rideHash: deliveryHash,
            price,
            package: response.data.deliveries[0].paginatedResults[0].package
          })
        )

        yield put(PhaseRiderActions.setPhaseRider(currentState))
        yield put(PhaseRiderActions.setService(SERVICE.DELIVERY))
      }
    } else {
      yield put(PhaseRiderActions.findRideAfterQuitError(response.data.data))
    }
  } catch (error) {
    yield put(PhaseRiderActions.findRideAfterQuitError('can not get data'))
  }
}
