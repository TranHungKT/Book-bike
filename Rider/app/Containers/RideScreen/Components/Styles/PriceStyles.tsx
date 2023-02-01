import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 0.3,
    backgroundColor: Colors.valhalla,
    paddingHorizontal: Normalize(40),
    paddingTop: Normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceText: {
    fontSize: Normalize(50),
    color: Colors.white
  },
  unitText: {
    paddingTop: Normalize(10),
    color: Colors.white
  },
  postageText: {
    color: Colors.white,
    paddingTop: Normalize(10),
    fontSize: Normalize(20)
  },
  xImage: {
    height: Normalize(20),
    width: Normalize(20),
    tintColor: Colors.white
  },
  cancel: {
    marginTop: Normalize(20)
  },
  deliveryText: {
    fontSize: Normalize(28),
    color: Colors.red,
    marginTop: Normalize(10),
    fontWeight: 'bold'
  }
})
