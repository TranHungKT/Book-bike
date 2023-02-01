import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize, Metrics } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  headBackground: {
    height: Normalize(224),
    backgroundColor: Colors.valhalla
  },
  imageBack: {
    tintColor: Colors.white,
    marginBottom: Normalize(20),
    marginTop: Normalize(10)
  },
  wrapperStyle: {
    marginTop: Metrics.statusBarHeight
  },
  title: {
    fontSize: Normalize(28),
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginTop: Metrics.statusBarHeight + Normalize(5)
  }
})
