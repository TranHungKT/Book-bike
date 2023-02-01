import { put, select } from 'redux-saga/effects'

import Booking from '@/Socket/Events/Booking'
import ChooseBiker from '@/Socket/Events/ChooseBiker'
import ChooseBikerDelivery from '@/Socket/Events/ChooseBikerDelivery'
import Delivery from '@/Socket/Events/Delivery'
import { initSocket, wrapperEmitSocket } from '@/Socket/Socket'
import { getUserAgent } from '@/Redux/UserRedux'

// Redux
import SocketActions from '@/Redux/SocketRedux'

// Functions
import { getAccessToken } from '@/Redux/AuthRedux'

// Types
import { RootState } from '@/Types'

const selectUserAgent = (state: RootState) => getUserAgent(state.user)
const selectAccessToken = (state: RootState) => getAccessToken(state.auth)

export function* emitBooking({ addressAndCoordinates }: any) {
  try {
    const userAgent: string = yield select(selectUserAgent)
    const accessToken: string = yield select(selectAccessToken)

    yield wrapperEmitSocket(() =>
      Booking(accessToken, addressAndCoordinates, userAgent)
    )
  } catch (error) {
    console.log('emit Booking saga', error)
  }
}

export function* InitSocket() {
  try {
    const accessToken: string = yield select(selectAccessToken)
    yield initSocket(accessToken)
  } catch (error) {
    console.log('init socket saga', error)
  }
}

export function* emitChooseBiker({ phoneNumber, rideHash, price }: any) {
  try {
    const accessToken: string = yield select(selectAccessToken)
    const userAgent: string = yield select(selectUserAgent)

    yield wrapperEmitSocket(() =>
      ChooseBiker(accessToken, phoneNumber, rideHash, price, userAgent)
    )
    yield put(SocketActions.emitChooseBikerSuccess())
  } catch (error) {
    console.log('emit choose Biker saga', error)
  }
}

export function* emitChooseBikerDelivery({
  phoneNumber,
  rideHash,
  price
}: any) {
  try {
    const accessToken: string = yield select(selectAccessToken)
    const userAgent: string = yield select(selectUserAgent)

    yield wrapperEmitSocket(() =>
      ChooseBikerDelivery(accessToken, phoneNumber, rideHash, price, userAgent)
    )
    yield put(SocketActions.emitChooseBikerDeliverySuccess())
  } catch (error) {
    console.log('emit choose biker delivery saga', error)
  }
}

export function* emitDelivery({
  addressAndCoordinates,
  receiverInfor,
  packageInfor
}: any) {
  try {
    const accessToken: string = yield select(selectAccessToken)
    const userAgent: string = yield select(selectUserAgent)

    yield Delivery(
      accessToken,
      addressAndCoordinates,
      receiverInfor,
      packageInfor,
      userAgent
    )
  } catch (error) {
    console.log('emit delivery saga', error)
  }
}
