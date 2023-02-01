import { StyleSheet } from 'react-native'

// Styles
import { Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Normalize(40),
    marginTop: Normalize(30)
  },
  title: {
    fontSize: Normalize(22),
    fontWeight: 'bold',
    marginLeft: Normalize(10)
  },
  content: {
    fontSize: Normalize(20),
    marginLeft: Normalize(30)
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
