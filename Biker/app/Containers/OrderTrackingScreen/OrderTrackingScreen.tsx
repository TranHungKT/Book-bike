import React, { useRef } from 'react'
import { StatusBar, ScrollView, View } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel'
// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Components
import { BButton, BMap, Header, TripDetails } from '@/Components'
import {
  RideInfor,
  DriverInfor,
  Status,
  PaymentDetails,
  RateStar
} from './Components'

// Style
import styles from './Styles/OrderTrackingScreenStyles'
import { Metrics } from '@/Themes'

const OrderTrackingScreen = () => {
  const indexOfPhaseRide = useSelector(
    (state: RootState) => state.phase.indexOfPhaseRide
  )

  const refPanel = useRef<SlidingUpPanel>(null)

  return (
    <View style={styles.mainContainer}>
      <BMap indexToTracking={indexOfPhaseRide} />
      <SlidingUpPanel
        ref={refPanel}
        draggableRange={{
          top: Metrics.screenHeight,
          bottom: Metrics.screenHeight / 3
        }}
        containerStyle={styles.slideStyle}
      >
        <>
          <RideInfor />
          <DriverInfor />
          <RateStar />
          <TripDetails
            indexOfPhaseRide={indexOfPhaseRide}
            wrapperStyle={styles.wrapperTripDetails}
          />
          <Status />
          <PaymentDetails />
        </>
      </SlidingUpPanel>
    </View>
  )
}

export default OrderTrackingScreen
