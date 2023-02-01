import { getUniqueId } from 'react-native-device-info'

const uniqueId = getUniqueId()

export default {
  baseURL: 'https://waybox-realtime-staging.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    UID: uniqueId
  },
  timeOut: 30000
}
