import { StyleSheet } from 'react-native'

// Styles
import { Metrics, Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    height: Metrics.screenHeight / 10,
    backgroundColor: Colors.white50,
    paddingHorizontal: Normalize(10),
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    justifyContent: 'center'
  },
  text: {
    fontSize: Normalize(20),
    marginHorizontal: Normalize(20),
    fontWeight: 'bold'
  }
})
