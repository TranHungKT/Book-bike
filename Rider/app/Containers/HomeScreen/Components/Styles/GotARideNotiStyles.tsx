import { StyleSheet } from 'react-native'

import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    padding: Normalize(20),
    borderRadius: Normalize(10),
    backgroundColor: Colors.white
  },
  text: {
    fontSize: Normalize(20)
  }
})
