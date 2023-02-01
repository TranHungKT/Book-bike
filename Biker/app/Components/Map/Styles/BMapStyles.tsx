import { StyleSheet } from 'react-native'
import { Metrics, Normalize } from '@/Themes'

export default StyleSheet.create({
  map: {
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    marginBottom: 100
  },
  edgePadding: {
    top: Normalize(140),
    bottom: (Metrics.screenHeight * 2) / 3,
    left: Normalize(10),
    right: Normalize(10)
  },
  edgePaddingWithoutList: {
    top: Normalize(200),
    bottom: Normalize(200),
    left: Normalize(100),
    right: Normalize(100)
  }
})
