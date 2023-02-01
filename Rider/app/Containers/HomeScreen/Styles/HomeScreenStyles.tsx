import { Metrics, Normalize } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  notificationView: {
    width: Normalize(100),
    height: Normalize(20)
  },
  wrapperStyle: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  }
})
