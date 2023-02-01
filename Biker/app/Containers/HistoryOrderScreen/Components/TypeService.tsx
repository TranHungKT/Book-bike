import React from 'react'
import { View, Text } from 'react-native'

// Constant
import { PhaseBookingInRide } from '@/Constants/PhaseReduxConstants'

// Styles
import styles from './Styles/TypeServiceStyles'
import { Normalize } from '@/Themes'

// Svgs
import Delivery from '@/Svgs/Icons/deliveryMan.svg'

// Language
import { translate } from '@/Language'

type TypeServiceProps = {
  indexOfPhaseRide: number
  phaseBooking: string
}

const TypeService = (props: TypeServiceProps) => {
  const { indexOfPhaseRide, phaseBooking } = props

  const renderPhase = () => {
    switch (phaseBooking) {
      case PhaseBookingInRide.BIKER_WAITING:
        return translate('bikerCame')
      case PhaseBookingInRide.CONFIRM_RIDE:
        return translate('orderConfirm')
      case PhaseBookingInRide.WAIT_BIKER:
        return translate('orderSent')
      case PhaseBookingInRide.BIKER_RECEIVED_PACKAGE:
        return translate('bikerReceivedPackage')
      default:
        return
    }
  }

  const render = () => {
    if (indexOfPhaseRide === 0) {
      return (
        <>
          <Delivery
            width={Normalize(30)}
            height={Normalize(30)}
            style={styles.delivery}
          />
          <View>
            <Text style={styles.service}>{translate('serviceRide')}</Text>
            <Text numberOfLines={1} style={styles.serviceText}>
              {renderPhase()}
            </Text>
          </View>
        </>
      )
    } else {
      return (
        <>
          <Delivery
            width={Normalize(30)}
            height={Normalize(30)}
            style={styles.delivery}
          />

          <View>
            <Text style={styles.service}>{translate('serviceDelivery')}</Text>
            <Text numberOfLines={1} style={styles.serviceText}>
              {renderPhase()}
            </Text>
          </View>
        </>
      )
    }
  }

  return <View style={styles.container}>{render()}</View>
}

export default TypeService
