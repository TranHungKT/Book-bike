import { Normalize } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Normalize(10),
    marginTop: Normalize(5),
    marginBottom: Normalize(5)
  }
})
