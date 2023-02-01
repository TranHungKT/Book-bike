import { StyleSheet } from 'react-native'

// Styles
import { Metrics, Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: Metrics.statusBarHeight,
    height: Normalize(50),
    backgroundColor: Colors.royalBlue,
    alignItems: 'center',
    width: '100%'
  },
  wrapperStyle: {
    marginTop: 0,
    marginBottom: 0
  },
  title: {
    width: Metrics.screenWidth - Normalize(100),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Normalize(24)
  },
  phone: {
    marginRight: Normalize(-25),
    tintColor: Colors.white
  },
  blankView: {
    flex: 0.5,
    alignContent: 'center'
  }
})
