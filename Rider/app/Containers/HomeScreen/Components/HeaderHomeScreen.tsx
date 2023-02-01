import React from 'react'
import { View, StatusBar, TouchableOpacity } from 'react-native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import SocketActions from '@/Redux/SocketRedux'

// Component
import OfflineMode from './OfflineMode'

// Styles
import styles from './Styles/HeaderHomeScreenStyles'
import { Colors } from '@/Themes'

// Svgs
import Power from '@/Svgs/Icons/power.svg'
import { RootState } from '@/Types'

const HeaderHomeScreen = () => {
  const dispatch = useDispatch()

  const { isEmitHeartbeat } = useSelector((state: RootState) => state.socket)

  const toolgePower = () => {
    if (isEmitHeartbeat) {
      return dispatch(SocketActions.stopHeartBeat())
    }
    return dispatch(SocketActions.startHeartBeat())
  }

  return (
    <>
      <StatusBar
        backgroundColor={Colors.valhalla}
        translucent={false}
        barStyle='light-content'
      />
      {!isEmitHeartbeat && <OfflineMode />}
      <View style={styles.container}>
        <View style={styles.blankView} />

        <TouchableOpacity
          style={[styles.powerButton, !isEmitHeartbeat && styles.powerOn]}
          onPress={toolgePower}
        >
          <Power width={20} height={20} />
        </TouchableOpacity>
        <View style={styles.blankView} />
      </View>
    </>
  )
}

export default HeaderHomeScreen
