import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { StartupTypes } from '@/Redux/StartupRedux'
import { AuthTypes } from '@/Redux/AuthRedux'
import { SocketTypes } from '@/Redux/SocketRedux'
import { HistoryTypes } from '@/Redux/HistoryRedux'
import { UserTypes } from '@/Redux/UserRedux'
import { PhaseRiderType } from '@/Redux/PhaseRiderRedux'
/* ------------- Sagas ------------- */
import { startup } from './StartupSagas'
import {
  signInSaga,
  signUpSaga,
  verifySaga,
  refreshTokenSaga,
  signUpDriverSaga
} from './AuthSagas'
import {
  emitHeartBeat,
  InitSocket,
  emitConfirmRide,
  emitCancelRide,
  emitBikerWaiting,
  emitCompleteRide,
  emitConfirmDelivery,
  emitDeliveryBikerWaiting,
  emitBikerReceivedPackage,
  emitCompleteDelivery,
  stopEmitHeartBeat
} from './SocketSagas'
import { getHistorySaga, getReportSaga } from './HistorySagas'
import { getUserDetailSaga, updateUserDetailSaga } from './UserSagas'
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
    takeLatest(AuthTypes.SIGN_UP_DRIVER_REQUEST, signUpDriverSaga),

    // Socket
    takeLatest(SocketTypes.EMIT_HEART_BEAT, emitHeartBeat),
    takeLatest(SocketTypes.INIT_SOCKET, InitSocket),
    takeLatest(SocketTypes.EMIT_CONFIRM_RIDE, emitConfirmRide),
    takeLatest(SocketTypes.EMIT_CONFIRM_DELIVERY, emitConfirmDelivery),
    takeLatest(SocketTypes.EMIT_CANCEL_RIDE, emitCancelRide),
    takeLatest(SocketTypes.EMIT_BIKER_WAITING, emitBikerWaiting),
    takeLatest(
      SocketTypes.EMIT_DELIVERY_BIKER_WAITING,
      emitDeliveryBikerWaiting
    ),
    takeLatest(SocketTypes.EMIT_COMPLETE_RIDE, emitCompleteRide),
    takeLatest(
      SocketTypes.EMIT_BIKER_RECEIVED_PACKAGE,
      emitBikerReceivedPackage
    ),
    takeLatest(SocketTypes.EMIT_COMPLETE_DELIVERY, emitCompleteDelivery),
    takeLatest(SocketTypes.STOP_HEART_BEAT, stopEmitHeartBeat),

    // History
    takeLatest(HistoryTypes.GET_HISTORY_REQUEST, getHistorySaga),
    takeLatest(HistoryTypes.GET_REPORT_REQUEST, getReportSaga),

    // User
    takeLatest(UserTypes.GET_USER_DATA_REQUEST, getUserDetailSaga),
    takeLatest(UserTypes.UPDATE_USER_DATA_REQUEST, updateUserDetailSaga),

    takeLatest(
      PhaseRiderType.FIND_RIDE_AFTER_QUIT_REQUEST,
      refreshDataAfterQuit
    )
  ])
}
