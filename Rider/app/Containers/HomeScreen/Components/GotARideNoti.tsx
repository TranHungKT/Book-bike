import { translate } from '@/Language'
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

// Styles
import styles from './Styles/GotARideNotiStyles'

type GotARideNotiProps = {
  onPressButton: () => void
  type: number
}

const GotARideNoti = (props: GotARideNotiProps) => {
  const { onPressButton, type } = props

  return (
    <TouchableOpacity style={styles.container} onPress={onPressButton}>
      {type === 0 ? (
        <Text style={styles.text}>{translate('youGotARide')}</Text>
      ) : (
        <Text style={styles.text}>{translate('youAreInRide')}</Text>
      )}
    </TouchableOpacity>
  )
}

export default GotARideNoti
