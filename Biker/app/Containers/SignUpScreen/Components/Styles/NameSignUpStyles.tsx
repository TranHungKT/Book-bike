import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Metrics, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: Metrics.doubleBaseMargin,
    justifyContent: 'center'
  },
  wrapperStyle: {
    width: '45%'
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleView: {
    marginBottom: Normalize(80)
  },
  name: {
    fontFamily: 'LucidaGrandeBold',
    textAlign: 'center',
    fontSize: Normalize(20)
  },
  error: {
    textAlign: 'center',
    color: Colors.red
  },
  nextButton: {
    marginLeft: Normalize(20)
  },
  imageStyle: {
    tintColor: Colors.black
  },
  smallView: {
    flex: 0.1
  },
  wrapperStyleNext: {
    position: 'absolute',
    bottom: 20
  }
})
