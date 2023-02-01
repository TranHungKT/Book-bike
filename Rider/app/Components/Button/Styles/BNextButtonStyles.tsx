import { StyleSheet } from 'react-native'

// Colors
import { Colors, Normalize, Metrics } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    bottom: Normalize(20),
    left: Metrics.screenWidth - Normalize(70),
    width: Normalize(50),
    height: Normalize(50),
    borderRadius: Normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.fruitSalad
  },
  image: {
    width: Normalize(26),
    height: Normalize(24),
    tintColor: Colors.white
  },
  enable: {
    backgroundColor: Colors.royalBlue
  },
  disable: {
    backgroundColor: Colors.royalBlue80
  }
})
