import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    padding: Normalize(20),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderTopRightRadius: Normalize(15),
    borderTopLeftRadius: Normalize(15)
  },
  buttonStyle: {
    backgroundColor: Colors.fruitSalad,
    paddingTop: Normalize(10),
    width: '100%',
    marginHorizontal: Normalize(20)
  },
  order: {
    textAlign: 'center',
    marginBottom: Normalize(10),
    fontSize: Normalize(20),
    color: Colors.nobel
  },
  rowView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  content: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  distanceText: {
    fontWeight: 'bold'
  },
  callButton: {},
  callImage: {
    height: Normalize(25),
    width: Normalize(25)
  },
  blankView: {
    flex: 0.2
  }
})
