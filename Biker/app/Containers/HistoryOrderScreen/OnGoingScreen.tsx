import React from 'react'
import { ScrollView } from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import PhaseActions from '@/Redux/PhaseRedux'

// Components
import { RenderHistoryOnGoing } from './Components'

// Constants
import { PhaseBookingInRide } from '@/Constants/PhaseReduxConstants'

const OnGoingScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const rideInfor = useSelector((state: RootState) => state.rideInfor)

  const pacakgeInfors = useSelector((state: RootState) => state.package.package)

  const navigateToPhaseScreen = (index: number) => () => {
    dispatch(PhaseActions.setIndexOfPhaseRide(index))
    navigation.navigate('OrderTrackingScreen')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {rideInfor.phaseBooking in PhaseBookingInRide && (
        <RenderHistoryOnGoing
          onPressFunction={navigateToPhaseScreen(0)}
          phaseBooking={rideInfor.phaseBooking}
          indexOfPhaseRide={0}
        />
      )}

      {pacakgeInfors.map((packageInfor, index) => {
        if (packageInfor.phaseBooking in PhaseBookingInRide) {
          return (
            <RenderHistoryOnGoing
              key={index}
              onPressFunction={navigateToPhaseScreen(index.valueOf() + 1)}
              phaseBooking={packageInfor.phaseBooking}
              indexOfPhaseRide={index.valueOf() + 1}
            />
          )
        }
        return null
      })}
    </ScrollView>
  )
}

export default OnGoingScreen
