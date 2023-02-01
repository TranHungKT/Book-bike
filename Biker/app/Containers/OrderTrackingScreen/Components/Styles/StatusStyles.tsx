import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

import { ElementSlideStyle } from '../../Styles/OrderTrackingScreenStyles'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Normalize(20),
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    borderBottomWidth: Normalize(1),
    borderBottomColor: Colors.gainsboro,
    ...ElementSlideStyle.container
  },
  title: {
    fontWeight: 'bold',
    color: Colors.nobel,
    marginBottom: Normalize(10)
  }
})
