import { getSocket } from '../Socket'
import { STOP_HEARTBEAT_EVENT } from '@/Constants/SocketEventConstants'

export default (accessToken: string, userAgent: string) => {
  let Socket = getSocket()

  Socket.emit(STOP_HEARTBEAT_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent
    }
  })
}
