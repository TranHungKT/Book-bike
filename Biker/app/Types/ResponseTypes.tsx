import { ApiResponse, ApiErrorResponse } from 'apisauce'
import { Coordinates, UserDetail } from './CommonTypes'

export type ResponseTypes<T> = ApiResponse<T, ApiErrorResponse<any>>

export type AuthenticateRes = {
  accessToken: string | null
  refreshToken: string | null
  otpToken: string | null
}

export type RefreshDataRes = {
  coordinates: {
    origin: Coordinates
    destination: Coordinates
  }
  address: {
    origin: string
    destination: string
  }
  customer: {
    userDetail: UserDetail
  }
  biker: {
    userDetail: UserDetail
  }
  price: number
}
