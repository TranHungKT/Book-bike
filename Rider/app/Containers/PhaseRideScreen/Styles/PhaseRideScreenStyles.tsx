import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: { flex: 1 },
  navigation: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    bottom: Normalize(170),
    right: Normalize(10),
    padding: Normalize(10),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: Normalize(5)
  },
  navigationImage: {
    height: Normalize(35),
    width: Normalize(35)
  },
  navigateText: {
    color: Colors.royalBlue
  }
})
