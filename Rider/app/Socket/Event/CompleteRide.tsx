import { getSocket } from '../Socket'

// Constants
import { RIDE_COMPLETE_EVENT } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  phone_number: string,
  rideHash: string,
  userAgent: string
) => {
  let Socket = getSocket()

  Socket.emit(RIDE_COMPLETE_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        rideHash,
        phone: phone_number
      }
    }
  })
}
