import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics } from '@/Themes'

export default StyleSheet.create({
  container: {
    // marginTop: Metrics.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Normalize(20),
    backgroundColor: Colors.atomic,
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    alignItems: 'center'
  },
  title: {
    fontSize: Normalize(22),
    color: Colors.white,
    width: (Metrics.screenWidth * 3) / 4
  }
})
