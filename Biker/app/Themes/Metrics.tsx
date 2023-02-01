import { Dimensions, Platform, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  halfTripleBaseMargin: 15,
  doubleBaseMargin: 20,
  halfQuintupleBaseMargin: 25,
  tripleBaseMargin: 30,
  quadrupleBaseMargin: 40,
  quintupleBaseMargin: 50,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  statusBarHeight: StatusBar.currentHeight || 40,
  tabBarHeight: 60,
  borderRadiusSmall: 8,
  defaultImageWidth: 25,
  defaultImageHeight: 25
}

export default metrics
