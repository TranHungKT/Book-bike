import React from 'react'
import { View, ViewStyle } from 'react-native'

// Style
import styles from './Styles/CircleStyles'

type CircleProps = {
  image: Element
  circleStyle?: ViewStyle
}

const Circle = (props: CircleProps) => {
  const { image, circleStyle } = props

  return <View style={[styles.container, circleStyle]}>{image}</View>
}

export default Circle
