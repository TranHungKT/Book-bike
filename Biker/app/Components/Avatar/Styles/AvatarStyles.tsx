import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: Normalize(3),
    borderColor: Colors.white,
    borderRadius: Normalize(20)
  },
  image: {
    height: Normalize(30),
    width: Normalize(30),
    borderRadius: Normalize(15)
  }
})
