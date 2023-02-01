import { StyleSheet } from 'react-native'

// Styles
import { Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Normalize(20),
    alignItems: 'center'
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginLeft: Normalize(10),
    fontWeight: 'bold'
  }
})
