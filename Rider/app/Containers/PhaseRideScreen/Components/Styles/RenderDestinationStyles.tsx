import { StyleSheet } from 'react-native'

// Styles
import { Normalize, Colors } from '@/Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Normalize(5),
    paddingTop: Normalize(10),
    paddingBottom: Normalize(10),
    borderRadius: Normalize(15),
    flexDirection: 'row',
    position: 'absolute',
    top: Normalize(40),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginHorizontal: Normalize(40),
    shadowColor: Colors.black,
    shadowOffset: {
      width: Normalize(0),
      height: Normalize(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  imageView: {
    height: Normalize(40),
    width: Normalize(40),
    borderRadius: Normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.royalBlue
  },
  image: {
    height: Normalize(25),
    width: Normalize(25),
    tintColor: Colors.white
  },
  destinationText: {
    fontSize: Normalize(16),
    paddingHorizontal: Normalize(10),
    width: '90%'
  }
})
