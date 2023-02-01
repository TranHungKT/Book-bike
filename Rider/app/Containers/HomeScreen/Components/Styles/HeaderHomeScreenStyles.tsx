import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    height: Normalize(50),
    paddingBottom: Normalize(10),
    paddingTop: Normalize(10),
    backgroundColor: Colors.valhalla,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  switchView: {
    width: Normalize(60),
    height: Normalize(30),
    borderRadius: Normalize(25),
    padding: Normalize(5),
    marginRight: Normalize(20)
  },
  circle: {
    width: Normalize(25),
    height: Normalize(25),
    borderRadius: Normalize(12),
    backgroundColor: Colors.whisper
  },
  barStyle: {
    color: 'white'
  },
  powerButton: {
    width: Normalize(70),
    height: Normalize(40),
    borderRadius: Normalize(20),
    borderColor: Colors.screaminGreen,
    borderWidth: Normalize(2),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9,
    alignSelf: 'center'
  },
  powerOn: {
    borderColor: Colors.red
  },
  blankView: {
    width: Normalize(60),
    marginLeft: Normalize(20)
  }
})
