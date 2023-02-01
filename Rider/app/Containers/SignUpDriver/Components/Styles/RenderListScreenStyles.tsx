import { Normalize } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Normalize(20),
    marginTop: Normalize(20),
    justifyContent: 'space-between',
    paddingRight: Normalize(20)
  },

  title: {
    fontWeight: 'bold',
    fontSize: Normalize(24),
    marginBottom: Normalize(10)
  },
  contentView: {
    flexDirection: 'row'
  }
})
