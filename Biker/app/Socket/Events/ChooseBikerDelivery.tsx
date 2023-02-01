import { getSocket } from '../Socket'

// Constants
import { DELIVERY_BIKER_CHOSEN_EVENT } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  phoneNumber: string,
  rideHash: string,
  price: number,
  userAgent: string
) => {
  const Socket = getSocket()

  Socket.emit(DELIVERY_BIKER_CHOSEN_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        deliveryHash: rideHash,
        biker: phoneNumber,
        price
      }
    }
  })
}
