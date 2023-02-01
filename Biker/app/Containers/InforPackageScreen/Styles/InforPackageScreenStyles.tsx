import { Colors, Normalize } from '@/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    flex: 1
  },
  titleStyle: {
    color: Colors.white,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: Normalize(10)
  },
  buttonStyle: {
    marginTop: Normalize(80),
    backgroundColor: Colors.royalBlue
  },
  nextButtonView: {
    height: Normalize(15)
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageView: {
    flexDirection: 'row',
    marginTop: Normalize(5),
    marginBottom: Normalize(5),
    borderRadius: Normalize(5),
    backgroundColor: Colors.white,
    padding: Normalize(10),
    alignItems: 'center',
    marginHorizontal: Normalize(10),
    elevation: 1,
    justifyContent: 'space-between'
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageName: {
    marginLeft: Normalize(5)
  }
})
