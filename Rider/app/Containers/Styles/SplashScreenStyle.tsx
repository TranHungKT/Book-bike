import { StyleSheet } from 'react-native'

// Styles
import { Normalize } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: Normalize(48),
    fontWeight: 'bold'
  }
})
