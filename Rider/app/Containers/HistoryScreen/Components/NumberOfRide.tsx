import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/NumberOfRideStyles'

// Language
import { translate } from '@/Language'

type NumberOfRideProps = {
  numberOfRide: number
}

const NumberOfRide = (props: NumberOfRideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.numberOfRide} {translate('rides')}
      </Text>
    </View>
  )
}

export default NumberOfRide
