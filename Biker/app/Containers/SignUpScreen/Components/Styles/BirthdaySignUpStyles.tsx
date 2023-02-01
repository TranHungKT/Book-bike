import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Metrics, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  datePickerView: {
    width: Metrics.screenWidth,
    alignSelf: 'center'
  },
  wrapperStyle: {},
  textBirthDay: {
    textAlign: 'center',
    fontSize: Normalize(20),
    fontFamily: 'LucidaGrandeBold',
    marginBottom: Normalize(20)
  },
  date: {
    borderBottomColor: Colors.black,
    borderBottomWidth: Normalize(1),
    width: '80%',
    alignSelf: 'center'
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7
  },
  imageStyle: {
    tintColor: Colors.black
  },
  wrapperStyleNextButton: {
    position: 'absolute',
    bottom: Normalize(20)
  },
  smallView: {
    flex: 0.1
  },
  birthday: {
    flex: 0.8,
    justifyContent: 'center'
  }
})
