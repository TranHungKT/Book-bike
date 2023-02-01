import React from 'react'
import { View, Text, TextStyle } from 'react-native'

// Style
import styles from './Styles/FareStyles'

type FareProps = {
  title: string
  price: string
  textStyle?: TextStyle
}

const Fare = (props: FareProps) => {
  const { title, price, textStyle } = props
  return (
    <View style={styles.container}>
      <Text style={textStyle}>{title}</Text>
      <Text style={textStyle}>{price}</Text>
    </View>
  )
}

export default Fare
