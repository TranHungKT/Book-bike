import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Components
import { BButton } from '@/Components'

// Functions
import CallFunction from '@/Functions/CallFunctions'

// Constants
import { SERVICE } from '@/Constants/PhaseRiderConstants'

// Styles
import styles from './Styles/RenderFooterStyles'
import { Metrics } from '@/Themes'

// Svgs
import PersonRaiseHand from '@/Svgs/Icons/personRaiseHand.svg'
import Phone from '@/Svgs/Icons/phoneBlack.svg'

type RenderFooterProps = {
  button: string
  order: string
  onPressFunction: () => void
}

const RenderFooter = (props: RenderFooterProps) => {
  const service = useSelector((state: RootState) => state.phaseRider.service)
  const phoneNumber = useSelector((state: RootState) => {
    if (service === SERVICE.RIDE) {
      return state.ride.customer?.phoneNumber
    }
    return state.ride.sender?.phoneNumber
  })

  const { button, order, onPressFunction } = props

  const callCustomer = () => {
    if (phoneNumber) {
      CallFunction(phoneNumber)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <View style={styles.blankView} />
        <View>
          <View style={styles.content}>
            <Text style={styles.distanceText}>2 min</Text>
            <PersonRaiseHand
              width={Metrics.defaultImageWidth}
              height={Metrics.defaultImageHeight}
            />
            <Text style={styles.distanceText}>0.5 Km</Text>
          </View>
          <Text style={styles.order}>{order}</Text>
        </View>
        <TouchableOpacity
          style={styles.callButton}
          onPress={callCustomer}
          activeOpacity={0.8}
        >
          <Phone
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        </TouchableOpacity>
      </View>
      <BButton
        content={button}
        buttonStyle={styles.buttonStyle}
        onPressButton={onPressFunction}
      />
    </View>
  )
}

export default RenderFooter
