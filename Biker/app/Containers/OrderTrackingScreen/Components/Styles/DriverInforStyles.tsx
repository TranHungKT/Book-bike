import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

import { ElementSlideStyle } from '../../Styles/OrderTrackingScreenStyles'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Normalize(20),
    paddingTop: Normalize(15),
    paddingBottom: Normalize(15),
    borderBottomColor: Colors.gainsboro,
    borderBottomWidth: Normalize(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...ElementSlideStyle.container
  },
  infor: {
    marginLeft: Normalize(20),
    justifyContent: 'center'
  },
  name: {
    fontWeight: 'bold'
  },
  map: {
    borderRadius: Normalize(10),
    paddingHorizontal: Normalize(10),
    backgroundColor: Colors.royalBlue,
    height: Normalize(30),
    justifyContent: 'center',
    alignSelf: 'center'
  },
  trackingDriver: {
    fontWeight: 'bold',
    color: Colors.white
  },
  inforView: {
    flexDirection: 'row'
  }
})
