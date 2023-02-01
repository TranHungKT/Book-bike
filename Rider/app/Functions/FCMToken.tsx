import messaging from '@react-native-firebase/messaging'

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
  return await messaging().getToken()
}

export { getFCMToken, requestUserPermissionAndGetToken }
