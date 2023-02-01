import React, { useEffect } from 'react'
import {
  NavigationContainer,
  NavigationContainerRef,
  Theme
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

// FCM
import {
  getMessageHandlerOnBackground,
  getMessageOnForeground,
  getMessageOnBackground,
  getMessageOnQuit
} from '@/Functions/FCMFunctions'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Theme
import { DefaultTheme, DarkTheme } from '@/Themes'

// Constants
import { AppStacks, AuthScreens } from '@/Constants/AppNavigationConstants'
import { TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER_ERROR } from '@/Constants/SocketEventConstants'

// Navigation Stack
import { AuthStack, MainStack } from './AppNavigationStack'

// Navigation Type
import { RootStackParams } from './AppNavigationType'

const Stack = createStackNavigator<RootStackParams>()

const AppNavigation = () => {
  const scheme = useColorScheme()

  const { errorRefreshToken } = useSelector((state: RootState) => state.auth)

  const navigationRef = React.useRef<NavigationContainerRef>(null)

  useEffect(() => {
    if (errorRefreshToken === TOKEN_IS_NOT_AUTHENTICATED_BY_SERVER_ERROR) {
      navigationRef.current?.resetRoot({
        index: 0,
        routes: [
          {
            name: AppStacks.AuthStack,
            params: { screen: AuthScreens.AuthScreen }
          }
        ]
      })
    }
  }, [errorRefreshToken])

  useEffect(() => {
    getMessageOnForeground()
    getMessageOnBackground()
    getMessageHandlerOnBackground()
    getMessageOnQuit()
  }, [])

  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <NavigationContainer
          theme={
            scheme === 'dark' ? (DarkTheme as Theme) : (DefaultTheme as Theme)
          }
          ref={navigationRef}
          // onStateChange={screenTracking}
        >
          <Stack.Navigator
            initialRouteName={AppStacks.AuthStack}
            headerMode={'none'}
          >
            <Stack.Screen name={AppStacks.AuthStack} component={AuthStack} />
            <Stack.Screen name={AppStacks.BookingStack} component={MainStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaProvider>
  )
}

export default AppNavigation
