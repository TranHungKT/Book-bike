import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    marginTop: Normalize(10),
    marginHorizontal: Normalize(10),
    marginBottom: Normalize(5),
    padding: Normalize(10),
    backgroundColor: Colors.white,
    borderRadius: Normalize(10),
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  phaseText: {
    paddingHorizontal: Normalize(5),
    paddingBottom: Normalize(3),
    paddingTop: Normalize(3),
    backgroundColor: Colors.gainsboro,
    textAlign: 'center',
    width: Normalize(150),
    borderRadius: Normalize(20)
  },
  wrapperStyle: {
    borderBottomWidth: 0
  }
})
