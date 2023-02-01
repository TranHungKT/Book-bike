import { Colors, Normalize } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  separator: {
    marginLeft: Normalize(100),
    marginRight: Normalize(20),
    borderBottomColor: Colors.gainsboro,
    borderBottomWidth: Normalize(1)
  },
  buttonStyle: {
    width: '90%'
  }
})
