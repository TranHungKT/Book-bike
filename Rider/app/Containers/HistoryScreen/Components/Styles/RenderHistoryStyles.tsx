import { StyleSheet } from 'react-native'

import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    padding: Normalize(20),
    backgroundColor: Colors.white,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  deliveryMan: { flex: 0.15 },
  destination: {
    fontSize: Normalize(20),
    fontWeight: 'bold'
  },
  inforView: {
    // flexDirection: 'row',
    // marginTop: Normalize(10),
    // justifyContent: 'space-between',
    marginLeft: Normalize(20),
    flex: 1
  },
  price: {
    color: Colors.black,
    fontSize: Normalize(22),
    marginTop: Normalize(5)
  },
  time: {
    flex: 0.15
  },
  timeText: {
    textAlign: 'center'
  }
})
