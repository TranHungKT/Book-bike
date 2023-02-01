import { StyleSheet } from 'react-native'

// Styles
import { Colors, Normalize } from '@/Themes'

export default StyleSheet.create({
  container: { flex: 1 },
  requestPackageText: {
    fontSize: Normalize(22),
    color: Colors.atomic,
    paddingHorizontal: Normalize(30),
    marginTop: Normalize(20)
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
  }
})
