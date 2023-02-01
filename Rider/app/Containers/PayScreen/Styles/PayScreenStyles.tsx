import { StyleSheet } from 'react-native'

// Styles
import { Colors, Metrics, Normalize } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.atomic
  },
  headerView: {
    marginTop: Metrics.statusBarHeight + Normalize(10),
    marginBottom: Normalize(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: Colors.white,
    fontSize: Normalize(22),
    fontWeight: 'bold'
  },
  priceInforView: {
    borderBottomWidth: Normalize(1),
    borderBottomColor: Colors.white,
    borderTopColor: Colors.white,
    borderTopWidth: Normalize(1),
    justifyContent: 'space-between',
    paddingBottom: Normalize(20)
  },
  buttonView: {
    position: 'absolute',
    bottom: Normalize(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: Colors.fruitSalad,
    width: Metrics.screenWidth - Normalize(40),
    left: Normalize(20),
    right: Normalize(20)
  },
  textStyle: {
    color: Colors.white
  },
  circleView: {
    width: Normalize(50),
    height: Normalize(50),
    borderRadius: Normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.fruitSalad
  },
  summaryView: {
    flexDirection: 'row',
    paddingHorizontal: Normalize(40),
    justifyContent: 'space-between',
    marginTop: Normalize(20)
  },
  summaryText: {
    fontSize: Normalize(24),
    fontWeight: 'bold',
    color: Colors.white
  }
})
