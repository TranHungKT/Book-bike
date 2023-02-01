import React from 'react'
import { TouchableOpacity } from 'react-native'

// Components
import { TripDetails } from '@/Components'
import TypeService from './TypeService'

// Styles
import styles from './Styles/RenderHistoryOnGoingStyles'

type RenderHistoryOnGoingProps = {
  phaseBooking: string
  onPressFunction: () => void
  indexOfPhaseRide: number
}

const RenderHistoryOnGoing = (props: RenderHistoryOnGoingProps) => {
  const { phaseBooking, onPressFunction, indexOfPhaseRide } = props

  return (
    <TouchableOpacity style={styles.container} onPress={onPressFunction}>
      <TypeService
        phaseBooking={phaseBooking}
        indexOfPhaseRide={indexOfPhaseRide}
      />
      <TripDetails
        indexOfPhaseRide={indexOfPhaseRide}
        wrapperStyle={styles.wrapperStyle}
      />
    </TouchableOpacity>
  )
}

export default RenderHistoryOnGoing
