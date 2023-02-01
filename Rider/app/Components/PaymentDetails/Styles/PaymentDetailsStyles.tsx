import { StyleSheet } from 'react-native'
import { Colors, Normalize } from '@/Themes'
export default StyleSheet.create({
  container: {
    paddingHorizontal: Normalize(20),
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10)
  },
  line: {
    borderBottomColor: Colors.gainsboro,
    borderBottomWidth: Normalize(1),
    marginTop: Normalize(10)
  },
  textStyle: {
    fontWeight: 'bold'
  }
})
