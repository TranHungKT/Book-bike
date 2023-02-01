import { getSocket } from '../Socket'

// Constants
import { DELIVERY_COMPLETE_EVENT } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  rideHash: string,
  image: string,
  userAgent: string
) => {
  let Socket = getSocket()

  Socket.emit(DELIVERY_COMPLETE_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        deliveryHash: rideHash,
        deliverySuccessProof: `data:image/jpeg;base64,${image}`
      }
    }
  })
}
