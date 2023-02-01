import { call, put } from 'redux-saga/effects'

// Redux
import AuthAction from '@/Redux/AuthRedux'
import SocketActions from '@/Redux/SocketRedux'

// Api
import AuthApi from '@/Services/AuthApi'

// Types
import { ResponseTypes } from '@/Types'

const AuthAPI = AuthApi.create()

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
          userName,
          response.data?.data.accessToken,
          response.data?.data.refreshToken
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
          userName,
          response.data?.data.accessToken,
          response.data?.data.refreshToken
        )
      )

      yield put(SocketActions.initSocket(response.data?.data.accessToken))
    } else {
      yield put(AuthAction.refreshTokenFailure(response.data.message))
    }
  } catch (error) {
    yield put(AuthAction.refreshTokenFailure('Cập nhật token thất bại'))
  }
}

export function* changePasswordSaga(changePasswordPayload: any) {
  try {
    const { phoneNumber, password, newPassword } = changePasswordPayload
    const response: ResponseTypes<any> = yield call<any>(
      AuthAPI.changePasswordRequest,
      phoneNumber,
      password,
      newPassword
    )

    if (response.ok && response.status === 200) {
      yield put(AuthAction.changePasswordSuccess())
    } else {
      yield put(AuthAction.changePasswordFailure(response.data.message))
    }
  } catch (error) {
    yield put(AuthAction.changePasswordFailure('Thay đổi mật khẩu thất bại'))
  }
}
