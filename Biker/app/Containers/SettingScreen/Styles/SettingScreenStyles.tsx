import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  profileView: {},
  titleHeaderStyle: {
    color: Colors.white,
    textAlign: 'left',
    marginLeft: Normalize(50)
  },
  wrapperHeaderStyle: {
    height: Normalize(30)
  },
  title: {
    paddingHorizontal: Normalize(20),
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    fontSize: Normalize(18),
    fontWeight: 'bold'
  },
  separator: {
    borderWidth: Normalize(1),
    marginLeft: Normalize(50),
    marginRight: Normalize(20),
    borderColor: Colors.gainsboro
  },
  flatlist: {
    backgroundColor: Colors.white
  },
  logoutStyle: {
    width: '90%',
    marginTop: Normalize(50),
    marginBottom: Normalize(10),
    backgroundColor: Colors.white,
    borderColor: Colors.amaranth,
    borderWidth: Normalize(2)
  },
  logoutText: {
    color: Colors.amaranth,
    fontSize: Normalize(16),
    fontWeight: 'bold'
  }
})
