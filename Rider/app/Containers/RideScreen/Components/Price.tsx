import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import SocketActions from '@/Redux/SocketRedux'

// Styles
import styles from './Styles/PriceStyles'
import { Normalize } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svgs
import Cancel from '@/Svgs/Icons/cancel.svg'
import { SERVICE } from '@/Constants/PhaseRiderConstants'

type PriceProps = {
  navigateBack: () => void
}

const Price = (props: PriceProps) => {
  const dispatch = useDispatch()

  const { rideHash, customer, price } = useSelector(
    (state: RootState) => state.ride
  )

  const service = useSelector((state: RootState) => state.phaseRider.service)

  const cancelRide = () => {
    dispatch(SocketActions.emitCancelRide(customer?.phoneNumber, rideHash))
    props.navigateBack()
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        {service === SERVICE.RIDE ? (
          <></>
        ) : (
          <Text style={styles.deliveryText}>{translate('delivery')}</Text>
        )}
        <Text style={styles.unitText}>đ</Text>
        <Text style={styles.priceText}>{price}</Text>
        <Text style={styles.postageText}>{translate('postage')}</Text>
      </View>
      <TouchableOpacity onPress={cancelRide}>
        <Cancel
          height={Normalize(20)}
          width={Normalize(20)}
          style={styles.cancel}
          onPress={cancelRide}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Price
