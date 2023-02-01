import React, { useEffect } from 'react'
import { BackHandler, ToastAndroid, Platform } from 'react-native'
import AppNavigation from './AppNavigation'

// Language
import { translate } from '@/Language'

let backPressed: number = 0
const ReduxNavigation = () => {
  const onBackPress = () => {
    if (backPressed > 0) {
      BackHandler.exitApp()
      backPressed = 0
    } else {
      backPressed += 1
      ToastAndroid.show(translate('pressAgainToExit'), ToastAndroid.SHORT)
      const timeout = setTimeout(() => {
        backPressed = 0
        clearTimeout(timeout)
      }, 2000)
      return true
    }
  }

  useEffect(() => {
    if (Platform.OS === 'ios') {
      return
    }
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    )
    return () => subscription.remove()
  }, [])

  return <AppNavigation />
}

export default ReduxNavigation
