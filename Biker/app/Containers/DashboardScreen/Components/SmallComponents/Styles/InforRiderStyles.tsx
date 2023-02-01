import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  name: {
    fontSize: Normalize(18),
    fontWeight: 'bold',
    color: Colors.black,
    flex: 0.6,
    marginLeft: Normalize(10)
  },
  starView: {
    flex: 0.3,
    flexDirection: 'row'
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  imageDriverView: {
    flex: 0.1
  },
  distance: {
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 0.6
  },
  distaceText: {
    fontWeight: 'normal'
  },
  distaceView: {
    marginTop: Normalize(20),
    borderTopColor: Colors.gainsboro,
    borderTopWidth: 1,
    paddingTop: Normalize(10)
  }
})
