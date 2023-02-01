import { io, Socket } from 'socket.io-client'
import { getUniqueId } from 'react-native-device-info'

// Redux
import { store } from '@/Containers/App'
import SocketActions from '@/Redux/SocketRedux'
import PhaseRiderActions from '@/Redux/PhaseRiderRedux'
import AuthActions from '@/Redux/AuthRedux'
import RideInforActions from '@/Redux/RideInforRedux'
import UserActions from '@/Redux/UserRedux'

// Functions
import { requestUserPermissionAndGetToken } from '@/Functions/FCMToken'

// Constants
import {
  RIDE_BIKER_CHOSEN_EVENT,
  DELIVERY_BIKER_CHOSEN_EVENT,
  TOKEN_EXPIRED_ERROR,
  TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER_ERROR,
  DISCONNECT_EVENT
} from '@/Constants/SocketEventConstants'
import { PhaseRider, SERVICE } from '@/Constants/PhaseRiderConstants'
import {
  mapDeliveryDataToFrontEnd,
  mapRideDataToFrontEnd
} from '@/Functions/MapDataToFrontendFunctions'

let socketIo: Socket
let isInitSocketIo = false

let token: string
let isGetToken = false

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
      store.dispatch(SocketActions.initSocketSuccess())
      startListening()
    } else {
      store.dispatch(SocketActions.initSocketError())
    }
  }
}

export const getRideHash = () => {
  const state: any = store.getState()
  return state.socket.rideHash
}

export const getSocket = () => {
  if (!isInitSocketIo) {
    throw 'Socket is not ready'
  }
  return socketIo
}

export const getAccessToken = () => {
  if (!isGetToken) {
    throw 'Can not find token'
  }
  return token
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
  socketIo.onAny(async (__, ...args) => {
    const socketEvent = args[0].event
    const payload = args[0].payload

    switch (socketEvent) {
      case RIDE_BIKER_CHOSEN_EVENT:
        const data = mapRideDataToFrontEnd(payload)

        store.dispatch(RideInforActions.getInforRide(data))

        store.dispatch(PhaseRiderActions.setService(SERVICE.RIDE))
        store.dispatch(PhaseRiderActions.setPhaseRider(PhaseRider.GET_A_RIDE))
        return

      case DELIVERY_BIKER_CHOSEN_EVENT:
        const deliveryData = mapDeliveryDataToFrontEnd(payload)

        store.dispatch(RideInforActions.getInforDelivery(deliveryData))

        store.dispatch(PhaseRiderActions.setService(SERVICE.DELIVERY))
        store.dispatch(PhaseRiderActions.setPhaseRider(PhaseRider.GET_A_RIDE))
        return
      case 'GENERIC_ERROR':
        break
      case DISCONNECT_EVENT:
        store.dispatch(SocketActions.disconnectSocket())
        return
      default:
        return
    }
  })
}
