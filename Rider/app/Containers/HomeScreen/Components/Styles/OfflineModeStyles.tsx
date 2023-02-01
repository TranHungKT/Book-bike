import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    height: Normalize(30),
    width: '100%',
    backgroundColor: Colors.manz,
    position: 'relative',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold'
  }
})
