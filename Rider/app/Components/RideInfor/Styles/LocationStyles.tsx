import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  infor: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    borderLeftColor: 'white',
    borderLeftWidth: Normalize(1),
    height: Normalize(40),
    marginTop: Normalize(10),
    marginBottom: Normalize(10)
  },
  placeImage: {
    tintColor: Colors.screaminGreen,
    height: Normalize(30),
    width: Normalize(30)
  },
  destinationImage: {
    tintColor: Colors.red,
    height: Normalize(30),
    width: Normalize(30)
  },
  addressText: {
    color: Colors.white,
    fontSize: Normalize(20),
    paddingLeft: Normalize(10)
  }
})
