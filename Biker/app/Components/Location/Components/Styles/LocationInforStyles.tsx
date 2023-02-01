import { StyleSheet } from 'react-native'

// Styles
import { Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: Normalize(10),
    paddingRight: Normalize(20),
    alignItems: 'center'
  },
  infor: {
    marginLeft: Normalize(10)
  }
})
