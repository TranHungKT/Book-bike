import React, { memo } from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'

import styles from './Styles/FooterButtonStyles'

type FooterButtonProps = {
  onPress: () => void
  title: string
  wrapperStyle?: ViewStyle
  disable?: boolean
}

const FooterButton = (props: FooterButtonProps) => {
  const { onPress, title, wrapperStyle, disable } = props
  return (
    <TouchableOpacity
      style={[styles.container, wrapperStyle, !disable && styles.disable]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default memo(FooterButton)
