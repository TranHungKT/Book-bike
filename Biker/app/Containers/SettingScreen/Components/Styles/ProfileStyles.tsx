import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Normalize(20),
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: Colors.white,
    paddingBottom: Normalize(20),
    paddingTop: Normalize(20)
  },
  userName: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: Normalize(20)
  },
  email: {
    color: Colors.black,
    fontSize: Normalize(18)
  },
  wrapperAvatar: {
    alignSelf: 'flex-start',
    marginRight: Normalize(20)
  },
  pencil: {
    alignSelf: 'flex-start'
  },
  inforView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
