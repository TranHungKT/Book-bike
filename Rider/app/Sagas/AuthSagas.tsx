import { call, put } from 'redux-saga/effects'
import jwt_decode from 'jwt-decode'

// Redux
import AuthAction from '@/Redux/AuthRedux'
import SocketActions from '@/Redux/SocketRedux'

// Api
import AuthApi from '@/Services/AuthApi'

// Types
import { ResponseTypes } from '@/Types'

const AuthAPI = AuthApi.create()

const checkJWT = (refreshToken: any) => {
  const decoded: any = jwt_decode(refreshToken)

  return decoded.IS_BIKER
}

export function* signInSaga(signInPayload: any) {
  try {
    const { userName, password } = signInPayload

    const response: ResponseTypes<any> = yield call<any>(
      AuthAPI.signInRequest,
      userName,
      password
    )

    if (response.ok && response.status === 200 && response.data.error === 0) {
      yield put(AuthAction.signInSuccess(response.data?.data.otpToken))
    } else {
      yield put(AuthAction.signInFailure(response.data.message))
    }
  } catch (error) {
    yield put(AuthAction.signInFailure('Đăng nhập thất bại'))
  }
}

export function* signUpSaga(signUpPayload: any) {
  try {
    const { registerDetail } = signUpPayload
    const response: ResponseTypes<any> = yield call<any>(
      AuthAPI.signUpRequest,
      registerDetail
    )

    if (response.ok && response.status === 200 && response.data.error === 0) {
      yield put(AuthAction.signUpSuccess())
    } else {
      yield put(AuthAction.signUpFailure(response.data.message))
    }
  } catch (error) {
    yield put(AuthAction.signUpFailure('Đăng ký thất bại'))
  }
}

export function* verifySaga(verifyPayload: any) {
  try {
    const { userName, otpToken, otpCode } = verifyPayload

    const response: ResponseTypes<any> = yield call<any>(
      AuthAPI.verifyRequest,
      userName,
      otpToken,
      otpCode
    )

    if (response.ok && response.status === 200 && response.data.error === 0) {
      yield put(
        AuthAction.verifySuccess(
          response.data?.data.accessToken,
          response.data?.data.refreshToken,
          checkJWT(response.data?.data.refreshToken)
        )
      )
      yield put(SocketActions.initSocket(response.data?.data.accessToken))
    } else {
      yield put(AuthAction.verifyFailure(response.data.message))
    }
  } catch (error) {
    yield put(AuthAction.verifyFailure('Kiểm tra otp thất bại'))
  }
}

export function* refreshTokenSaga(refreshPayload: any) {
  try {
    const { userName, refreshToken } = refreshPayload

    const response: ResponseTypes<any> = yield call<any>(
      AuthAPI.refreshTokenRequest,
      userName,
      refreshToken
    )

    if (response.ok && response.status === 200 && response.data.error === 0) {
      yield put(
        AuthAction.refreshTokenSuccess(
          response.data?.data.accessToken,
          response.data?.data.refreshToken,
          checkJWT(response.data?.data.refreshToken)
        )
      )
      yield put(SocketActions.initSocket(response.data?.data.accessToken))
    } else {
      yield put(AuthAction.refreshTokenFailure(response.data.message))
    }
  } catch (error) {
    yield put(AuthAction.verifyFailure('Cập nhật token thất bại'))
  }
}

export function* signUpDriverSaga(signUpDriverPayload: any) {
  try {
    const response: ResponseTypes<any> = yield call<any>(
      AuthAPI.signUpDriverRequest,
      signUpDriverPayload
    )

    if (response.ok && response.status === 200 && response.data.error === 0) {
      yield put(
        AuthAction.signUpDriverSuccess(
          response.data?.data.accessToken,
          response.data?.data.refreshToken
        )
      )
    } else {
      yield put(AuthAction.signUpDriverError(response.data.message))
    }
  } catch (error) {
    yield put(AuthAction.signUpDriverError('Thay đổi mật khẩu thất bại'))
  }
}
