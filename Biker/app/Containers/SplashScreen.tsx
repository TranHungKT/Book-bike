import React, { useEffect } from 'react'
import { SafeAreaView, ActivityIndicator, Text } from 'react-native'

// Navigation type
import { RootStackParams } from '@/Navigation/AppNavigationType'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Constants
import { AppStacks, AuthScreens } from '@/Constants/AppNavigationConstants'

// Styles
import styles from './Styles/SplashScreenStyle'
import { Colors } from '@/Themes'

type SplashScreenNavigationProps = StackNavigationProp<
  RootStackParams,
  AppStacks.AuthStack
>

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProps>()

  const { errorRefreshToken, accessToken } = useSelector(
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
          name: AppStacks.BookingStack,
          params: { screen: 'DashboardScreen' }
        }
      ]
    })

  useEffect(() => {
    if (errorRefreshToken) {
      navigateToAuth()
    }
    if (accessToken) {
      navigateToHome()
    }
  }, [accessToken, errorRefreshToken])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>BIKER</Text>
      <ActivityIndicator color={Colors.white} />
    </SafeAreaView>
  )
}

export default SplashScreen
