import { StyleSheet } from 'react-native'

// Styles
import { Metrics, Normalize, Colors, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    borderRadius: Normalize(5),
    marginTop: Normalize(10),
    alignItems: 'center',
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    paddingHorizontal: Normalize(20),
    width: Metrics.screenWidth - Normalize(20),
    left: Normalize(10),
    right: 0,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    ...ApplicationStyles.screen.defaultElevation
  },
  name: {
    fontSize: Normalize(18),
    fontWeight: 'bold',
    color: Colors.black,
    flex: 0.6,
    marginLeft: Normalize(10)
  },
  starView: {
    flex: 0.3,
    flexDirection: 'row'
  },
  licensePlate: {
    fontSize: Normalize(18),
    fontWeight: 'bold',
    color: Colors.black
  },
  imagePhone: {
    marginRight: Normalize(10)
  },

  callButton: {
    backgroundColor: Colors.white,
    borderRadius: Normalize(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.3,
    height: 30
  },
  callText: {
    color: Colors.white
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageView: {
    flex: 0.1
  },
  wrapperStyle: {
    flexDirection: 'column'
  }
})
