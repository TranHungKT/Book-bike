import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: Normalize(20),
    justifyContent: 'space-between',
    paddingHorizontal: Normalize(20),
    paddingTop: Normalize(30),
    paddingBottom: Normalize(30)
  },
  text: {
    color: Colors.white,
    fontSize: Normalize(20),
    fontWeight: 'bold'
  }
})
