import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  imageStyle: {
    tintColor: Colors.black
  },
  title: {
    fontSize: Normalize(30),
    fontWeight: 'bold',
    fontFamily: 'LucidaGrandeBold',
    textAlign: 'center'
  },
  require: {
    fontSize: Normalize(18),
    fontFamily: 'LucidaGrande',
    marginTop: Normalize(10),
    textAlign: 'center',
    paddingHorizontal: Normalize(20)
  },
  wrapperStyle: {
    marginHorizontal: Normalize(20),
    marginTop: Normalize(60),
    backgroundColor: Colors.gainsboro,
    borderRadius: Normalize(25)
  },
  buttonStyle: {
    marginTop: Normalize(40),
    width: '90%',
    height: Normalize(50)
  }
})
