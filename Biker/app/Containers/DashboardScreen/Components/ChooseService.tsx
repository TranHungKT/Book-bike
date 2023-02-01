import React from 'react'
import { View } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import PhaseActions from '@/Redux/PhaseRedux'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Components
import Service from './Service'

// Constants
import {
  BEFORE_RIDE,
  PhaseBookingBeforeRide,
  SERVICE,
  PhaseBookingInRide
} from '@/Constants/PhaseReduxConstants'
import { BookingScreens, AppStacks } from '@/Constants/AppNavigationConstants'

// Styles
import styles from './Styles/ChooseServiceStyles'
import { Metrics } from '@/Themes'

// Svgs
import Motorbiking from '@/Svgs/Icons/motorbiking.svg'
import Package from '@/Svgs/Icons/package.svg'

const ChooseService = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const phase = useSelector((state: RootState) => state.phase.phase)

  const phaseBookingRider = useSelector(
    (state: RootState) => state.rideInfor.phaseBooking
  )

  const navigateToRide = () => {
    if (!BEFORE_RIDE.includes(phase)) {
      return navigation.navigate(AppStacks.BookingStack, {
        screen: BookingScreens.PhaseRenderScreen
      })
    }
    dispatch(PhaseActions.chooseService(SERVICE.RIDE))
    dispatch(PhaseActions.setPhase(PhaseBookingBeforeRide.CHOOSE_LOCATION))
  }

  const navigateToPackage = () => {
    if (!BEFORE_RIDE.includes(phase)) {
      return navigation.navigate(AppStacks.BookingStack, {
        screen: BookingScreens.PhaseRenderScreen
      })
    }
    dispatch(PhaseActions.chooseService(SERVICE.DELIVERY))
    navigation.navigate(AppStacks.BookingStack, {
      screen: BookingScreens.InforPackageScreen
    })
  }

  return (
    <View style={styles.container}>
      <Service
        svgImage={
          <Motorbiking
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        }
        content={'Ride'}
        circleStyle={styles.motobikingStyle}
        onPressFunction={navigateToRide}
        disable={phaseBookingRider in PhaseBookingInRide}
      />
      <Service
        svgImage={
          <Package
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        }
        content={'Delivery'}
        circleStyle={styles.pakageStyle}
        onPressFunction={navigateToPackage}
      />
    </View>
  )
}

export default ChooseService
