import { StyleSheet } from 'react-native'

// Styles
import { Metrics, Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.statusBarHeight,
    paddingHorizontal: Normalize(20),
    backgroundColor: Colors.royalBlue,
    height: Normalize(50),
    alignItems: 'center'
  },
  title: {
    fontSize: Normalize(20),
    color: Colors.white
  },
  backView: {
    flex: 0.1
  }
})
