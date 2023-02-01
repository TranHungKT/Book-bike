import { getSocket } from '../Socket'

// Constants
import { RIDE_BIKER_CHOSEN_EVENT } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  phoneNumber: string,
  rideHash: string,
  price: string,
  userAgent: string
) => {
  const Socket = getSocket()

  Socket.emit(RIDE_BIKER_CHOSEN_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        rideHash: rideHash,
        biker: phoneNumber,
        price
      }
    }
  })
}
