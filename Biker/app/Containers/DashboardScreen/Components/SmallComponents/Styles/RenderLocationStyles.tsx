import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  chooseLocationView: {},
  chooseLocationButton: {
    backgroundColor: Colors.white,
    padding: Normalize(20),
    marginHorizontal: Normalize(30),
    flexDirection: 'row',
    ...ApplicationStyles.screen.defaultElevation,
    width: Metrics.screenWidth - Normalize(20),
    alignItems: 'center'
  },
  whereToText: {
    marginLeft: Normalize(20),
    color: Colors.greyChateau
  },
  locationText: {
    marginLeft: Normalize(20),
    color: Colors.black
  },
  seperate: {
    borderTopStartRadius: Normalize(5),
    borderTopEndRadius: Normalize(5),
    borderBottomColor: Colors.greyChateau,
    borderBottomWidth: Normalize(1)
  },
  border: {
    borderBottomLeftRadius: Normalize(5),
    borderBottomRightRadius: Normalize(5)
  }
})
