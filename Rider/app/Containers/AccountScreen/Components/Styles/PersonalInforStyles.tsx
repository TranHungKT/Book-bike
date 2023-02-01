import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics } from '@/Themes'

export default StyleSheet.create({
  container: {
    marginTop: Normalize(10),
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: Normalize(22),
    fontWeight: 'bold',
    color: Colors.black50
  },
  wrapperStyle: {
    flexDirection: 'row'
  },
  inforView: {
    backgroundColor: Colors.white,
    marginTop: Normalize(10),
    paddingBottom: Normalize(30)
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Normalize(10)
  },
  editImage: {
    tintColor: Colors.black,
    height: Normalize(25),
    width: Normalize(25)
  },
  textInput: {
    width: Metrics.screenWidth - Normalize(40),
    height: 100
  },
  genderView: {
    marginTop: Normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  genderText: {
    fontWeight: 'bold',
    fontSize: Normalize(18)
  },
  picker: {
    width: (Metrics.screenWidth * 1.5) / 4,
    height: Normalize(20)
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrapperName: {
    width: '45%'
  },
  buttonStyle: {
    backgroundColor: Colors.nobel,
    borderRadius: Normalize(5),
    padding: Normalize(2),
    paddingHorizontal: Normalize(5)
  },
  textSaveStyle: {
    fontSize: Normalize(16)
  },
  logoutStyle: {
    width: '90%',
    marginTop: Normalize(10),
    marginBottom: Normalize(10),
    backgroundColor: Colors.white,
    borderColor: Colors.amaranth,
    borderWidth: Normalize(2)
  },
  logoutText: {
    color: Colors.amaranth,
    fontSize: Normalize(16),
    fontWeight: 'bold'
  }
})
