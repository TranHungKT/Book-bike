import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center'
  },
  errorEmptyResult: {
    marginTop: Normalize(20),
    textAlign: 'center',
    color: Colors.red,
    width: Metrics.screenWidth - Normalize(20),
    fontSize: Normalize(22),
    backgroundColor: Colors.white,
    left: Normalize(10),
    right: Normalize(20),
    borderRadius: Normalize(10),
    ...ApplicationStyles.screen.defaultElevation
  },
  wrapperStyle: {
    backgroundColor: Colors.valhalla
  },
  titleStyle: {
    color: Colors.white
  },
  location: {
    bottom: Normalize(10),
    right: Normalize(-20),
    left: Normalize(-20)
  },
  listContainer: {
    height: Metrics.screenHeight / 3.5
  },
  retryButtonStyle: {
    width: Metrics.screenWidth - Normalize(20),
    alignSelf: 'center',
    left: Normalize(10),
    right: Normalize(20)
  }
})
