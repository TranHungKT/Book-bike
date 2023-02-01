import { getSocket } from '../Socket'

// Constants
import { DELIVERY_CONFIRMED_EVENT } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  customer: string,
  rideHash: string,
  userAgent: string
) => {
  let Socket = getSocket()

  Socket.emit(DELIVERY_CONFIRMED_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        customer,
        deliveryHash: rideHash
      }
    }
  })
}
