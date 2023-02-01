import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/PriceInforStyles'

type PriceInforProps = {
  title: string
  price: string
}

const PriceInfor = (props: PriceInforProps) => {
  const { title, price } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  )
}

export default PriceInfor
