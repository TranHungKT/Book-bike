import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export const ElementSlideStyle = StyleSheet.create({
  container: {
    borderRadius: Normalize(15),
    backgroundColor: Colors.white,
    marginBottom: Normalize(5)
  }
})

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  headerTitle: {
    color: Colors.white
  },
  wrapperStyle: {
    backgroundColor: Colors.royalBlue
  },
  slideStyle: {
    paddingHorizontal: Normalize(10)
  },
  wrapperTripDetails: {
    ...ElementSlideStyle.container
  }
})
