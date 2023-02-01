import messaging from '@react-native-firebase/messaging'

import {
  emitEvent,
  IndexPhaseType,
  getRideData
} from './EmitEventStateFunctions'

import {
  RIDE_COMPLETE_EVENT,
  RIDE_BIKER_WAITING,
  DELIVERY_BIKER_WAITING,
  BIKER_RECEIVED_PACKAGE,
  DELIVERY_COMPLETE_EVENT
} from '@/Constants/SocketEventConstants'
import {
  PhaseBookingAfterRide,
  PhaseBookingInRide
} from '@/Constants/PhaseReduxConstants'

// TYPE 0 is ride service, 1 is delivery service
// index is index of package

const requestUserPermissionAndGetToken = async () => {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  let fcmToken: string | undefined = ''
  if (enabled) {
    fcmToken = await getFCMToken()
    if (fcmToken) {
      return fcmToken
    }
  } else {
    console.log('Not authorize message')
  }
}

const getFCMToken = async () => {
  const fcmToken = await messaging().getToken()
  if (fcmToken) {
    return fcmToken
  } else {
    console.log('Failed', 'No token received')
  }
}

const listeningEvent = (data: any) => {
  const rideData: IndexPhaseType = data.data.rideHash
    ? getRideData(data.data.rideHash)
    : getRideData(data.data.deliveryHash)
  const { index, type } = rideData

  switch (data.data.event) {
    case RIDE_BIKER_WAITING:
      emitEvent(type, index, PhaseBookingInRide.BIKER_WAITING)
      return
    case DELIVERY_BIKER_WAITING:
      emitEvent(type, index, PhaseBookingInRide.BIKER_WAITING)
      return
    case BIKER_RECEIVED_PACKAGE:
      emitEvent(type, index, PhaseBookingInRide.BIKER_RECEIVED_PACKAGE)
      return
    case RIDE_COMPLETE_EVENT:
      emitEvent(type, index, PhaseBookingAfterRide.RIDE_COMPLETE_EVENT)
      return
    case DELIVERY_COMPLETE_EVENT:
      emitEvent(type, index, PhaseBookingAfterRide.RIDE_COMPLETE_EVENT)
      return
    default:
      return
  }
}

const getMessageOnForeground = () =>
  messaging().onMessage((data: any) => {
    if (data) {
      listeningEvent(data)
    }
  })
const getMessageOnBackground = () =>
  messaging().onNotificationOpenedApp((data: any) => {
    if (data) {
      listeningEvent(data)
    }
  })
const getMessageOnQuit = () =>
  messaging()
    .getInitialNotification()
    .then((data) => {
      if (data) {
        listeningEvent(data)
      }
    })

const getMessageHandlerOnBackground = () =>
  messaging().setBackgroundMessageHandler(async (data: any) => {
    if (data) {
      listeningEvent(data)
    }
  })

export {
  getFCMToken,
  requestUserPermissionAndGetToken,
  getMessageHandlerOnBackground,
  getMessageOnBackground,
  getMessageOnForeground,
  getMessageOnQuit
}
