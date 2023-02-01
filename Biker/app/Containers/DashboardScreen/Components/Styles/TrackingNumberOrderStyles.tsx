import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: Normalize(50),
    alignSelf: 'center',
    padding: Normalize(20),
    backgroundColor: Colors.white,
    borderRadius: Normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    ...ApplicationStyles.screen.defaultElevation
  },
  text: {
    fontWeight: 'bold'
  },
  right: {
    marginLeft: Normalize(10)
  }
})
