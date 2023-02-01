import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'
import { ElementSlideStyle } from '../../Styles/OrderTrackingScreenStyles'

export default StyleSheet.create({
  container: {
    marginTop: Normalize(10),
    paddingBottom: Normalize(5),
    borderBottomColor: Colors.gainsboro,
    borderBottomWidth: Normalize(1),
    ...ElementSlideStyle.container
  },
  request: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  rating: {
    marginTop: Normalize(10)
  }
})
