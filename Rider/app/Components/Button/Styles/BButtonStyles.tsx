import { StyleSheet } from 'react-native'

// Colors
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.fruitSalad,
    justifyContent: 'center',
    borderColor: Colors.black50,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Normalize(25),
    padding: Normalize(10),
    alignSelf: 'center'
  },
  activityIndicator: {
    color: Colors.screaminGreen
  },
  content: {
    fontSize: Normalize(18),
    textAlign: 'center',
    color: Colors.white
  }
})
