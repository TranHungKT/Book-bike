import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux'

import { RootState } from '@/Types'
import jwt_decode from 'jwt-decode'

import AuthActions from '../AuthRedux'

const RefreshTokenMiddleware: Middleware = (storeApi: MiddlewareAPI) => (
  next: Dispatch
) => (action: Action) => {
  const state: RootState = storeApi.getState()
  const { accessToken, refreshToken, userName } = state.auth

  if (!!accessToken && !!refreshToken) {
    const decoded: any = jwt_decode(accessToken)
    const date = new Date()

    if (Date.parse(date.toDateString()) / 1000 < decoded.exp) {
      next(action)
    } else {
      storeApi.dispatch(AuthActions.refreshTokenRequest(userName, accessToken))
      setInterval(() => {
        const state = storeApi.getState()
        const { fetchingRefreshToken, errorRefreshToken } = state.auth
        if (!fetchingRefreshToken && !errorRefreshToken) {
          next(action)
        }
      }, 500)
    }
  } else {
    next(action)
  }
}

export default RefreshTokenMiddleware
