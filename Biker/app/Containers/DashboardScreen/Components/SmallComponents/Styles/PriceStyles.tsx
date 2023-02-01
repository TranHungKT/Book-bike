import { StyleSheet } from 'react-native'

import Style from './InforBikeStyles'

import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  ...Style,
  containerView: {
    marginBottom: Normalize(20),
    marginTop: Normalize(20)
  },
  orderButton: {
    backgroundColor: Colors.red
  }
})
