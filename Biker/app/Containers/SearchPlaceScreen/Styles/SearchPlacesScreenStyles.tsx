import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    marginTop: Normalize(50)
  },
  backIcon: {
    marginLeft: Normalize(5),
    marginTop: Normalize(-10)
  },
  container: {
    padding: Normalize(10),
    height: '100%'
  },
  textInput: {
    padding: Normalize(10),
    backgroundColor: Colors.whisper,
    marginLeft: Normalize(5),
    color: Colors.black,
    ...ApplicationStyles.screen.defaultElevation
  },
  separator: {
    backgroundColor: Colors.whiteSmoke,
    height: Normalize(2)
  },
  listView: {
    position: 'absolute',
    top: Normalize(105)
  },
  autocompleteContainer: {
    position: 'absolute',
    top: Normalize(30),
    left: Normalize(10),
    right: Normalize(10)
  },
  image: {
    alignSelf: 'center'
  },
  origin: {
    tintColor: Colors.royalBlue
  },
  destination: {
    tintColor: Colors.red
  },
  mainText: {
    fontWeight: 'bold'
  },
  destinationContainer: {
    position: 'absolute',
    top: Normalize(85),
    left: Normalize(10),
    right: Normalize(10)
  },
  row: {
    borderRadius: 5
  },
  leftArrow: {
    tintColor: Colors.black,
    marginTop: Normalize(-20),
    marginLeft: Normalize(5)
  }
})
