import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { StartupTypes } from '@/Redux/StartupRedux'
import { AuthTypes } from '@/Redux/AuthRedux'
import { SocketTypes } from '@/Redux/SocketRedux'
import { UserTypes } from '@/Redux/UserRedux'
import { HistoryTypes } from '@/Redux/HistoryRedux'
import { PhaseTypes } from '@/Redux/PhaseRedux'
/* ------------- Sagas ------------- */
import { startup } from './StartupSagas'
import {
  signInSaga,
  signUpSaga,
  verifySaga,
  refreshTokenSaga,
  changePasswordSaga
} from './AuthSagas'
import {
  InitSocket,
  emitBooking,
  emitChooseBiker,
  emitDelivery,
  emitChooseBikerDelivery
} from './SocketSagas'

import {
  getUserDetailSaga,
  updateUserDetailSaga,
  createReviewTripSaga
} from './UserSagas'

import { getHistorySaga } from './HistorySagas'
import { refreshDataAfterQuit } from './RefreshDataSaga'
/* ------------- API ------------- */

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // Auth
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signInSaga),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUpSaga),
    takeLatest(AuthTypes.VERIFY_REQUEST, verifySaga),
    takeLatest(AuthTypes.REFRESH_TOKEN_REQUEST, refreshTokenSaga),
    takeLatest(AuthTypes.CHANGE_PASSWORD_REQUEST, changePasswordSaga),

    // Sockets
    takeLatest(SocketTypes.INIT_SOCKET, InitSocket),
    takeLatest(SocketTypes.EMIT_BOOKING_REQUEST, emitBooking),
    takeLatest(SocketTypes.EMIT_CHOOSE_BIKER_REQUEST, emitChooseBiker),
    takeLatest(SocketTypes.EMIT_DELIVERY_REQUEST, emitDelivery),
    takeLatest(
      SocketTypes.EMIT_CHOOSE_BIKER_DELIVERY_REQUEST,
      emitChooseBikerDelivery
    ),

    // History
    takeLatest(HistoryTypes.GET_HISTORY_REQUEST, getHistorySaga),

    // User
    takeLatest(UserTypes.GET_USER_DATA_REQUEST, getUserDetailSaga),
    takeLatest(UserTypes.UPDATE_USER_DATA_REQUEST, updateUserDetailSaga),
    takeLatest(UserTypes.CREATE_REVIEW_REQUEST, createReviewTripSaga),

    takeLatest(PhaseTypes.FIND_RIDE_AFTER_QUIT_REQUEST, refreshDataAfterQuit)
  ])
}
