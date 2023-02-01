import { StyleSheet } from 'react-native'

// Styles
import { Metrics, Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  background: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  signInButton: {
    position: 'absolute',
    bottom: Normalize(150),
    marginHorizontal: Normalize(20),
    width: Metrics.screenWidth - Normalize(40)
  },
  signInText: {
    color: Colors.white,
    fontWeight: 'normal'
  },
  signUpButton: {
    position: 'absolute',
    bottom: Normalize(100),
    marginHorizontal: Normalize(20),
    alignSelf: 'center'
  },
  signUpText: {
    color: Colors.white,
    fontSize: Normalize(20)
  }
})
