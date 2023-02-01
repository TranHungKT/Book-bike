import React from 'react'
import { View, Linking, TouchableOpacity, Text } from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParams } from '@/Navigation/AppNavigationType'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import PhaseRiderActions from '@/Redux/PhaseRiderRedux'
import SocketActions from '@/Redux/SocketRedux'

// Components
import { BMap } from '@/Components'
import { RenderDestination, RenderFooter } from './Components'

// Constants
import { PhaseRider, SERVICE } from '@/Constants/PhaseRiderConstants'

// Styles
import styles from './Styles/PhaseRideScreenStyles'
import { Normalize } from '@/Themes'

// Svgs
import Navigation from '@/Svgs/Icons/navigation.svg'

type PhaseRideScreenNavigationProp = StackNavigationProp<
  MainStackParams,
  'PhaseRideScreen'
>

const PhaseRideScreen = () => {
  const navigation = useNavigation<PhaseRideScreenNavigationProp>()

  const dispatch = useDispatch()
  const service = useSelector((state: RootState) => state.phaseRider.service)

  const { phaseRider } = useSelector((state: RootState) => state.phaseRider)

  const { addressDestination, addressOriginalLocation } = useSelector(
    (state: RootState) => state.ride.addressAndCoordinates.address
  )

  const coordinates = useSelector(
    (state: RootState) => state.ride.addressAndCoordinates.coordinates
  )

  const phoneNumber = useSelector((state: RootState) => {
    if (service === SERVICE.RIDE) {
      return state.ride.customer?.phoneNumber
    }
    return state.ride.sender?.phoneNumber
  })

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

  const rideHash = useSelector((state: RootState) => state.ride.rideHash)

  const googleMapOpenUrl = (latitude: number, longitude: number) => {
    const latLng = `${latitude},${longitude}`
    return `google.navigation:q=${latLng}`
  }

  const navigateByGGMap = () => {
    if (phaseRider === PhaseRider.PICK_UP_CUSTOMER) {
      const { originalLat, originalLng } = coordinates
      Linking.openURL(googleMapOpenUrl(originalLat, originalLng))
    } else {
      const { destinationLat, destinationLng } = coordinates
      if (destinationLat && destinationLng) {
        Linking.openURL(googleMapOpenUrl(destinationLat, destinationLng))
      }
    }
  }

  const navigateToGetPackageProofScreen = () =>
    navigation.navigate('GetPackageProofScreen')

  const dispatchStart = () => {
    // Move from arrived state to start state

    // Notify customer that rider arrived
    if (service === SERVICE.RIDE) {
      dispatch(SocketActions.emitBikerWaiting(rideHash))
      dispatch(PhaseRiderActions.setPhaseRider(PhaseRider.GO_TO_DESTINATION))
    } else {
      dispatch(SocketActions.emitDeliveryBikerWaiting(rideHash))

      // With service delivery, driver need to
      // go to phase get package (Take picture) before go to destination

      dispatch(PhaseRiderActions.setPhaseRider(PhaseRider.GET_PACKAGE))
      navigateToGetPackageProofScreen()
    }
  }
  const dispatchFinish = () =>
    dispatch(PhaseRiderActions.setPhaseRider(PhaseRider.FINISH_RIDE))

  const confirmComplete = () => {
    if (service === SERVICE.RIDE) {
      dispatch(SocketActions.emitCompleteRide(phoneNumber, rideHash))
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'PayScreen'
          }
        ]
      })
    } else {
      navigation.navigate('DeliverPackageProofScreen')
    }
  }

  const renderFooter = () => {
    switch (phaseRider) {
      case PhaseRider.PICK_UP_CUSTOMER:
        // case PhaseRider.GET_PACKAGE:
        return (
          <RenderFooter
            order={`Get package from ${firstName + ' ' + lastName}`}
            button={'arrived'}
            onPressFunction={dispatchStart}
          />
        )
      case PhaseRider.GO_TO_DESTINATION:
        return (
          <RenderFooter
            order={'Arrived destination'}
            button={'start'}
            onPressFunction={dispatchFinish}
          />
        )
      case PhaseRider.FINISH_RIDE:
        return (
          <RenderFooter
            order={'Arrived destination'}
            button={'finish'}
            onPressFunction={confirmComplete}
          />
        )
      default:
        return
    }
  }

  const renderDestination = () => {
    switch (phaseRider) {
      case PhaseRider.PICK_UP_CUSTOMER:
      case PhaseRider.GET_PACKAGE:
        return (
          <RenderDestination destination={addressOriginalLocation} type={1} />
        )
      case PhaseRider.GO_TO_DESTINATION:
        return <RenderDestination destination={addressDestination} type={2} />
      case PhaseRider.FINISH_RIDE:
        return <RenderDestination destination={addressDestination} type={2} />
      default:
        return
    }
  }

  return (
    <View style={styles.mainContainer}>
      {renderDestination()}
      <TouchableOpacity style={styles.navigation} onPress={navigateByGGMap}>
        <Navigation width={Normalize(20)} height={Normalize(20)} />
        <Text style={styles.navigateText}>Navigate</Text>
      </TouchableOpacity>
      <BMap type={1} />
      {renderFooter()}
    </View>
  )
}

export default PhaseRideScreen
