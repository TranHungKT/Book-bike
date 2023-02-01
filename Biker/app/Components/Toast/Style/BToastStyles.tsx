import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  toastView: {
    backgroundColor: Colors.black,
    paddingHorizontal: Normalize(20),
    marginHorizontal: Normalize(30)
  },
  textStyle: {
    color: Colors.white,
    fontSize: Normalize(18),
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
