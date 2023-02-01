import React, { memo } from 'react'
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { BookingScreens } from '@/Constants/AppNavigationConstants'

// Styles
import styles from './Styles/RenderLocationStyles'
import { Metrics } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svg
import Location from '@/Svgs/Icons/location.svg'
import Destination from '@/Svgs/Icons/destination.svg'

type RenderLocationProps = {
  wrapperStyle?: ViewStyle
}

const RenderLocation = (props: RenderLocationProps) => {
  const navigation = useNavigation()

  const { wrapperStyle } = props

  const { addressDestination, addressOriginalLocation } = useSelector(
    (state: RootState) => state.map.addressAndCoordinates.address
  )

  const navigateListBikersScreen = () =>
    navigation.navigate(BookingScreens.SearchPlacesScreen)

  return (
    <View style={[styles.chooseLocationView, wrapperStyle]}>
      <TouchableOpacity
        style={[styles.chooseLocationButton, styles.seperate]}
        onPress={navigateListBikersScreen}
        activeOpacity={0.9}
      >
        <Location
          width={Metrics.defaultImageWidth}
          height={Metrics.defaultImageHeight}
        />

        <Text style={styles.locationText} numberOfLines={1}>
          {addressOriginalLocation}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.chooseLocationButton, styles.border]}
        onPress={navigateListBikersScreen}
        activeOpacity={0.9}
      >
        <Destination
          width={Metrics.defaultImageWidth}
          height={Metrics.defaultImageHeight}
        />
        {addressDestination ? (
          <Text style={styles.locationText} numberOfLines={1}>
            {addressDestination}
          </Text>
        ) : (
          <Text style={styles.whereToText}>{translate('whereTo')}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default memo(RenderLocation)
