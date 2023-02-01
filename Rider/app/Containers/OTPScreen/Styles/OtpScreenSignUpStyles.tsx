import { StyleSheet } from 'react-native'

import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1
  },
  textTitle: {
    marginHorizontal: Normalize(20),
    textAlign: 'center',
    fontSize: Normalize(24),
    marginTop: Normalize(30)
  },
  textDes: {
    marginHorizontal: Normalize(20),
    textAlign: 'center',
    fontSize: Normalize(20)
  },
  codeView: {
    marginTop: Normalize(20),
    flexDirection: 'row',
    justifyContent: 'center'
  },
  inputContainer: {
    width: Normalize(50),
    height: Normalize(50),
    backgroundColor: Colors.gainsboro,
    marginHorizontal: Normalize(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    fontSize: Normalize(18),
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.black
  },
  button: {
    marginRight: Normalize(20),
    position: 'absolute',
    bottom: Normalize(10)
  },
  timeOut: {
    marginTop: Normalize(20),
    marginLeft: Normalize(20),
    alignSelf: 'center'
  },
  imageStyle: {
    tintColor: Colors.black
  },
  nextButton: {
    marginTop: Normalize(100),
    width: '90%'
  }
})
