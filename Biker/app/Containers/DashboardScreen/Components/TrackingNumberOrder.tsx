import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Constants
import { PhaseBookingInRide } from '@/Constants/PhaseReduxConstants'

// Styles
import styles from './Styles/TrackingNumberOrderStyles'
import { translate } from '@/Language'

// Svgs
import Right from '@/Svgs/Icons/right.svg'
import { Normalize } from '@/Themes'

const TrackingNumberOrder = () => {
  const navigation = useNavigation()

  const [numberOfDelivery, setNumberOfDelivery] = useState(0)

  const phaseBookingRider = useSelector(
    (state: RootState) => state.rideInfor.phaseBooking
  )

  const packageInfors = useSelector((state: RootState) => state.package.package)

  const navigateToHistory = () =>
    navigation.navigate('SettingStack', { screen: 'OrderHistoryScreen' })

  useEffect(() => {
    const length = packageInfors.filter(
      (packageInfor) => packageInfor.phaseBooking in PhaseBookingInRide
    ).length

    setNumberOfDelivery(length)
  }, [packageInfors])

  return phaseBookingRider in PhaseBookingInRide || numberOfDelivery > 0 ? (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToHistory}
      activeOpacity={0.8}
    >
      <View>
        {phaseBookingRider in PhaseBookingInRide || numberOfDelivery > 0 ? (
          <Text style={styles.text}>{translate('youHavingOrder')}</Text>
        ) : null}
      </View>
      <Right
        width={Normalize(15)}
        height={Normalize(15)}
        style={styles.right}
      />
    </TouchableOpacity>
  ) : (
    <></>
  )
}

export default TrackingNumberOrder
