import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  dateNameStyle: {
    color: Colors.white
  },
  dateNumberStyle: {
    color: Colors.white
  },
  dateContainerStyle: {
    backgroundColor: Colors.royalBlue
  },
  barChart: {
    height: Normalize(200)
  },
  contentInset: {
    top: Normalize(30),
    bottom: Normalize(30)
  },
  fromToText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Normalize(20)
  },
  xAxis: {
    marginTop: Normalize(5)
  },
  svgXAxis: {
    fontWeight: 'bold'
  },
  wrapperStyle: {
    bottom: 0
  },
  contentInsetXAxis: {
    left: Normalize(30),
    right: Normalize(30)
  }
})
