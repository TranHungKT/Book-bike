import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Metrics, Colors, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 0
  },
  container: {
    marginLeft: Normalize(20),
    borderRadius: Normalize(5),
    alignItems: 'center',
    paddingTop: Normalize(20),
    paddingBottom: Normalize(20),
    paddingHorizontal: Normalize(20),
    width: Metrics.screenWidth - Normalize(40),
    backgroundColor: Colors.white,
    marginBottom: Normalize(20),
    flexDirection: 'column',
    ...ApplicationStyles.screen.defaultElevation
  },
  inputView: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginLeft: Normalize(20),
    marginBottom: Normalize(100),
    borderRadius: Normalize(5),
    alignItems: 'center',
    paddingHorizontal: Normalize(20),
    ...ApplicationStyles.screen.defaultElevation,
    marginTop: Normalize(-10)
  },
  imageView: {
    flex: 0.1
  },
  textInput: {
    flex: 0.9,
    height: Normalize(70),
    width: Normalize(Metrics.screenWidth - 100)
  },
  wrapperStyle: {
    marginLeft: Normalize(-20),
    width: Metrics.screenWidth - Normalize(40),
    right: 0,
    ...ApplicationStyles.screen.defaultElevation
  }
})
