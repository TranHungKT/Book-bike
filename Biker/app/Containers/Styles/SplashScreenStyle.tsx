import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.royalBlue
  },
  text: {
    fontSize: Normalize(48),
    fontWeight: 'bold',
    color: Colors.white
  }
})
