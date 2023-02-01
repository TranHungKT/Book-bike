import { Metrics, Normalize, Colors } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  calendar: {
    width: Metrics.screenWidth,
    height: Normalize(100)
  },
  calendarToggle: {
    width: Metrics.screenWidth,
    height: Normalize(500)
  },
  calendarHeaderStyle: {
    paddingTop: Normalize(10),
    color: Colors.black,
    fontSize: Normalize(20)
  },
  dateNumberStyle: {
    color: Colors.black
  },
  dateNameStyle: {
    color: Colors.black
  },
  iconContainer: {
    flex: 0.1
  },
  highlightDateNameStyle: {
    color: Colors.white
  },
  highlightDateNumberStyle: {
    color: Colors.white
  },
  highlightDateContainerStyle: {
    backgroundColor: Colors.royalBlue
  }
})
