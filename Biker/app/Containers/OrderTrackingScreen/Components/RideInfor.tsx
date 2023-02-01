import React from 'react'
import { View, Text } from 'react-native'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Components
import { Circle } from './SmallComponents'

// Functions
import { getRideHashSelector } from '@/Functions/Selector/ReSelectorFunctions'

// Styles
import styles from './Styles/RideInforStyles'
import { Normalize } from '@/Themes'

// Svgs
import Motorbiking from '@/Svgs/Icons/motorbiking.svg'
import { translate } from '@/Language'

const RideInfor = () => {
  const indexOfPhaseRide = useSelector(
    (state: RootState) => state.phase.indexOfPhaseRide
  )

  const rideHash = useSelector(getRideHashSelector)

  const renderService = () => {
    return (
      <Text style={styles.serviceText}>
        {indexOfPhaseRide === 0
          ? translate('serviceRide').toUpperCase()
          : translate('serviceDelivery').toUpperCase()}
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      <Circle
        image={<Motorbiking width={Normalize(25)} height={Normalize(25)} />}
      />
      <View style={styles.infor}>
        {renderService()}
        <Text>
          {translate('orderNumber')}: {rideHash}
        </Text>
      </View>
    </View>
  )
}

export default RideInfor
