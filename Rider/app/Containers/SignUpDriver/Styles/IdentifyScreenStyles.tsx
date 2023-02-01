import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Metrics, Colors } from '@/Themes'

export default StyleSheet.create({
  textInput: {
    marginVertical: Normalize(Metrics.smallMargin),
    marginHorizontal: Normalize(20),
    marginTop: Normalize(10),
    borderBottomWidth: 1
  },
  textInputStyle: {
    width: Metrics.screenWidth / 2,
    borderBottomWidth: 0
  },
  saveButtonView: {
    zIndex: 1,
    backgroundColor: Colors.white,
    width: Metrics.screenWidth,
    height: Normalize(90)
  }
})
