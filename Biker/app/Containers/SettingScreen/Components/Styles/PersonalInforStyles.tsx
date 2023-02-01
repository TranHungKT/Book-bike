import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, Metrics } from '@/Themes'

export default StyleSheet.create({
  container: {
    marginTop: Normalize(10)
  },
  title: {
    marginLeft: Normalize(20),
    fontSize: Normalize(22),
    fontWeight: 'bold',
    color: Colors.black
  },
  wrapperStyle: {
    flexDirection: 'row'
  },
  inforView: {
    backgroundColor: Colors.white,
    marginTop: Normalize(10),
    paddingBottom: Normalize(30)
  },
  scrollView: {
    paddingHorizontal: Normalize(20)
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  editImage: {
    marginRight: Metrics.doubleBaseMargin,
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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  genderText: {
    fontWeight: 'bold',
    fontSize: Normalize(18)
  },
  picker: {
    width: (Metrics.screenWidth * 1.5) / 4,
    height: Normalize(20)
  },
  buttonStyle: {
    backgroundColor: Colors.nobel,
    borderRadius: Normalize(5),
    marginRight: Normalize(10),
    padding: Normalize(2),
    paddingHorizontal: Normalize(5)
  },
  textSaveStyle: {
    fontSize: Normalize(16)
  },
  saveButton: {
    backgroundColor: Colors.royalBlue
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrapperName: {
    width: '45%'
  }
})
