import {
  UserDetail,
  PayloadFoundBikers,
  ReportHistory,
  HistoryByDate
} from '@/Types'

import { PhaseBookingInRide } from '@/Constants/PhaseReduxConstants'

export const mapUserDetailToFrontEnd = (response: any): UserDetail => {
  const { user_info, total_trip_biker, total_trip_customer } = response

  const {
    phone_number,
    email,
    first_name,
    last_name,
    female,
    date_of_birth,
    address,
    created_date
  } = user_info

  return {
    accountUsername: email,
    address,
    dateOfBirth: date_of_birth,
    firstName: first_name,
    lastName: last_name,
    gender: female,
    phoneNumber: phone_number,
    createdDate: created_date,
    totalTripCustomer: total_trip_biker,
    totalTripRider: total_trip_customer
  }
}

export const mapBikerFoundResultToFrontEnd = (
  response: any
): PayloadFoundBikers => {
  const { phone, userDetail, extraFee, realDistance, location } = response
  const { phone_number, first_name, last_name, female } = userDetail
  return {
    phone,
    userDetail: {
      firstName: first_name,
      lastName: last_name,
      gender: female,
      phoneNumber: phone_number
    },
    location,
    extraFee: Math.round(extraFee / 1000),
    realDistance: realDistance / 1000
  }
}
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
    date,
    amount: amt,
    countSuccess: count_success,
    countCancel: count_cancel
  }
}

export const mapDataUserToFrontEnd = (userDetail: any): UserDetail => {
  const {
    phone_number,
    email,
    first_name,
    last_name,
    female,
    date_of_birth,
    address,
    created_date
  } = userDetail

  return {
    accountUsername: email,
    address,
    dateOfBirth: date_of_birth,
    firstName: first_name,
    lastName: last_name,
    gender: female,
    phoneNumber: phone_number,
    createdDate: created_date
  }
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
    tempPhaseBooking = PhaseBookingInRide.REJECT_RIDE
  } else {
    if (isRideConfirmed === true) {
      if (!haveBikerArrived) {
        tempPhaseBooking = PhaseBookingInRide.CONFIRM_RIDE
      } else {
        tempPhaseBooking = PhaseBookingInRide.BIKER_WAITING
      }
    } else {
      tempPhaseBooking = PhaseBookingInRide.WAIT_BIKER
    }
  }
  return tempPhaseBooking
}

export const mapDeliveryStateAfterRefresh = ({
  isDeliveryConfirmed,
  isDeliveryCancelled,
  PackageData
}: any) => {
  let tempPhaseBooking = ''
  if (isDeliveryCancelled === true) {
    tempPhaseBooking = PhaseBookingInRide.REJECT_RIDE
  } else {
    if (isDeliveryConfirmed === true) {
      if (!!PackageData.bikerReceivedPackageProof) {
        tempPhaseBooking = PhaseBookingInRide.BIKER_RECEIVED_PACKAGE
      } else {
        tempPhaseBooking = PhaseBookingInRide.CONFIRM_RIDE
      }
    } else {
      tempPhaseBooking = PhaseBookingInRide.WAIT_BIKER
    }
  }
  return tempPhaseBooking
}
