import { StyleSheet } from 'react-native'

import { Normalize, Colors, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Normalize(50),
    backgroundColor: Colors.white,
    borderRadius: Normalize(20),
    padding: Normalize(10),
    flexDirection: 'row',
    alignSelf: 'center',
    ...ApplicationStyles.screen.defaultElevation
  },
  motobikingStyle: {
    backgroundColor: Colors.royalBlue
  },
  pakageStyle: {
    backgroundColor: Colors.red
  }
})
