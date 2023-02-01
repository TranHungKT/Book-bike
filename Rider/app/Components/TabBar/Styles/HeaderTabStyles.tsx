import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics } from '@/Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.valhalla,
    height: Metrics.screenHeight / 8
  },
  title: {
    color: Colors.white,
    fontSize: Normalize(30),
    marginTop: Normalize(10),
    marginHorizontal: Normalize(30)
  }
})
