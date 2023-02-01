import { StyleSheet } from 'react-native'

// Styles
import { Metrics, Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    height: Metrics.screenHeight / 5,
    backgroundColor: Colors.white,
    paddingHorizontal: Normalize(20),
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    elevation: 3
  },
  revenueText: {
    fontSize: Normalize(26),
    fontWeight: 'bold'
  },
  priceView: {
    flexDirection: 'row',
    marginTop: Normalize(10),
    marginHorizontal: Normalize(10)
  },
  revenue: {
    fontSize: Normalize(56)
  },
  unit: {
    fontSize: Normalize(24),
    marginRight: Normalize(10)
  }
})
