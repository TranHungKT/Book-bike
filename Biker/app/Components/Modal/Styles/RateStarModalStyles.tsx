import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Normalize(20),
    paddingTop: Normalize(20),
    paddingBottom: Normalize(40)
  },
  imageAvatar: {
    height: Normalize(70),
    width: Normalize(70),
    borderRadius: Normalize(35),
    alignSelf: 'center'
  },
  enjoyRideText: {
    textAlign: 'center',
    marginTop: Normalize(20),
    fontWeight: 'bold',
    fontSize: Normalize(20)
  },
  rateStarText: {
    textAlign: 'center',
    fontSize: Normalize(20),
    fontWeight: 'bold',
    paddingHorizontal: Normalize(5)
  },
  rating: {
    marginTop: Normalize(10)
  },
  notNow: {
    fontSize: Normalize(20),
    color: Colors.royalBlue,
    marginTop: Normalize(10)
  },
  buttonStyle: {
    marginTop: Normalize(30),
    borderRadius: Normalize(5),
    width: '80%',
    backgroundColor: Colors.royalBlue
  },
  buttonNotNow: {
    marginTop: Normalize(10)
  },
  textInput: {
    width: '80%',
    padding: Normalize(10),
    backgroundColor: Colors.whiteSmoke,
    marginTop: Normalize(20),
    borderRadius: Normalize(5),
    height: 100,
    textAlignVertical: 'top'
  },
  imageBiker: {
    height: Normalize(80),
    width: Normalize(80),
    borderRadius: Normalize(40),
    marginBottom: Normalize(20)
  }
})
