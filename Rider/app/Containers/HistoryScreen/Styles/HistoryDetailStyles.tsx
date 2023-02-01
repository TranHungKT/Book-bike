import { StyleSheet } from 'react-native'

// Styles
import { Colors, Metrics, Normalize } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  rideHash: {
    backgroundColor: Colors.gainsboro,
    textAlign: 'center',
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10)
  },
  inforStyle: {
    marginBottom: Normalize(-5),
    marginTop: Normalize(-5),
    alignSelf: 'flex-start',
    marginLeft: Normalize(20),
    paddingRight: Normalize(20)
  },
  lineStyle: {
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    marginLeft: Normalize(20),
    height: Normalize(30)
  },
  textStyle: {
    color: Colors.black,
    fontSize: Normalize(18)
  },
  locationView: {
    padding: Normalize(10),
    backgroundColor: Colors.white
  },
  amountView: {
    marginTop: Normalize(10),
    backgroundColor: Colors.white,
    borderBottomWidth: Normalize(1),
    borderBottomColor: Colors.gainsboro
  },
  price: {
    padding: Normalize(20),
    textAlign: 'center',
    fontSize: Normalize(24),
    borderBottomColor: Colors.gainsboro,
    borderBottomWidth: Normalize(1),
    fontWeight: 'bold',
    color: Colors.fruitSalad
  },
  timeView: {
    flexDirection: 'row'
  },
  timeDistanceView: {
    width: Metrics.screenWidth / 2,
    paddingTop: Normalize(15),
    paddingBottom: Normalize(15)
  },
  infor: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    textAlign: 'center'
  },
  borderTimeDistance: {
    borderRightColor: Colors.gainsboro,
    borderRightWidth: Normalize(1)
  },
  type: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    padding: Normalize(20)
  },
  content: {
    fontWeight: 'bold',
    paddingTop: Normalize(5),
    paddingBottom: Normalize(5),
    paddingHorizontal: Normalize(20),
    fontSize: Normalize(20)
  },
  wrapperStyle: {
    backgroundColor: Colors.white
  }
})
