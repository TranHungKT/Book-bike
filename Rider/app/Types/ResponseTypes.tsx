import { ApiResponse, ApiErrorResponse } from 'apisauce'

export type ResponseTypes<T> = ApiResponse<T, ApiErrorResponse<any>>

export type AuthenticateRes = {
  accessToken: string | null
  refreshToken: string | null
  otpToken: string | null
}

// Response history Lam's server
// export type HistoryRes = {
//   coordinates: {
//     origin: Coordinates
//     destination: Coordinates
//   }
//   rideInvoice: string
//   address: {
//     origin: string
//     destination: string
//   }
//   price: number
//   date: string
// }

// Response history Du's server

export type HistoryRes = {
  origin_lng: number
  origin_lat: number
  destination_lng: number
  destination_lat: number
  address_origin: string
  address_destination: string
  is_ride_confirmed: boolean
  is_ride_cancelled: boolean
  price: number
  ride_hash: string
  date: string
  created_date: string
  biker_first_name: string
  biker_is_active: boolean
  biker_last_name: string
  biker_gender: boolean
  biker_phone_number: string
  biker_date_of_birth: string
  biker_address: string
  biker_email: string
  customer_first_name: string
  customer_last_name: string
  customer_is_active: boolean
  customer_gender: boolean
  customer_phone_number: string
  customer_date_of_birth: string
  customer_address: string
  customer_email: string
}
