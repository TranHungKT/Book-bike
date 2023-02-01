import React from 'react'
import { View, Text, ViewStyle } from 'react-native'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Components
import { LocationInfor } from './Components'

// Functions
import {
  getAddressSelector,
  getReceiverNameSelector
} from '@/Functions/Selector/ReSelectorFunctions'

// Styles
import styles from './Styles/TripDetailsStyles'

// Language
import { translate } from '@/Language'
import { Normalize } from '@/Themes'

// Svgs
import Location from '@/Svgs/Icons/location.svg'
import Destination from '@/Svgs/Icons/destination.svg'

type TripDetailsProps = {
  wrapperStyle?: ViewStyle
  indexOfPhaseRide: number
}

const TripDetails = (props: TripDetailsProps) => {
  const { wrapperStyle, indexOfPhaseRide } = props

  const address = useSelector(getAddressSelector)

  const sender = useSelector((state: RootState) => state.user.userDetail)

  const receiverName = useSelector(getReceiverNameSelector)

  const senderName = sender.firstName + ' ' + sender.lastName

  return (
    <View style={[styles.container, wrapperStyle]}>
      <Text style={styles.title}>{translate('tripDetails')}</Text>
      <View style={styles.tripView}>
        <LocationInfor
          image={<Location width={Normalize(25)} height={Normalize(25)} />}
          content={indexOfPhaseRide === 0 ? translate('pickup') : senderName}
          address={address?.address.addressOriginalLocation}
        />
        <View style={styles.line}>
          <Text style={styles.lineText}>|</Text>
          <Text style={styles.lineText}>|</Text>
          <Text style={styles.lineText}>|</Text>
          <Text style={styles.lineText}>|</Text>
        </View>
        <LocationInfor
          image={<Destination width={Normalize(25)} height={Normalize(25)} />}
          content={
            indexOfPhaseRide === 0
              ? translate('destinationPlace')
              : receiverName
          }
          address={address?.address.addressDestination}
        />
      </View>
    </View>
  )
}

export default TripDetails
