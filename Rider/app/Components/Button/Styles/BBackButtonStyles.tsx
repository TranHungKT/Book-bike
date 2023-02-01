import { StyleSheet } from 'react-native'

// Colors
import { Colors, Normalize, Metrics } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    marginLeft: Metrics.doubleBaseMargin,
    marginTop: Metrics.statusBarHeight + Normalize(20),
    marginBottom: Normalize(20)
  },
  image: {
    width: Normalize(26),
    height: Normalize(24),
    tintColor: Colors.black
  }
})
