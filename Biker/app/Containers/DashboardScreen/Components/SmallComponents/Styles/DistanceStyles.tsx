import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Normalize(20),
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    borderRadius: Normalize(5),
    width: Metrics.screenWidth - Normalize(20),
    marginHorizontal: Normalize(20),
    shadowColor: Colors.black,
    ...ApplicationStyles.screen.defaultElevation,
    right: Normalize(-10),
    left: Normalize(-10)
  },
  text: {
    color: Colors.black,
    fontWeight: 'bold'
  }
})
