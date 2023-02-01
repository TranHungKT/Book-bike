import React, { useEffect, useRef } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import Geocoder from '@timwangdev/react-native-geocoder'
import Toast from 'react-native-easy-toast'

// Navigation
import {
  useNavigation,
  CompositeNavigationProp
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  BookingStackParams,
  SettingStackParams
} from '@/Navigation/AppNavigationType'

// Redux
import { useDispatch, useSelector } from 'react-redux'

import MapActions from '@/Redux/MapRedux'
import PhaseActions from '@/Redux/PhaseRedux'
import { RootState } from '@/Types'

// Components
import {
  ChooseLocation,
  ListBikers,
  ConfirmBook,
  ChooseService,
  TrackingNumberOrder
} from './Components'
import {
  BMap,
  BBackButton,
  Avatar,
  BToast,
  BActivityIndicator
} from '@/Components'

// Constants
import { PhaseBookingBeforeRide } from '@/Constants/PhaseReduxConstants'
import { BookingScreens } from '@/Constants/AppNavigationConstants'

// Functions
import { RAlert } from '@/Functions/AlertFunctions'
import {
  checkDeviceLocationPermissionAndroid,
  checkDeviceLocationPermissionIOS
} from '@/Functions/AppPermissionsFunctions'

// Styles
import styles from './Styles/DashboardScreenStyles'
import { Images } from '@/Themes'

// Language
import { translate } from '@/Language'

type DashboardNavigationProps = StackNavigationProp<
  BookingStackParams,
  BookingScreens.DashboardScreen
>

type NavigationProp = CompositeNavigationProp<
  DashboardNavigationProps,
  StackNavigationProp<SettingStackParams>
>

const DashboardScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const dispatch = useDispatch()

  const toastRef = useRef<Toast>(null)

  const isInitSocket = useSelector(
    (state: RootState) => state.socket.isInitSocket
  )

  const {
    phase,
    errorRequestFindBikerAfterQuit,
    fetchingRequestFindBikerAfterQuit
  } = useSelector((state: RootState) => state.phase)

  const getCurrentAddress = async (latitude: number, longitude: number) => {
    try {
      const address = await Geocoder.geocodePosition(
        { lat: latitude, lng: longitude },
        {
          maxResults: 1,
          locale: 'vn'
        }
      )
      return address[0].formattedAddress
    } catch (err) {
      toastRef.current?.show(translate('canNotFindAddress'), 5000)
    }
  }

  const getOriginalLocation = () => {
    Geolocation.getCurrentPosition(
      async (location) => {
        const { latitude, longitude } = location.coords
        // const address = await getCurrentAddress(latitude, longitude)
        const address = await getCurrentAddress(10.7731708, 106.6353054)

        // dispatch(
        //   MapActions.setOriginalLocation(
        //     longitude,
        //    latitude,
        //     address
        //   )
        // )
        dispatch(
          MapActions.setOriginalLocation(106.6353054, 10.7731708, address)
        )
      },
      () => {
        RAlert({
          title: translate('errorLocation'),
          content: translate('errorLocationContent'),
          onPressOK: () => {}
        })
      },
      {
        enableHighAccuracy: true
      }
    )
  }

  const navigateSearchScreen = () =>
    navigation.navigate({
      name: 'BookingStack',
      params: { screen: BookingScreens.SearchPlacesScreen }
    })

  const navigateToSetting = () =>
    navigation.navigate({
      name: 'SettingStack',
      params: { screen: 'SettingScreen' }
    })

  // render region
  const renderFooter = () => {
    switch (phase) {
      case PhaseBookingBeforeRide.CHOOSE_SERVICE:
        return (
          <>
            <TrackingNumberOrder />
            <ChooseService />
          </>
        )
      case PhaseBookingBeforeRide.CHOOSE_LOCATION:
        return <ChooseLocation onPress={navigateSearchScreen} />
      case PhaseBookingBeforeRide.CONFIRM_BOOK:
        return <ChooseLocation onPress={() => {}} />
      case PhaseBookingBeforeRide.GET_BIKER:
        return <ListBikers />
      case PhaseBookingBeforeRide.CHOOSE_BIKER:
        return <ConfirmBook />
      default:
        return <></>
    }
  }

  const backFunc = () => {
    switch (phase) {
      case PhaseBookingBeforeRide.CHOOSE_SERVICE:
        return <></>
      case PhaseBookingBeforeRide.CHOOSE_LOCATION:
        return dispatch(
          PhaseActions.setPhase(PhaseBookingBeforeRide.CHOOSE_SERVICE)
        )
      case PhaseBookingBeforeRide.CONFIRM_BOOK:
        return dispatch(
          PhaseActions.setPhase(PhaseBookingBeforeRide.CHOOSE_LOCATION)
        )
      case PhaseBookingBeforeRide.GET_BIKER:
        return dispatch(
          PhaseActions.setPhase(PhaseBookingBeforeRide.CONFIRM_BOOK)
        )
      case PhaseBookingBeforeRide.CHOOSE_BIKER:
        return dispatch(PhaseActions.setPhase(PhaseBookingBeforeRide.GET_BIKER))
      default:
        return <></>
    }
  }

  useEffect(() => {
    getOriginalLocation()
    Platform.OS === 'android'
      ? checkDeviceLocationPermissionAndroid()
      : checkDeviceLocationPermissionIOS()

    dispatch(PhaseActions.findRideAfterQuitRequest())
  }, [])

  useEffect(() => {
    if (!fetchingRequestFindBikerAfterQuit) {
      if (!!errorRequestFindBikerAfterQuit) {
        toastRef.current?.show(translate('cannotGetUser'), 2000)
      }
    }
  }, [fetchingRequestFindBikerAfterQuit, errorRequestFindBikerAfterQuit])

  return (
    <View style={styles.mainContainer}>
      <BMap />
      <StatusBar hidden />

      {phase !== PhaseBookingBeforeRide.CHOOSE_SERVICE ? (
        <BBackButton
          wrapperStyle={styles.backContainer}
          imageStyle={styles.imageBack}
          backFunc={backFunc}
        />
      ) : (
        <Avatar
          image={Images.biker}
          wrapperStyle={styles.imageWrapper}
          navigateFunction={navigateToSetting}
        />
      )}

      {renderFooter()}
      <BToast ref={toastRef} />

      {(!!fetchingRequestFindBikerAfterQuit || isInitSocket) && (
        <BActivityIndicator />
      )}
    </View>
  )
}

export default DashboardScreen
