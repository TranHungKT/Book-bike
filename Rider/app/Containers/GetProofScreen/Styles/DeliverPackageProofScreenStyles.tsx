import { StyleSheet } from 'react-native'

// Styles
import { Colors, Metrics, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: { flex: 1 },
  confirmSendText: {
    fontSize: Normalize(22),
    paddingHorizontal: Normalize(20),
    marginTop: Normalize(20)
  },
  rideHash: {
    textAlign: 'center',
    marginTop: Normalize(40),
    fontSize: Normalize(20)
  },
  box: {
    marginTop: Normalize(20),
    width: Metrics.screenWidth - 40,
    height: Metrics.screenHeight / 2.5,
    backgroundColor: Colors.ebony,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    width: '90%',
    marginTop: Normalize(20)
  },
  buttonRont: {
    position: 'absolute',
    bottom: Normalize(100),
    borderRadius: Normalize(10),
    borderColor: Colors.red,
    backgroundColor: Colors.white,
    width: '90%'
  },
  textRont: {
    color: Colors.red
  },
  buttonConfirm: {
    position: 'absolute',
    bottom: Normalize(40),
    width: '90%',
    borderRadius: Normalize(10)
  },
  image: {
    width: Metrics.screenWidth - 100,
    height: Metrics.screenHeight / 2.5 - Normalize(60)
  }
})
