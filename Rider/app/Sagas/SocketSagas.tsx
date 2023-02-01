import { select } from 'redux-saga/effects'

import Heartbeat from '@/Socket/Event/Heartbeat'
import { initSocket } from '@/Socket/Socket'
import ConfirmRide from '@/Socket/Event/ConfirmRide'
import ConfirmDelivery from '@/Socket/Event/DeliveryConfirm'
import CancelRide from '@/Socket/Event/CancelRide'
import BikerWaiting from '@/Socket/Event/BikerWaiting'
import DeliveryBikerWaiting from '@/Socket/Event/DeliveryBikerWaiting'
import BikerReceivedPackage from '@/Socket/Event/BikerReceivedPackage'
import CompleteRide from '@/Socket/Event/CompleteRide'
import DeliveryComplete from '@/Socket/Event/DeliveryComplete'
import StopHeartbeat from '@/Socket/Event/StopHeartbeat'
// Redux
import { getUserAgent } from '@/Redux/UserRedux'
import { getAccessToken } from '@/Redux/AuthRedux'
import { getIsInitSocket } from '@/Redux/SocketRedux'
// Types
import { RootState } from '@/Types'

const selectUserAgent = (state: RootState) => getUserAgent(state.user)
const selectAcessToken = (state: RootState) => getAccessToken(state.auth)
const selectIsInitSocket = (state: RootState) => getIsInitSocket(state.socket)
export function* emitHeartBeat({ longitude, latitude }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    const isInitSocket: boolean = yield select(selectIsInitSocket)

    if (!isInitSocket) {
      yield initSocket(accessToken)
      return
    }

    yield Heartbeat(accessToken, longitude, latitude, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* stopEmitHeartBeat() {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    yield StopHeartbeat(accessToken, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* InitSocket({ accessToken }: any) {
  try {
    yield initSocket(accessToken)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* emitConfirmRide({ customer, rideHash }: any) {
  try {
    const accessToken: string = yield select(selectAcessToken)
    const userAgent: string = yield select(selectUserAgent)
    yield ConfirmRide(accessToken, customer, rideHash, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* emitConfirmDelivery({ customer, rideHash }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    yield ConfirmDelivery(accessToken, customer, rideHash, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* emitCancelRide({ customer, rideHash }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    yield CancelRide(accessToken, customer, rideHash, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* emitBikerWaiting({ rideHash }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    yield BikerWaiting(accessToken, rideHash, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* emitDeliveryBikerWaiting({ rideHash }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    yield DeliveryBikerWaiting(accessToken, rideHash, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* emitBikerReceivedPackage({ rideHash, image }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    yield BikerReceivedPackage(accessToken, rideHash, image, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* emitCompleteRide({ phone_number, rideHash }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    yield CompleteRide(accessToken, phone_number, rideHash, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}

export function* emitCompleteDelivery({ rideHash, image }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAcessToken)
    yield DeliveryComplete(accessToken, rideHash, image, userAgent)
  } catch (error) {
    console.log(error) // yield emit error here
  }
}
