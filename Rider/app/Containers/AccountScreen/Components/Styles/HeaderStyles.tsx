import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    paddingTop: Normalize(20),
    backgroundColor: Colors.white,
    marginTop: Normalize(-90),
    marginHorizontal: Normalize(20),
    borderRadius: Normalize(10)
  },
  wrapperStyle: {
    marginTop: Normalize(-70)
  },
  nameText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Normalize(24),
    paddingBottom: Normalize(10),
    paddingTop: Normalize(10),
    borderBottomWidth: Normalize(1),
    borderBottomColor: Colors.nobel
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infor: {
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    alignItems: 'center',
    flex: 0.5
  },
  numberText: {
    fontWeight: 'bold',
    fontSize: Normalize(20)
  },
  separate: {
    borderRightWidth: Normalize(1),
    borderRightColor: Colors.nobel
  }
})
