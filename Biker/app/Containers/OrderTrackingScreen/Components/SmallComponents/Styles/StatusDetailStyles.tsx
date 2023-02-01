import { Normalize } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    marginLeft: Normalize(10),
    fontWeight: 'bold'
  },
  rowView: {
    flexDirection: 'row'
  }
})
