import React, { useEffect } from 'react'
import { SafeAreaView, ActivityIndicator, Text } from 'react-native'

// Navigation type
import { RootStackParams } from '@/Navigation/AppNavigationType'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import PhaseRiderActions from '@/Redux/PhaseRiderRedux'
// Constants
import {
  AppStacks,
  AuthScreens,
  MainScreens
} from '@/Constants/AppNavigationConstants'

// Styles
import styles from './Styles/SplashScreenStyle'
import { Colors } from '@/Themes'

type SplashScreenNavigationProps = StackNavigationProp<
  RootStackParams,
  AppStacks.AuthStack
>

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProps>()
  const dispatch = useDispatch()

  const { errorRefreshToken, accessToken, isBiker } = useSelector(
    (state: RootState) => state.auth
  )

  const navigateToAuth = () =>
    navigation.reset({
      index: 0,
      routes: [
        {
          name: AppStacks.AuthStack,
          params: { screen: AuthScreens.AuthScreen }
        }
      ]
    })

  const navigateToHome = () =>
    navigation.reset({
      index: 0,
      routes: [
        {
          name: AppStacks.MainStack,
          params: { screen: MainScreens.HomeScreen }
        }
      ]
    })

  useEffect(() => {
    if (errorRefreshToken) {
      navigateToAuth()
    }
    if (accessToken) {
      if (!isBiker) {
        navigateToAuth()
      } else {
        dispatch(PhaseRiderActions.findRideAfterQuitRequest())
        navigateToHome()
      }
    }
  }, [accessToken, errorRefreshToken, isBiker])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>RIDER</Text>
      <ActivityIndicator color={Colors.screaminGreen} />
    </SafeAreaView>
  )
}

export default SplashScreen
