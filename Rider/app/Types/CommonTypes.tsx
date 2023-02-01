export type Coordinates = {
  lat: number
  lng: number
}

export type Address = {
  originAddress: string
  destinationAddress: string
}

export type BasicUserDetail = {
  firstName: string
  gender: boolean
  lastName: string
  phoneNumber: string
}

export interface UserDetail extends BasicUserDetail {
  accountUsername: string
  address: string
  dateOfBirth: string
  totalTripCustomer?: number
  totalTripRider?: number
}

export type AddressAndCoordinates = {
  address: {
    addressOriginalLocation: string | undefined
    addressDestination: string | undefined
  }
  coordinates: {
    originalLat: number
    originalLng: number
    destinationLat: number
    destinationLng: number
  }
}
