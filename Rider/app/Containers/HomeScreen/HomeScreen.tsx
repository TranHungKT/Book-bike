import React, { useEffect } from 'react'
import { Platform, LogBox } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import BackgroundTimer from 'react-native-background-timer'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParams } from '@/Navigation/AppNavigationType'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import SocketActions from '@/Redux/SocketRedux'
// import RideInforActions from '@/Redux/RideInforRedux'

import { RootState } from '@/Types'

// Components
import { HeaderHomeScreen, GotARideNoti } from './Components'

// Functions
import {
  checkDeviceLocationPermissionAndroid,
  checkDeviceLocationPermissionIOS
} from '@/Functions/AppPermissionFunctions'

// Constants
import { PhaseRider, PhaseRiderInRide } from '@/Constants/PhaseRiderConstants'

// Styles
import { RAlert } from '@/Functions/AlertFunctions'
import styles from './Styles/HomeScreenStyles'
// Language
import { translate } from '@/Language'
import { BActivityIndicator, BMap } from '@/Components'

type HomeScreenNavigationProps = StackNavigationProp<
  MainStackParams,
  'TabScreen'
>
LogBox.ignoreAllLogs()
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>()

  const dispatch = useDispatch()

  const isEmitHeartbeat = useSelector(
    (state: RootState) => state.socket.isEmitHeartbeat
  )
  const { fetchingRequestFindBikerAfterQuit } = useSelector(
    (state: RootState) => state.phaseRider
  )

  const { phaseRider } = useSelector((state: RootState) => state.phaseRider)

  const togglePower = () => {}

  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        // const { longitude, latitude } = position.coords

        if (isEmitHeartbeat) {
          dispatch(
            // SocketActions.emitHeartBeat(longitude, latitude)
            SocketActions.emitHeartBeat(106.6453054, 10.7631708)
          )
        } else {
          dispatch(
            // SocketActions.setOriginalLocationBeforeRide(longitude, lœatitude)
            SocketActions.setOriginalLocationBeforeRide(106.6453054, 10.7631708)
          )
        }
      },
      () => {
        RAlert({
          title: translate('errorLocation'),
          content: translate('errorLocationContent'),
          onPressOK: () => togglePower(),
          onPressCancel: () => togglePower()
        })
      },
      {
        enableHighAccuracy: true
      }
    )
  }

  const navigateToRideScreen = () => navigation.navigate('RideScreen')

  const navigateToPhaseRideScreen = () => navigation.navigate('PhaseRideScreen')

  useEffect(() => {
    if (
      phaseRider === PhaseRider.GET_A_RIDE ||
      PhaseRiderInRide.includes(phaseRider)
    ) {
      dispatch(SocketActions.startHeartBeat())
    }
    phaseRider === PhaseRider.GET_A_RIDE && navigateToRideScreen()
  }, [phaseRider])

  useEffect(() => {
    findCoordinates()

    BackgroundTimer.runBackgroundTimer(() => {
      findCoordinates()
    }, 15000)
    return () => {
      BackgroundTimer.stopBackgroundTimer()
    }
  }, [isEmitHeartbeat])

  useEffect(() => {
    Platform.OS === 'android'
      ? checkDeviceLocationPermissionAndroid()
      : checkDeviceLocationPermissionIOS()
  }, [])

  return (
    <>
      <HeaderHomeScreen />
      {phaseRider === PhaseRider.GET_A_RIDE && (
        <GotARideNoti onPressButton={navigateToRideScreen} type={0} />
      )}
      {PhaseRiderInRide.includes(phaseRider) && (
        <GotARideNoti onPressButton={navigateToPhaseRideScreen} type={1} />
      )}
      <BMap wrapperStyle={styles.wrapperStyle} type={0} />
      {fetchingRequestFindBikerAfterQuit && <BActivityIndicator />}
    </>
  )
}
export default HomeScreen
