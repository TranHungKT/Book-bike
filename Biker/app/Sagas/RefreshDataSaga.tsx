import { call, put, select } from 'redux-saga/effects'

import PhaseActions from '@/Redux/PhaseRedux'
import RideInforActions from '@/Redux/RideInforRedux'
import PackageInforActions from '@/Redux/PackageInfor'

// Functions
import { getAccessToken } from '@/Redux/AuthRedux'

// Service
import RefreshDataApi from '@/Services/RefreshDataApi'

// Types
import { ResponseTypes, RootState } from '@/Types'

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
      yield put(PhaseActions.findRideAfterQuitSuccess())

      // ------- WAIT FIX RESPONSE -------
      // if (response.data.ride.counts !== 0) {
      //   yield put(
      //     RideInforActions.refreshRideDataAfterQuit(
      //       response.data.ride.paginatedResults[0]
      //     )
      //   )
      // }
      // ----------------------------------
      if (response.data.deliveries[0].counts !== 0) {
        yield put(
          PackageInforActions.refreshDeliveryDataAfterQuit(
            response.data.deliveries[0].paginatedResults
          )
        )
      }
    } else {
      yield put(PhaseActions.findRideAfterQuitError(response.data.data))
    }
  } catch (error) {
    console.log('errorroror', error)
    yield put(PhaseActions.findRideAfterQuitError('can not get data'))
  }
}
