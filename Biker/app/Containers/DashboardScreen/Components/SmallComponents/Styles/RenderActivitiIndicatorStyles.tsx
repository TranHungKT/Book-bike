import { StyleSheet } from 'react-native'

import { Metrics, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth - 40,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: Metrics.screenHeight / 2 - Normalize(100)
  }
})
