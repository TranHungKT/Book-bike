import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 0.6,
    backgroundColor: Colors.bahamaBlue,
    paddingHorizontal: Normalize(40),
    paddingTop: Normalize(10)
  },
  distance: {
    color: Colors.white,
    marginBottom: Normalize(20),
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
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
  },
  confirmButton: {
    height: Normalize(60),
    width: '100%',
    backgroundColor: Colors.screaminGreen,
    marginTop: Normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Normalize(10)
  },
  confirmText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: Normalize(20)
  }
})
