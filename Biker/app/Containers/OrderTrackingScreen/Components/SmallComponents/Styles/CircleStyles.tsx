import { Normalize, Colors } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: Normalize(50),
    height: Normalize(50),
    borderRadius: Normalize(25),
    backgroundColor: Colors.royalBlue,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
