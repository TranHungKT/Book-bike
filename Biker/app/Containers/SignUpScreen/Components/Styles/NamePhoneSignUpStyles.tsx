import { StyleSheet } from 'react-native'

// Styles
import { ApplicationStyles, Normalize, Metrics, Colors } from '@/Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentWrapper: {
    flex: 1,
    paddingHorizontal: Metrics.doubleBaseMargin,
    justifyContent: 'flex-end'
  },
  textInput: {
    marginVertical: Normalize(Metrics.smallMargin)
  },
  agreeTerm: {
    textAlign: 'center',
    marginTop: Normalize(50)
  },
  buttonStyle: {
    marginTop: Normalize(80),
    height: Normalize(50),
    padding: 20
  },
  signUpText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: Normalize(10),
    fontFamily: 'LucidaGrandeBold'
  },
  enterInforText: {
    marginBottom: Normalize(20),
    fontSize: Normalize(18),
    fontFamily: 'LucidaGrande'
  },
  backButton: {
    marginLeft: Normalize(0)
  },
  blankView: {
    flex: 1
  },
  imageStyle: {
    tintColor: Colors.black
  }
})
