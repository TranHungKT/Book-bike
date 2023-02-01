import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Functions
import Call from '@/Functions/CallFunctions'

// Styles
import styles from './Styles/CustomerInforStyles'
import { Metrics } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svgs
import Customer from '@/Svgs/Icons/customer.svg'
import Phone from '@/Svgs/Icons/phone.svg'
import { SERVICE } from '@/Constants/PhaseRiderConstants'

const CustomerInfor = () => {
  // This data will need to depend on service
  const service = useSelector((state: RootState) => state.phaseRider.service)

  const firstName = useSelector((state: RootState) => {
    if (service === SERVICE.RIDE) {
      return state.ride.customer?.firstName
    }
    return state.ride.sender?.firstName
  })

  const lastName = useSelector((state: RootState) => {
    if (service === SERVICE.RIDE) {
      return state.ride.customer?.lastName
    }
    return state.ride.sender?.lastName
  })

  const phoneNumber = useSelector((state: RootState) => {
    if (service === SERVICE.RIDE) {
      return state.ride.customer?.phoneNumber
    }
    return state.ride.sender?.phoneNumber
  })

  const callCustomer = (phoneNumber: string) => () => Call(phoneNumber)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inforView}>
        <Customer
          width={Metrics.defaultImageWidth}
          height={Metrics.defaultImageHeight}
        />
        <View style={styles.infor}>
          <Text style={styles.nameText}>
            {translate('name')}: {firstName + ' ' + lastName}
          </Text>
          <Text style={styles.phoneText}>{phoneNumber}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={callCustomer(phoneNumber || '0982336217')}>
        <Phone
          width={Metrics.defaultImageWidth}
          height={Metrics.defaultImageHeight}
        />
      </TouchableOpacity>
    </View>
  )
}

export default CustomerInfor
