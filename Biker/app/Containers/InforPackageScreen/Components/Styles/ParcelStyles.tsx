import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors, ApplicationStyles } from '@/Themes'

export default StyleSheet.create({
  container: {
    padding: Normalize(10),
    backgroundColor: Colors.white,
    marginHorizontal: Normalize(10),
    marginTop: Normalize(10),
    borderRadius: Normalize(10),
    ...ApplicationStyles.screen.defaultElevation
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: Normalize(18),
    marginBottom: Normalize(10)
  },
  typeText: {
    marginBottom: Normalize(5)
  },

  weightText: {
    marginTop: Normalize(5),
    marginBottom: Normalize(10)
  },
  category: {
    paddingTop: Normalize(6),
    paddingBottom: Normalize(6),
    paddingHorizontal: Normalize(10),
    borderRadius: Normalize(18),
    backgroundColor: Colors.gainsboro80,
    marginHorizontal: Normalize(7)
  },
  categoryText: {
    fontSize: Normalize(14)
  },
  selectedCategory: {
    borderColor: Colors.fruitSalad,
    borderWidth: Normalize(1),
    backgroundColor: Colors.screaminGreen80
  },
  picker: {
    height: Normalize(50),
    width: Normalize(150)
  },
  weight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pickerItem: {
    width: Normalize(40),
    color: 'red',
    marginLeft: Normalize(20)
  }
})
