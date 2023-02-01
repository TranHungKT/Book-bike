import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1
  },
  imageWrapper: {
    position: 'absolute',
    top: Normalize(15),
    left: Normalize(10)
  },
  chooseLocationView: {
    height: Metrics.screenHeight / 6,
    width: Metrics.screenWidth,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  chooseLocationButton: {
    backgroundColor: Colors.whisper,
    padding: Normalize(20),
    borderRadius: Normalize(5),
    margin: Normalize(30),
    flexDirection: 'row'
  },
  image: {
    height: Normalize(20),
    width: Normalize(20),
    tintColor: Colors.red
  },
  whereToText: {
    fontSize: Normalize(18),
    fontWeight: 'bold',
    marginLeft: Normalize(20),
    color: Colors.nobel
  },
  backContainer: {
    position: 'absolute',
    top: Normalize(-10),
    left: Normalize(-10),
    height: Normalize(40),
    width: Normalize(40),
    borderRadius: Normalize(20),
    backgroundColor: Colors.royalBlue,
    marginTop: Metrics.statusBarHeight,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBack: {
    tintColor: Colors.white,
    height: Normalize(20),
    width: Normalize(20)
  }
})
