import {
  AddressAndCoordinates,
  BasicUserDetail,
  UserDetail
} from './CommonTypes'

type fetchingErrorType = null | undefined | string
type Coordinates = {
  lng: number
  lat: number
}

export type AuthState = {
  fetchingSignInRequest: boolean
  errorSignIn: fetchingErrorType

  fetchingSignUpRequest: boolean
  errorSignUp: fetchingErrorType

  otpToken: string

  fetchingVerifyRequest: boolean
  errorVerify: fetchingErrorType
  isBiker: boolean | null

  fetchingRefreshToken: boolean
  errorRefreshToken: fetchingErrorType

  accessToken: string
  refreshToken: string

  fetchingSignUpDriver: boolean
  errorSignUpDriver: fetchingErrorType

  userName: string
  fullName: string
  type: number
}

export type PhaseRiderState = {
  phaseRider: string
  service: string

  fetchingRequestFindBikerAfterQuit: boolean
  errorRequestFindBikerAfterQuit: fetchingErrorType
}

export type PackageState = {
  deliverySuccessProof: string | null
  bikerReceivedPackageProof: string | null
  senderProof: string | null
  category: number
  weight: number
  owner: string
}

export type RideInforState = {
  addressAndCoordinates: AddressAndCoordinates

  customer?: BasicUserDetail
  sender?: BasicUserDetail
  receiver?: {
    phone: string
    name: string
  }
  package?: PackageState

  rideHash: string
  price: number
}

export type DeliveryInforState = {
  rideHash: string
  price: number
}

export type SocketState = {
  isInitSocket: boolean
  genericError: fetchingErrorType

  isEmitHeartbeat: boolean

  currentLocation: Coordinates
}

export type rideHistoryData = {
  time: Date
  destination: string
  price: string
}

export type HistoryByDay = {
  day: Date
  revenue: string
  numberOfRide: number
  rideData: rideHistoryData[]
}

export type HistoryByWeek = {
  day: Date
  revenure: string
}

export type LoadedData = {
  day: Date
  index: number
}

// Server of DU
export type HistoryByDate = {
  originLng: number
  originLat: number
  destinationLng: number
  destinationLat: number
  addressOrigin: string
  addressDestination: string
  isRideConfirmed: boolean
  isRideCancelled: boolean
  price: number
  rideHash: string
  date: string
  createdDate: string
  // bikerFirstName: string
  // bikerIsActive: boolean
  // bikerLastName: string
  // bikerGender: boolean
  // bikerPhoneNumber: string
  // bikerDateOfBirth: string
  // bikerAddress: string
  // bikerEmail: string
  customerFirstName: string
  customerLastName: string
  customerIsActive: boolean
  customerGender: boolean
  customerPhoneNumber: string
  customerDateOfBirth: string
  customerAddress: string
  customerEmail: string
}

export type ReportHistory = {
  date: string
  amount: number
  countSuccess: number
  countCancel: number
}

// ---------------------------------------------------

export type HistoryState = {
  fetchingHistory: boolean
  errorFetchingHistory: fetchingErrorType
  history: HistoryByDate[][]
  historyRequested: string[]

  fetchingReport: boolean
  errorFetchingReport: fetchingErrorType
  report: ReportHistory[]
}

export type UserState = {
  fetchingGetUserDetail: boolean
  errorGetUserDetail: fetchingErrorType

  userDetail: UserDetail

  userAgent: string
}

export type SignUpDriverState = {
  numberLicense: string
  numberID: string
  // dateCreated: string,
  // address: string,
  // place: string,
  // outDate: string
  licensePlate: string
  // brand?: string,
  // dateManufacture?: string
  vehicleIssue: string
}

export interface RootState {
  auth: AuthState
  phaseRider: PhaseRiderState
  socket: SocketState
  history: HistoryState
  user: UserState
  ride: RideInforState
  delivery: DeliveryInforState
  signUpDriver: SignUpDriverState
}
