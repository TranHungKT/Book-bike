import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics } from '@/Themes'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Normalize(20),
    width: Metrics.screenWidth - Normalize(20),
    padding: Normalize(20),
    backgroundColor: Colors.royalBlue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: Normalize(5)
  },
  title: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: Normalize(20)
  }
})
