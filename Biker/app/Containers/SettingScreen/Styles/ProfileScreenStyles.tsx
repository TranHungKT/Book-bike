import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white
  },

  profileView: {},
  title: {
    marginLeft: Normalize(20),
    fontSize: Normalize(22),
    fontWeight: 'bold',
    color: Colors.black,
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10)
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: Normalize(20),
    paddingBottom: Normalize(10),
    paddingTop: Normalize(10)
  },
  wrapperImage: {
    paddingTop: Normalize(10),
    paddingBottom: Normalize(5),
    borderWidth: 0
  },
  imageAvatar: {
    width: Normalize(60),
    height: Normalize(60),
    borderRadius: Normalize(30)
  },
  imageText: {
    flexWrap: 'wrap',
    paddingRight: Normalize(60),
    paddingLeft: Normalize(20),
    fontSize: Normalize(17)
  },
  picText: {
    color: Colors.nobel
  }
})
