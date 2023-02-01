import { getSocket } from '../Socket'

// Types
import { AddressAndCoordinates } from '@/Types'

// Constants
import { RIDE_BOOKED_EVENT } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  addressAndCoordinates: AddressAndCoordinates,
  userAgent: string
) => {
  const Socket = getSocket()
  const { address, coordinates } = addressAndCoordinates

  // Socket.emit(RIDE_BOOKED_EVENT, {
  //   payload: {
  //     token: accessToken,
  //     UID: userAgent,
  //     data: {
  //       coordinates: {
  //         origin: {
  //           lng: coordinates.originalLng,
  //           lat: coordinates.originalLat
  //         },
  //         destination: {
  //           lng: coordinates.destinationLng,
  //           lat: coordinates.destinationLat
  //         }
  //       },
  //       address: {
  //         origin: address.addressOriginalLocation,
  //         destination: address.addressDestination
  //       }
  //     }
  //   }
  // })
  Socket.emit(RIDE_BOOKED_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        coordinates: {
          origin: {
            lng: 106.6353054,
            lat: 10.7731708
          },
          destination: {
            lng: 106.6418941,
            lat: 10.7660903
          }
        },
        address: {
          origin:
            '262/13/6 Lũy Bán Bích, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh, Việt Nam',
          destination:
            'Đầm Sen, Lạc Long Quân, phường 3, Quận 11, Thành phố Hồ Chí Minh, Việt Nam'
        },
        price: 10000
      }
    }
  })
}
