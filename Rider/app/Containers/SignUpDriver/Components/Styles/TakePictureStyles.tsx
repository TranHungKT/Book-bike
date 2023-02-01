import { Normalize, Colors, Metrics } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Normalize(10),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    marginRight: Normalize(20),
    backgroundColor: Colors.white,
    borderColor: Colors.fruitSalad,
    paddingHorizontal: Normalize(20)
  },
  textStyle: {
    fontWeight: 'bold',
    color: Colors.fruitSalad
  },
  title: {
    fontSize: Normalize(20),
    fontWeight: 'bold',
    width: Metrics.screenWidth / 3,
    flexWrap: 'wrap'
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
