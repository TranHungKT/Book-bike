import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: Normalize(100),
    height: Normalize(100),
    borderRadius: Normalize(50)
  },
  ratingView: {
    padding: Normalize(5),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginTop: Normalize(-15),
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  star: {
    height: Normalize(20),
    width: Normalize(20)
  },
  starText: {
    marginLeft: Normalize(5)
  }
})
