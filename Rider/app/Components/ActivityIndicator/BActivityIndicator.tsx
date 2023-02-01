import React, { memo } from 'react'
import { ActivityIndicator, StyleProp, ViewStyle, Text } from 'react-native'
import Modal from 'react-native-modal'
// Styles
import styles from './Styles/BActivityIndicatorStyles'
import { Colors } from '@/Themes'

interface FActivityIndicatorProps {
  color?: string
  size?: number | 'small' | 'large'
  style?: StyleProp<ViewStyle>
  title?: string
}

const BActivityIndicator = (props: FActivityIndicatorProps) => {
  const { color = Colors.screaminGreen, size = 'small', style, title } = props
  return (
    <Modal
      style={styles.activityIndicatorWrapper}
      isVisible
      statusBarTranslucent
    >
      <ActivityIndicator color={color} size={size} style={style} />
      <Text style={styles.text}>{title}</Text>
    </Modal>
  )
}

export default memo(BActivityIndicator)
