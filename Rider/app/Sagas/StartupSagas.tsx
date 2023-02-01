import { put } from 'redux-saga/effects'

// Redux
import AuthActions from '@/Redux/AuthRedux'

// Functions
import { getAsyncStorage } from '@/Functions/AsyncStorageFunctions'

// Constants
import { USER_NAME, REFRESH_TOKEN } from '@/Constants/AsyncStorageKey'

export function* startup() {
  const userName: string = yield getAsyncStorage(USER_NAME)
  const refreshToken: string = yield getAsyncStorage(REFRESH_TOKEN)

  try {
    if (userName && refreshToken) {
      yield put(AuthActions.refreshTokenRequest(userName, refreshToken))
    } else {
      yield put(AuthActions.refreshTokenFailure('tokenInvalid'))
    }
  } catch (error) {
    yield put(AuthActions.refreshTokenFailure(error.message))
  }
}
