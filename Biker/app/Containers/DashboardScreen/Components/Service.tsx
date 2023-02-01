import React from 'react'
import { View, Text, ViewStyle, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/ServiceStyles'

type ServiceProps = {
  svgImage: Element
  content: string
  circleStyle?: ViewStyle
  onPressFunction: () => void
  disable?: boolean
}

const Service = (props: ServiceProps) => {
  const { svgImage, content, circleStyle, onPressFunction, disable } = props
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPressFunction}
      disabled={disable}
    >
      <View
        style={[styles.iconView, circleStyle, disable && styles.disableView]}
      >
        {svgImage}
      </View>
      <Text style={[styles.content, disable && styles.disableContent]}>
        {content}
      </Text>
    </TouchableOpacity>
  )
}

export default Service
