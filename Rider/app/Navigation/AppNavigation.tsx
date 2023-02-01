import React from 'react'
import { NavigationContainer, Theme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

// Theme
import { DefaultTheme, DarkTheme } from '@/Themes'

// Constants
import { AppStacks } from '@/Constants/AppNavigationConstants'

// Navigation Stack
import { AuthStack, MainStack } from './AppNavigationStack'

// NavigationActions
// import { screenTracking } from './NavigationActions'

// Navigation Type
import { RootStackParams } from './AppNavigationType'

const Stack = createStackNavigator<RootStackParams>()

const AppNavigation = () => {
  const scheme = useColorScheme()
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <NavigationContainer
          theme={
            scheme === 'dark' ? (DarkTheme as Theme) : (DefaultTheme as Theme)
          }
          // onStateChange={screenTracking}
        >
          <Stack.Navigator
            initialRouteName={AppStacks.AuthStack}
            headerMode={'none'}
          >
            <Stack.Screen name={AppStacks.AuthStack} component={AuthStack} />
            <Stack.Screen name={AppStacks.MainStack} component={MainStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaProvider>
  )
}

export default AppNavigation
