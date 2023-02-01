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
export const RIDE_IN_PROGRESS_EVENT: RideSocketEvent = 'ride:in_progress'
export const RIDE_BIKER_WAITING: RideSocketEvent = 'ride:biker_waiting'

export type GeneralSocketEvent =
  | 'connection'
  | 'refresh_token'
  | 'invalid_token'
  | 'disconnect'
  | 'location_update'
  | 'status_sync'
  | 'heartbeat:start'
  | 'heartbeat:stop'

export const CONNECT_EVENT: GeneralSocketEvent = 'connection'
export const HEARTBEAT_EVENT: GeneralSocketEvent = 'heartbeat:start'
export const REFRESH_TOKEN_EVENT: GeneralSocketEvent = 'refresh_token'
export const INVALID_TOKEN_EVENT: GeneralSocketEvent = 'invalid_token'
export const DISCONNECT_EVENT: GeneralSocketEvent = 'disconnect'
export const LOCATION_UPDATE: GeneralSocketEvent = 'location_update'
export const STATUS_SYNC: GeneralSocketEvent = 'status_sync'
export const STOP_HEARTBEAT_EVENT: GeneralSocketEvent = 'heartbeat:stop'

export type DeliverySocketEvent =
  | 'found_bikers'
  | 'delivery:booked'
  | 'delivery:biker_chosen'
  | 'delivery:confirmed'
  | 'delivery:biker_waiting'
  | 'delivery:received_package'
  | 'delivery:complete'

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
  | 'GENERIC_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER'

export const GENERIC_ERROR: ErrorType = 'GENERIC_ERROR'
export const AUTHENTICATION_ERROR: ErrorType = 'AUTHENTICATION_ERROR'
export const TOKEN_EXPIRED_ERROR: ErrorType = 'TOKEN_EXPIRED'
export const TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER_ERROR: ErrorType =
  'TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER'
