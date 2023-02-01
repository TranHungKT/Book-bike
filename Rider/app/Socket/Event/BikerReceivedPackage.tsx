import { getSocket } from '../Socket'

// Constants
import { BIKER_RECEIVED_PACKAGE } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  rideHash: string,
  image: string,
  userAgent: string
) => {
  let Socket = getSocket()

  Socket.emit(BIKER_RECEIVED_PACKAGE, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        deliveryHash: rideHash,
        bikerReceivedPackageProof: `data:image/jpeg;base64,${image}`
      }
    }
  })
}
