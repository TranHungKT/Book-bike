import { Normalize, Colors } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Normalize(10),
    borderBottomColor: Colors.gainsboro,
    borderBottomWidth: Normalize(1),
    paddingBottom: Normalize(10),
    alignItems: 'center'
  },
  delivery: {
    marginRight: Normalize(15)
  },
  circleBlue: {
    backgroundColor: Colors.royalBlue
  },
  service: {
    fontWeight: 'bold'
  },
  serviceText: {
    paddingRight: Normalize(20)
  }
})
