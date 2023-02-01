import { getSocket } from '../Socket'
import { HEARTBEAT_EVENT } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  longitude: number,
  latitude: number,
  userAgent: string
) => {
  let Socket = getSocket()

  Socket.emit(HEARTBEAT_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        coordinates: [longitude, latitude]
      }
    }
  })
}
