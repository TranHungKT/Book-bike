import { PhaseRider } from '@/Constants/PhaseRiderConstants'
import {
  AddressAndCoordinates,
  BasicUserDetail,
  HistoryByDate,
  ReportHistory,
  RideInforState,
  UserDetail
} from '@/Types'
import moment from 'moment'
export const mapHistoryToFrontEnd = (response: any): HistoryByDate => {
  const {
    origin_lat,
    origin_lng,
    destination_lng,
    destination_lat,
    address_origin,
    address_destination,
    is_ride_confirmed,
    is_ride_cancelled,
    price,
    ride_hash,
    date,
    created_date,

    customer_first_name,
    customer_last_name,
    customer_is_active,
    customer_gender,
    customer_phone_number,
    customer_date_of_birth,
    customer_address,
    customer_email
  } = response

  return {
    originLat: origin_lat,
    originLng: origin_lng,
    destinationLat: destination_lat,
    destinationLng: destination_lng,
    addressOrigin: address_origin,
    addressDestination: address_destination,
    isRideConfirmed: is_ride_confirmed,
    isRideCancelled: is_ride_cancelled,
    price,
    rideHash: ride_hash,
    date,
    createdDate: created_date,
    customerFirstName: customer_first_name,
    customerLastName: customer_last_name,
    customerIsActive: customer_is_active,
    customerGender: customer_gender,
    customerPhoneNumber: customer_phone_number,
    customerDateOfBirth: customer_date_of_birth,
    customerAddress: customer_address,
    customerEmail: customer_email
  }
}

export const mapReportToFrontEnd = (response: any): ReportHistory => {
  const { date, amt, count_success, count_cancel } = response
  return {
    date: moment(new Date(date)).format('D/MM'),
    amount: amt,
    countSuccess: count_success,
    countCancel: count_cancel
  }
}

export const mapUserDetailToFrontEnd = (response: any): UserDetail => {
  const { user_info, total_trip_biker, total_trip_customer } = response

  const {
    phone_number,
    email,
    first_name,
    last_name,
    female,
    date_of_birth,
    address
  } = user_info

  return {
    accountUsername: email,
    address,
    dateOfBirth: date_of_birth,
    firstName: first_name,
    lastName: last_name,
    gender: female,
    phoneNumber: phone_number,
    totalTripCustomer: total_trip_biker,
    totalTripRider: total_trip_customer
  }
}

export const mapRideDataToFrontEnd = (response: any): RideInforState => {
  const { coordinates, address, customer, rideHash, price } = response

  const { phone_number, first_name, last_name, female } = customer

  const addressAndCoordinates = mapAddressAndCoordinate(address, coordinates)

  return {
    addressAndCoordinates,
    customer: {
      phoneNumber: phone_number,
      firstName: first_name,
      lastName: last_name,
      gender: female
    },
    rideHash,
    price
  }
}

export const mapDeliveryDataToFrontEnd = (response: any): RideInforState => {
  const { coordinates, address, sender, receiver, price, deliveryHash } =
    response

  const { phone_number, first_name, last_name, female } = sender.userDetail

  const addressAndCoordinates = mapAddressAndCoordinate(address, coordinates)

  return {
    addressAndCoordinates,
    sender: {
      phoneNumber: phone_number,
      firstName: first_name,
      lastName: last_name,
      gender: female
    },
    package: response.package,
    receiver: receiver,
    rideHash: deliveryHash,
    price
  }
}

export const mapAddressAndCoordinate = (
  address: any,
  coordinates: any
): AddressAndCoordinates => {
  const { origin, destination } = coordinates
  return {
    address: {
      addressDestination: address.destination,
      addressOriginalLocation: address.origin
    },
    coordinates: {
      originalLat: origin.lat,
      originalLng: origin.lng,
      destinationLat: destination.lat,
      destinationLng: destination.lng
    }
  }
}

export const mapDeliveryStateAfterRefresh = ({
  isDeliveryConfirmed,
  isDeliveryCancelled,
  PackageData
}: any) => {
  let tempPhaseBooking = ''
  if (isDeliveryCancelled === true) {
    tempPhaseBooking = PhaseRider.REJECT_RIDE
  } else {
    if (isDeliveryConfirmed === true) {
      if (!!PackageData.bikerReceivedPackageProof) {
        tempPhaseBooking = PhaseRider.GO_TO_DESTINATION
      } else {
        tempPhaseBooking = PhaseRider.PICK_UP_CUSTOMER
      }
    } else {
      tempPhaseBooking = PhaseRider.GET_A_RIDE
    }
  }
  return tempPhaseBooking
}

type State = {
  isRideCancelled: boolean
  isRideConfirmed: boolean
  haveBikerArrived: boolean
}

export const mapRideStateAfterRefresh = ({
  isRideCancelled,
  isRideConfirmed,
  haveBikerArrived
}: State) => {
  let tempPhaseBooking = ''
  if (isRideCancelled === true) {
    tempPhaseBooking = PhaseRider.REJECT_RIDE
  } else {
    if (isRideConfirmed === true) {
      if (!haveBikerArrived) {
        tempPhaseBooking = PhaseRider.PICK_UP_CUSTOMER
      } else {
        tempPhaseBooking = PhaseRider.GO_TO_DESTINATION
      }
    } else {
      tempPhaseBooking = PhaseRider.GET_A_RIDE
    }
  }
  return tempPhaseBooking
}

export const mapSenderStateToFrontEnd = (sender: any): BasicUserDetail => {
  const { first_name, last_name, female, phone_number } = sender.userDetail

  return {
    firstName: first_name,
    lastName: last_name,
    gender: female,
    phoneNumber: phone_number
  }
}
