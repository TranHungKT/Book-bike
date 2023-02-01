import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import SocketActions from '@/Redux/SocketRedux'
import PhaseActions from '@/Redux/PhaseRiderRedux'

// Components
import { Location } from '@/Components'

// Constants
import { PhaseRider, SERVICE } from '@/Constants/PhaseRiderConstants'

// Styles
import styles from './Styles/RideInforStyles'

// Language
import { translate } from '@/Language'

type RideInforProps = {
  navigateToPhaseRider: () => void
}

const RideInfor = (props: RideInforProps) => {
  const dispatch = useDispatch()

  const { rideHash, customer, addressAndCoordinates, sender } = useSelector(
    (state: RootState) => state.ride
  )

  const service = useSelector((state: RootState) => state.phaseRider.service)

  const { addressOriginalLocation, addressDestination } =
    addressAndCoordinates.address

  const confirmRide = () => {
    if (service === SERVICE.RIDE) {
      dispatch(SocketActions.emitConfirmRide(customer?.phoneNumber, rideHash))
    } else {
      dispatch(SocketActions.emitConfirmDelivery(sender?.phoneNumber, rideHash))
    }
    dispatch(PhaseActions.setPhaseRider(PhaseRider.PICK_UP_CUSTOMER))
    props.navigateToPhaseRider()
  }
  return (
    <View style={styles.mainContainer}>
      {addressDestination && addressOriginalLocation && (
        <Location
          origin={addressOriginalLocation}
          destination={addressDestination}
        />
      )}
      <TouchableOpacity style={styles.confirmButton} onPress={confirmRide}>
        <Text style={styles.confirmText}>{translate('confirm')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RideInfor
