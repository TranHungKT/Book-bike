import { StyleSheet } from 'react-native'
import { Metrics, Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  map: {
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    marginBottom: 100
  },
  destination: {
    tintColor: Colors.royalBlue
  },
  edgePadding: {
    top: Normalize(140),
    bottom: (Metrics.screenHeight * 1) / 3,
    left: Normalize(10),
    right: Normalize(10)
  },
  location: {
    tintColor: Colors.fruitSalad
  }
})
