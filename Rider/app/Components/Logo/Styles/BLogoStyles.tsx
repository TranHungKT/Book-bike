import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Metrics } from '@/Themes'

export default StyleSheet.create({
  logo: {
    marginTop: Normalize(40),
    width: (Metrics.screenWidth * 3) / 4,
    height: Metrics.screenHeight / 10,
    alignSelf: 'center'
  }
})
