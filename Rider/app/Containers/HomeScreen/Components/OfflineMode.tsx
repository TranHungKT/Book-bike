import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/OfflineModeStyles'

// Language
import { translate } from '@/Language'

const OfflineMode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{translate('lostConnect')}</Text>
    </View>
  )
}

export default OfflineMode
