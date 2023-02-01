import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics } from '@/Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Normalize(10),
    borderRadius: Normalize(5),
    backgroundColor: Colors.whiteSmoke,
    elevation: 0.5,
    paddingLeft: Normalize(10)
  },
  textInput: {
    color: Colors.black,
    fontSize: Normalize(18),
    width: Metrics.screenWidth - Normalize(40)
  },
  title: {
    marginLeft: Normalize(20),
    fontSize: Normalize(22),
    fontWeight: 'bold',
    color: Colors.black50
  },
  image: {
    width: Normalize(20),
    height: Normalize(20),
    marginRight: Normalize(10)
  },
  error: {
    color: Colors.red,
    marginTop: Normalize(10),
    marginLeft: Normalize(20)
  }
})
