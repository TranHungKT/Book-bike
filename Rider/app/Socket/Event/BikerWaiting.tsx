import { getSocket } from '../Socket'

// Constants
import { RIDE_BIKER_WAITING } from '@/Constants/SocketEventConstants'

export default (accessToken: string, rideHash: string, userAgent: string) => {
  let Socket = getSocket()

  Socket.emit(RIDE_BIKER_WAITING, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        rideHash
      }
    }
  })
}
