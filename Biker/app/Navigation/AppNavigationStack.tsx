import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// AuthStack Screen
import SplashScreen from '@/Containers/SplashScreen'
import { AuthScreen } from '@/Containers/AuthScreen'
import { SignInScreen } from '@/Containers/SignInScreen'
import { SignUpScreen } from '@/Containers/SignUpScreen'
import { ForgotPasswordScreen } from '@/Containers/ForgotPasswordScreen'
import { OTPScreen } from '@/Containers/OTPScreen'

// MainStack Screen
import {
  SettingScreen,
  ProfileScreen,
  NotificationScreen,
  InviteFriendScreen
} from '@/Containers/SettingScreen'
import { DashboardScreen } from '@/Containers/DashboardScreen'
import { SearchPlacesScreen } from '@/Containers/SearchPlaceScreen'

import { InforPackageScreen } from '@/Containers/InforPackageScreen'

import {
  ConfirmPasswordScreen,
  ChangePasswordScreen
} from '@/Containers/ChangePasswordScreen'
import { OrderTrackingScreen } from '@/Containers/OrderTrackingScreen'

// History material tab
import {
  HistoryScreen,
  OnGoingScreen,
  HistoryDetail
} from '@/Containers/HistoryOrderScreen'

// Navigation Type
import {
  AuthStackParams,
  BookingStackParams,
  ChangePasswordStackParams,
  HistoryStackParams,
  HistoryTab,
  MainStackParams,
  SettingStackParams
} from './AppNavigationType'

// Navigation Screen
import {
  AppStacks,
  AuthScreens,
  BookingScreens
} from '@/Constants/AppNavigationConstants'

// Styles
import { Normalize, Colors } from '@/Themes'

// Language
import { translate } from '@/Language'

const Auth = createStackNavigator<AuthStackParams>()
export const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName={AuthScreens.SplashScreen}
      headerMode={'none'}
    >
      <Auth.Screen name={AuthScreens.SplashScreen} component={SplashScreen} />
      <Auth.Screen name={AuthScreens.AuthScreen} component={AuthScreen} />
      <Auth.Screen name={AuthScreens.SignInScreen} component={SignInScreen} />
      <Auth.Screen name={AuthScreens.SignUpScreen} component={SignUpScreen} />
      <Auth.Screen name={AuthScreens.OTPScreen} component={OTPScreen} />
      <Auth.Screen
        name={AuthScreens.ForgotPasswordScreen}
        component={ForgotPasswordScreen}
      />
    </Auth.Navigator>
  )
}

const Booking = createStackNavigator<BookingStackParams>()
export const BookingStack = () => {
  return (
    <Booking.Navigator
      initialRouteName={BookingScreens.DashboardScreen}
      headerMode={'none'}
    >
      <Booking.Screen
        name={BookingScreens.DashboardScreen}
        component={DashboardScreen}
      />
      <Booking.Screen
        name={BookingScreens.InforPackageScreen}
        component={InforPackageScreen}
      />
      <Booking.Screen
        name={BookingScreens.SearchPlacesScreen}
        component={SearchPlacesScreen}
      />
      <Booking.Screen
        name={'OrderTrackingScreen'}
        component={OrderTrackingScreen}
      />
    </Booking.Navigator>
  )
}

const HistoryStack = createStackNavigator<HistoryStackParams>()
export const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator initialRouteName={'History'}>
      <HistoryStack.Screen
        name={'History'}
        component={HistoryMaterialTab}
        options={{
          headerTitle: translate('history').toUpperCase(),
          headerStyle: {
            backgroundColor: Colors.royalBlue,
            elevation: 0
          },
          headerTintColor: Colors.white
        }}
      />
      <HistoryStack.Screen
        name={'HistoryDetail'}
        component={HistoryDetail}
        options={{ headerShown: false }}
      />
    </HistoryStack.Navigator>
  )
}

const HistoryTabScreen = createMaterialTopTabNavigator<HistoryTab>()
export const HistoryMaterialTab = () => {
  return (
    <HistoryTabScreen.Navigator
      initialRouteName={'OnGoingScreen'}
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.white50,
        style: { backgroundColor: Colors.royalBlue },
        indicatorStyle: { backgroundColor: Colors.summerSky }
      }}
      swipeEnabled={false}
    >
      <HistoryTabScreen.Screen
        name={'OnGoingScreen'}
        component={OnGoingScreen}
        options={{
          title: 'On Going'
        }}
      />
      <HistoryTabScreen.Screen
        name={'HistoryScreen'}
        component={HistoryScreen}
        options={{
          title: 'History'
        }}
      />
    </HistoryTabScreen.Navigator>
  )
}

const ChangePassword = createStackNavigator<ChangePasswordStackParams>()
export const ChangePasswordStack = () => {
  return (
    <ChangePassword.Navigator
      initialRouteName={'ConfirmPasswordScreen'}
      screenOptions={{ headerShown: false }}
    >
      <ChangePassword.Screen
        name={'ConfirmPasswordScreen'}
        component={ConfirmPasswordScreen}
      />
      <ChangePassword.Screen
        name={'ChangePasswordScreen'}
        component={ChangePasswordScreen}
      />
    </ChangePassword.Navigator>
  )
}

const Setting = createStackNavigator<SettingStackParams>()
export const SettingStack = () => {
  return (
    <Setting.Navigator
      initialRouteName={'SettingScreen'}
      screenOptions={{
        headerStyle: {
          height: Normalize(80),
          // backgroundColor: Colors.royalBlue,
          elevation: 0
        },
        headerTitleStyle: {
          fontWeight: 'normal'
        }
      }}
    >
      <Setting.Screen
        name={'SettingScreen'}
        component={SettingScreen}
        options={({}) => ({
          headerTitle: translate('myProfile')
        })}
      />
      <Setting.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          headerTitle: translate('editProfile')
        }}
      />
      <Setting.Screen
        name={'OrderHistoryScreen'}
        component={HistoryStackScreen}
        options={{
          headerShown: false
        }}
      />
      <Setting.Screen
        name={'NotificationScreen'}
        component={NotificationScreen}
        options={{
          headerTitle: translate('editProfile')
        }}
      />
      <Setting.Screen
        name={'InviteFriendScreen'}
        component={InviteFriendScreen}
        options={{
          headerTitle: translate('editProfile')
        }}
      />
      <Setting.Screen
        name={'ChangePasswordScreen'}
        component={ChangePasswordStack}
        options={{
          headerShown: false
        }}
      />
    </Setting.Navigator>
  )
}

const Main = createStackNavigator<MainStackParams>()
export const MainStack = () => {
  return (
    <Main.Navigator initialRouteName={'BookingStack'} headerMode={'none'}>
      <Main.Screen name={AppStacks.BookingStack} component={BookingStack} />
      <Main.Screen name={'SettingStack'} component={SettingStack} />
    </Main.Navigator>
  )
}
