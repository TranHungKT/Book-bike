import { StyleSheet } from 'react-native'

import { Metrics, Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  orderButton: {
    width: Metrics.screenWidth / 3,
    height: Normalize(30),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    marginTop: Normalize(10),
    borderRadius: Normalize(10)
  },
  orderText: {
    fontWeight: 'bold',
    color: Colors.white
  },
  containerModal: {
    width: (Metrics.screenWidth * 3) / 4,
    height: Metrics.screenHeight / 3,
    backgroundColor: Colors.yellow,
    alignSelf: 'center',
    borderRadius: Normalize(20)
  },
  nameModal: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Normalize(24)
  },
  textInput: {
    padding: 20
  },
  nameView: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButton: {
    alignSelf: 'flex-end',
    paddingTop: Normalize(5),
    paddingRight: Normalize(10)
  },
  cancelImage: {
    height: Normalize(20),
    width: Normalize(20)
  }
})
