export type RideSocketEvent =
  | 'ride:booked'
  | 'ride:found_bikers'
  | 'ride:biker_chosen'
  | 'ride:confirmed'
  | 'ride:cancelled'
  | 'ride:complete'
  | 'ride:in_progress'
  | 'ride:biker_waiting'

export const RIDE_BOOKED_EVENT: RideSocketEvent = 'ride:booked'
export const RIDE_BIKER_CHOSEN_EVENT: RideSocketEvent = 'ride:biker_chosen'
export const RIDE_CONFIRMED_EVENT: RideSocketEvent = 'ride:confirmed'
export const RIDE_CANCELLED_EVENT: RideSocketEvent = 'ride:cancelled'
export const RIDE_COMPLETE_EVENT: RideSocketEvent = 'ride:complete'
export const RIDE_BIKER_WAITING: RideSocketEvent = 'ride:biker_waiting'

export type GeneralSocketEvent = 'invalid_token' | 'location_update'

export const INVALID_TOKEN_EVENT: GeneralSocketEvent = 'invalid_token'
export const LOCATION_UPDATE: GeneralSocketEvent = 'location_update'

export type DeliverySocketEvent =
  | 'found_bikers'
  | 'delivery:booked'
  | 'delivery:biker_chosen'
  | 'delivery:confirmed'
  | 'delivery:biker_waiting'
  | 'delivery:received_package'
  | 'delivery:complete'

export const FOUND_BIKERS_EVENT: DeliverySocketEvent = 'found_bikers'
export const DELIVERY_BOOKING: DeliverySocketEvent = 'delivery:booked'
export const DELIVERY_CONFIRMED_EVENT: DeliverySocketEvent =
  'delivery:confirmed'
export const DELIVERY_BIKER_CHOSEN_EVENT: DeliverySocketEvent =
  'delivery:biker_chosen'
export const DELIVERY_BIKER_WAITING: DeliverySocketEvent =
  'delivery:biker_waiting'
export const BIKER_RECEIVED_PACKAGE: DeliverySocketEvent =
  'delivery:received_package'
export const DELIVERY_COMPLETE_EVENT: DeliverySocketEvent = 'delivery:complete'

export type ErrorType =
  | 'RETRY_FIND_BIKER'
  | 'FIND_BIKER_NO_RESULTS'
  | 'GENERIC_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER'

export const RETRY_FIND_BIKER: ErrorType = 'RETRY_FIND_BIKER'
export const FIND_BIKER_NO_RESULTS: ErrorType = 'FIND_BIKER_NO_RESULTS'
export const GENERIC_ERROR: ErrorType = 'GENERIC_ERROR'
export const AUTHENTICATION_ERROR: ErrorType = 'AUTHENTICATION_ERROR'
export const TOKEN_EXPIRED_ERROR: ErrorType = 'TOKEN_EXPIRED'
export const TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER_ERROR: ErrorType =
  'TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER'
