import Colors from './Colors'
import Metrics from './Metrics'
import { Platform } from 'react-native'
const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white
    },
    content: {
      flex: 1,
      padding: Metrics.doubleBaseMargin
    },
    space: {
      flex: 1
    },
    defaultElevation: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22
        },
        android: {
          elevation: 3
        }
      })
    }
  }
}

export default ApplicationStyles
