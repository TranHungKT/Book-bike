import { StyleSheet } from 'react-native'
import { Colors, Metrics, Normalize } from '@/Themes'

export default StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textInput: {
    height: Normalize(50),
    fontSize: Normalize(22),
    alignSelf: 'stretch',
    color: Colors.black,
    borderBottomColor: Colors.black,
    borderBottomWidth: Normalize(1),
    fontWeight: 'bold',
    fontFamily: 'LucidaGrandeBold'
  },
  errorMessage: {
    fontSize: Normalize(14),
    color: Colors.amaranth,
    marginVertical: Normalize(Metrics.smallMargin)
  },
  rowView: {
    flexDirection: 'row'
  },
  label: {
    fontSize: Normalize(14),
    color: Colors.black
  },
  textStar: {
    fontSize: Normalize(14),
    color: Colors.red
  }
})
