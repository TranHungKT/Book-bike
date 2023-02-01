import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    paddingBottom: Normalize(10),
    paddingTop: Normalize(10),
    paddingHorizontal: Normalize(20),
    borderBottomColor: Colors.gainsboro,
    borderBottomWidth: Normalize(1)
  },
  title: {
    fontWeight: 'bold',
    color: Colors.nobel
  },
  line: {
    paddingLeft: Normalize(22)
  },
  tripView: {
    marginTop: Normalize(10)
  },
  lineText: {
    fontSize: Normalize(8),
    color: Colors.nobel
  }
})
