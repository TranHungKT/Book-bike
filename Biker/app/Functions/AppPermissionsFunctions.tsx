import {
  PERMISSIONS,
  requestMultiple,
  RESULTS,
  checkMultiple,
  openSettings,
  request,
  check
} from 'react-native-permissions'
import RNAndroidLocationEnabler from 'react-native-android-location-enabler'

import { Platform } from 'react-native'

// Functions
import { RAlert } from './AlertFunctions'

// Language
import { translate } from '@/Language'

export const openAppSettings = () => {
  openSettings().catch(() => console.warn('Cannot open settings'))
}

export const checkDeviceLocationPermissionAndroid = () => {
  let permissionLocationAndroid = [
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
  ]

  checkMultiple(permissionLocationAndroid).then((statuses) => {
    switch (statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
      case RESULTS.DENIED:
        requestMultiple(permissionLocationAndroid)
          .then()
          .catch((err) => console.log('Request denied again', err))
        break
      case RESULTS.LIMITED:
        break
      case RESULTS.GRANTED:
        enableLocationService()
        break
      case RESULTS.BLOCKED:
        RAlert({
          title: translate('requestLocationTitle'),
          content: translate('requestLocationPermissionContent'),
          onPressOK: openAppSettings
        })
        break
      default:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
    }

    switch (statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION]) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
      case RESULTS.DENIED:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
      case RESULTS.LIMITED:
        break
      case RESULTS.GRANTED:
        enableLocationService()
        break
      case RESULTS.BLOCKED:
        RAlert({
          title: translate('requestLocationTitle'),
          content: translate('requestLocationPermissionContent'),
          onPressOK: openAppSettings
        })
        break
      default:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
    }
  })
}

export const checkDeviceLocationPermissionIOS = () => {
  let permissionLocationAndroid = [
    PERMISSIONS.IOS.LOCATION_ALWAYS,
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  ]

  checkMultiple(permissionLocationAndroid).then((statuses) => {
    switch (statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
      case RESULTS.DENIED:
        requestMultiple(permissionLocationAndroid)
          .then()
          .catch((err) => console.log('Request denied again', err))
        break
      case RESULTS.LIMITED:
        break
      case RESULTS.GRANTED:
        break
      case RESULTS.BLOCKED:
        RAlert({
          title: translate('requestLocationTitle'),
          content: translate('requestLocationPermissionContent'),
          onPressOK: openAppSettings
        })
        break
      default:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
    }

    switch (statuses[PERMISSIONS.IOS.LOCATION_ALWAYS]) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
      case RESULTS.DENIED:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
      case RESULTS.LIMITED:
        break
      case RESULTS.GRANTED:
        break
      case RESULTS.BLOCKED:
        RAlert({
          title: translate('requestLocationTitle'),
          content: translate('requestLocationPermissionContent'),
          onPressOK: openAppSettings
        })
        break
      default:
        console.log(
          'This feature is not available (on this device / in this context)'
        )
        break
    }
  })
}

const enableLocationService = () => {
  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000
  })
    .then(() => {})
    .catch((err) => {
      console.log('errasdad', err.code)
      switch (err.code) {
        case 'ERR00': // The user has clicked on Cancel button in the popup
          break
        case 'ERR01': // If the Settings change are unavailable
          console.log('Setting GPS unavailable')
          break
        case 'ERR02': // If the popup has failed to open
          console.log('Pop up failed to open')
          break
        case 'ERR03': // Internal error
          break
        default:
          break
      }
    })
}

export const checkCameraPermission = (callback?: any) => {
  let cameraPermission =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
  check(cameraPermission)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)'
          )
          break
        case RESULTS.BLOCKED:
          RAlert({
            title: translate('requestCameraTitle'),
            content: translate('requestCameraPermissionContent'),
            onPressOK: openAppSettings
          })
          break
        case RESULTS.DENIED:
          request(cameraPermission).then((result) => {
            if (result === RESULTS.GRANTED) {
              callback()
            }
          })
          break
        case RESULTS.GRANTED:
          callback()
          break
        default:
          console.log(
            'This feature is not available (on this device / in this context)'
          )
          break
      }
    })
    .catch((error) => {
      console.log('Error on check camera permission: ', error)
    })
}
