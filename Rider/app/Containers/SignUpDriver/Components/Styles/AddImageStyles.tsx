import { StyleSheet } from 'react-native'
import { Normalize } from '@/Themes'
export default StyleSheet.create({
  imageView: {
    borderWidth: Normalize(1),
    borderRadius: Normalize(1),
    borderStyle: 'dashed',
    marginLeft: Normalize(20),
    marginRight: Normalize(10)
  },
  image: {
    margin: Normalize(20)
  },
  imageUri: {
    margin: Normalize(10),
    width: Normalize(40),
    height: Normalize(40)
  }
})
