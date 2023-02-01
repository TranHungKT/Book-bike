import { io, Socket } from 'socket.io-client'
import { getUniqueId } from 'react-native-device-info'

// Redux
import { store } from '@/Containers/App'
import SocketActions from '@/Redux/SocketRedux'
import RideInforActions from '@/Redux/RideInforRedux'
import PackageInforActions from '@/Redux/PackageInfor'
import PhaseActions from '@/Redux/PhaseRedux'
import AuthActions from '@/Redux/AuthRedux'
import UserActions from '@/Redux/UserRedux'
import MapActions from '@/Redux/MapRedux'

// Constants
import {
  FIND_BIKER_NO_RESULTS,
  RETRY_FIND_BIKER,
  FOUND_BIKERS_EVENT,
  GENERIC_ERROR,
  TOKEN_EXPIRED_ERROR,
  TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER_ERROR,
  LOCATION_UPDATE,
  RIDE_CONFIRMED_EVENT,
  RIDE_CANCELLED_EVENT,
  DELIVERY_CONFIRMED_EVENT
} from '@/Constants/SocketEventConstants'

// Functions
import { requestUserPermissionAndGetToken } from '@/Functions/FCMFunctions'
import { mapBikerFoundResultToFrontEnd } from '@/Functions/MapDataToFrontendFunctions'
import { PhaseBookingInRide } from '@/Constants/PhaseReduxConstants'
import { emitEvent, getRideData } from '@/Functions/EmitEventStateFunctions'

let socketIo: Socket
let isInitSocketIo = false

const userAgent = getUniqueId()

export const initSocket = async (accessToken: string) => {
  const fcmToken = await requestUserPermissionAndGetToken()

  store.dispatch(UserActions.setUserAgent(userAgent))

  if (fcmToken) {
    isInitSocketIo = true
    socketIo = io('https://waybox-realtime-staging.herokuapp.com/', {
      path: '/socket.io',
      transports: ['websocket'],
      auth: {
        token: accessToken
      },
      query: { fcmToken, UID: userAgent }
    })
    if (socketIo) {
      startListening()
    } else {
      store.dispatch(SocketActions.initSocketError())
    }
  }
}

export const getSocket = () => {
  if (!isInitSocketIo) {
    throw 'Socket is not ready'
  }
  return socketIo
}

export const wrapperEmitSocket = (EmitFunction: () => void) => {
  let socketIo = getSocket()
  let isRetrying = false

  EmitFunction()
  const state: any = store.getState()

  socketIo.onAny(async (event, __) => {
    if (isRetrying) {
      return
    }
    switch (event) {
      case TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER_ERROR:
        store.dispatch(
          AuthActions.refreshTokenFailure(
            TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER_ERROR
          )
        )
        return
      case TOKEN_EXPIRED_ERROR:
        const userName = state.auth.userName
        const refreshToken = state.auth.refreshToken
        store.dispatch(AuthActions.refreshTokenRequest(userName, refreshToken))
        break
      default:
        return
    }
    EmitFunction()
    isRetrying = true
  })
}

export const startListening = () => {
  const socketIo = getSocket()

  socketIo.onAny(async (event, ...args) => {
    const payload = args[0].payload

    switch (event) {
      case 'ready':
        store.dispatch(SocketActions.initSocketSuccess())
        break
      case FOUND_BIKERS_EVENT: {
        const { bikers, suggestedPrice } = payload

        let rideHash = ''
        if (payload.rideHash === undefined) {
          rideHash = payload.deliveryHash
        } else {
          rideHash = payload.rideHash
        }

        store.dispatch(SocketActions.emitBookingSuccess())

        const dataBikers = bikers.map((biker: any) =>
          mapBikerFoundResultToFrontEnd(biker)
        )

        store.dispatch(
          PhaseActions.eventFoundBikerResult(
            dataBikers,
            rideHash,
            Math.round(suggestedPrice / 1000)
          )
        )
        return
      }
      case FIND_BIKER_NO_RESULTS:
        store.dispatch(SocketActions.emitBookingError(FIND_BIKER_NO_RESULTS))
        return
      case RETRY_FIND_BIKER:
        store.dispatch(SocketActions.emitBookingError(RETRY_FIND_BIKER))
        return
      case RIDE_CONFIRMED_EVENT:
        store.dispatch(
          RideInforActions.setPhaseRide(
            PhaseBookingInRide.CONFIRM_RIDE,
            Date.now()
          )
        )
        return
      case DELIVERY_CONFIRMED_EVENT: {
        const rideHash = payload

        const { type, index } = getRideData(rideHash)

        emitEvent(type, index, PhaseBookingInRide.CONFIRM_RIDE)
        return
      }
      case RIDE_CANCELLED_EVENT:
        store.dispatch(
          RideInforActions.setPhaseRide(
            PhaseBookingInRide.REJECT_RIDE,
            Date.now()
          )
        )
        return
      case LOCATION_UPDATE: {
        const { location, deliveryHash } = payload

        const { lng, lat } = location

        if (deliveryHash) {
          const { index } = getRideData(deliveryHash)
          return store.dispatch(
            PackageInforActions.bikerLocationUpdateRequest(lng, lat, index)
          )
        } else {
          return store.dispatch(RideInforActions.updateLocationBiker(lng, lat))
        }
      }
      case GENERIC_ERROR:
        console.log('errorororo', payload)

      case 'error':
        console.log('error phone number', payload)
        break
      default:
        return
    }
  })
}
