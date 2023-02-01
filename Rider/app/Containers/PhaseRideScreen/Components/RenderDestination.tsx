import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/RenderDestinationStyles'
import { Metrics, Normalize } from '@/Themes'

// Svgs
import PersonRaiseHand from '@/Svgs/Icons/personRaiseHandWhite.svg'
import Destination from '@/Svgs/Icons/destination.svg'

type RenderDestinationProps = {
  destination?: string
  type: number
}

const RenderDestination = (props: RenderDestinationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        {props.type === 1 ? (
          <PersonRaiseHand
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        ) : (
          <Destination width={Normalize(20)} height={Normalize(20)} />
        )}
      </View>

      <Text style={styles.destinationText}>{props.destination}</Text>
    </View>
  )
}

export default RenderDestination
