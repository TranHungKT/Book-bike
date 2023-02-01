import { StyleSheet } from 'react-native'
import { Colors, Metrics, Normalize } from '@/Themes'

export default StyleSheet.create({
  wrapContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: Metrics.screenWidth - Metrics.tripleBaseMargin * 2
  },
  text: {
    fontSize: Normalize(20),
    textAlign: 'center',
    color: Colors.summerSky,
    marginTop: -Metrics.tripleBaseMargin
  }
})
