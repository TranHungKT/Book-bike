import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    padding: Normalize(10),
    backgroundColor: Colors.white,
    marginHorizontal: Normalize(10),
    marginTop: Normalize(10),
    marginBottom: Normalize(10),
    borderRadius: Normalize(10),
    ...ApplicationStyles.screen.defaultElevation
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: Normalize(18)
    // marginBottom: Normalize(10)
  },
  wrapperStyle: {
    marginTop: Normalize(15)
  },
  textInputStyle: {
    borderWidth: Normalize(1),
    borderRadius: Normalize(5),
    marginTop: Normalize(3),
    paddingHorizontal: Normalize(15)
  }
})
