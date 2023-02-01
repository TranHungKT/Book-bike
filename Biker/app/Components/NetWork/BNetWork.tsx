import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'

// Styles
import styles from './Styles/BNetWorkStyle'

const BNetwork = () => {
  const netInfo = useNetInfo()

  if (netInfo && netInfo.type === 'unknown') {
    return null
  }

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wrapContent}>
        <Text style={styles.text}>{'Not connected'}</Text>
      </View>
    )
  }
  return null
}

export default memo(BNetwork)
