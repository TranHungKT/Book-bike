export type Coordinates = {
  lat: number
  lng: number
}

export type Address = {
  originAddress: string
  destinationAddress: string
}

export type BikerDetail = {
  firstName: string
  gender: boolean
  lastName: string
  phoneNumber: string
}

export interface UserDetail extends BikerDetail {
  accountUsername: string
  address: string
  dateOfBirth: string

  createdDate: string
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

export type ReceiverInfor = {
  phoneNumber: string
  name: string
}

export interface IListMarkers extends Coordinates {
  type: number // 0 is original, 1 is destination, 2 is biker
}
