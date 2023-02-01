import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Metrics, Colors } from '@/Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white
  },
  bBackButton: {
    marginBottom: Normalize(-20),
    marginLeft: 0
  },
  signInText: {
    marginTop: Metrics.statusBarHeight + Normalize(20),
    marginBottom: Normalize(20),
    fontWeight: 'bold',
    fontSize: Normalize(22)
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: Metrics.doubleBaseMargin,
    justifyContent: 'center'
  },
  textInputGroup: {
    flex: 0.5,
    justifyContent: 'space-around'
  },

  textInput: {
    marginVertical: Normalize(Metrics.smallMargin)
  },
  buttonStyle: {
    marginTop: Normalize(40),
    marginHorizontal: Normalize(20),
    width: '100%'
  },
  orText: {
    textAlign: 'center',
    marginTop: Normalize(25),
    fontSize: Normalize(24)
  },
  descriptuion: {
    position: 'absolute',
    bottom: 0
  },
  scrollviuew: {
    backgroundColor: 'blue'
  },
  agreeTerm: {
    textAlign: 'center',
    marginTop: Normalize(50)
  },
  forgotPasswordButton: {
    alignSelf: 'center',
    marginTop: Normalize(40)
  },
  forgotPassword: {
    color: Colors.royalBlue,
    fontSize: Normalize(18)
  },
  imageStyle: {
    tintColor: Colors.black
  }
})
