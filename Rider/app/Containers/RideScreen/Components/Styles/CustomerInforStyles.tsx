import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 0.1,
    backgroundColor: Colors.bahamaBlue,
    paddingHorizontal: Normalize(40),
    paddingTop: Normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.white50,
    borderBottomWidth: Normalize(1)
  },
  inforView: {
    flexDirection: 'row'
  },
  infor: {
    marginLeft: Normalize(40),
    justifyContent: 'center'
  },
  phoneText: {
    color: Colors.white,
    textDecorationLine: 'underline'
  },
  nameText: {
    color: Colors.white,
    fontSize: Normalize(18)
  },
  image: {
    height: Normalize(30),
    width: Normalize(30),
    tintColor: Colors.white
  }
})
