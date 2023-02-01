import React from 'react'
import { View, Text, ViewStyle, TextStyle } from 'react-native'

// Styles
import styles from './Styles/LocationStyles'
import { Metrics } from '@/Themes'

// Svgs
import LocationImage from '@/Svgs/Icons/location.svg'
import Destination from '@/Svgs/Icons/destination.svg'

type LocationProps = {
  origin: string
  destination: string
  inforStyle?: ViewStyle
  textStyle?: TextStyle
  lineStyle?: ViewStyle
}

const Location = (props: LocationProps) => {
  const { origin, destination, inforStyle, textStyle, lineStyle } = props

  return (
    <>
      <View style={[styles.infor, inforStyle]}>
        <LocationImage
          height={Metrics.defaultImageHeight}
          width={Metrics.defaultImageWidth}
        />
        <Text style={[styles.addressText, textStyle]}>{origin}</Text>
      </View>
      <View style={[styles.line, lineStyle]} />
      <View style={[styles.infor, inforStyle]}>
        <Destination
          height={Metrics.defaultImageHeight}
          width={Metrics.defaultImageWidth}
        />
        <Text style={[styles.addressText, textStyle]}>{destination}</Text>
      </View>
    </>
  )
}

export default Location
