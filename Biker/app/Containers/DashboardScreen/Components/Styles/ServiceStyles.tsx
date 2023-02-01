import { StyleSheet } from 'react-native'

import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Normalize(20),
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconView: {
    width: Normalize(40),
    height: Normalize(40),
    borderRadius: Normalize(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginTop: Normalize(5),
    color: Colors.black
  },
  disableView: {
    backgroundColor: Colors.royalBlue80
  },
  disableContent: {
    color: Colors.black50
  }
})
