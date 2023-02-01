import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// AuthStack Screen
import SplashScreen from '@/Containers/SplashScreen'
import { SignInScreen } from '@/Containers/SignInScreen'
import { SignUpScreen } from '@/Containers/SignUpScreen'
import { OTPScreen } from '@/Containers/OTPScreen'
import { AuthScreen } from '@/Containers/AuthScreen'

// Sign up driver
import {
  SignUpDriverScreen,
  BikeInforScreen,
  BikePhotoScreen,
  IdentifyScreen,
  LicenseScreen,
  ProfilePhotoScreen
} from '@/Containers/SignUpDriver'

// MainStack Screen
import { HomeScreen } from '@/Containers/HomeScreen'
import { RideScreen } from '@/Containers/RideScreen'
import { PhaseRideScreen } from '@/Containers/PhaseRideScreen'
import { PayScreen } from '@/Containers/PayScreen'
import {
  GetPackageProofScreen,
  DeliverPackageProofScreen
} from '@/Containers/GetProofScreen'

// History Stack Screen
import {
  DayHistory,
  StaticHistory,
  HistoryDetail
} from '@/Containers/HistoryScreen'

// Account Stack Screen
import { AccountScreen } from '@/Containers/AccountScreen'

// Navigation Type
import {
  AccountStackParams,
  AuthStackParams,
  HistoryMeterialTabParams,
  HomeStackParams,
  MainStackParams,
  TabParams,
  HistoryStackParams,
  SignUpDriverParams
} from './AppNavigationType'

// Navigation Screen
import { AuthScreens, MainScreens } from '@/Constants/AppNavigationConstants'

// Components
import { TabIcon, HeaderTab } from '@/Components'

// Styles
import { Colors, Images } from '@/Themes'

// Language
import { translate } from '@/Language'

const SignUpDriver = createStackNavigator<SignUpDriverParams>()
export const SignUpDriverStack = () => {
  return (
    <SignUpDriver.Navigator initialRouteName='SignUpDriverScreen'>
      <SignUpDriver.Screen
        name={'SignUpDriverScreen'}
        component={SignUpDriverScreen}
        options={{
          headerTitle: translate('signUpDriver')
        }}
      />
      <SignUpDriver.Screen
        name={'ProfilePhotoScreen'}
        component={ProfilePhotoScreen}
        options={{
          headerTitle: translate('profilePhoto')
        }}
      />
      <SignUpDriver.Screen
        name={'LicenseScreen'}
        component={LicenseScreen}
        options={{
          headerTitle: translate('licenseScreen')
        }}
      />
      <SignUpDriver.Screen
        name={'IdentifyScreen'}
        component={IdentifyScreen}
        options={{
          headerTitle: translate('identifyScreen')
        }}
      />
      <SignUpDriver.Screen
        name={'BikePhotoScreen'}
        component={BikePhotoScreen}
        options={{
          headerTitle: translate('bikePicture')
        }}
      />
      <SignUpDriver.Screen
        name={'BikeInforScreen'}
        component={BikeInforScreen}
        options={{
          headerTitle: translate('bikeInfor')
        }}
      />
    </SignUpDriver.Navigator>
  )
}

const Auth = createStackNavigator<AuthStackParams>()
export const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName={'SplashScreen'} headerMode={'none'}>
      <Auth.Screen name={AuthScreens.SplashScreen} component={SplashScreen} />
      <Auth.Screen name={AuthScreens.AuthScreen} component={AuthScreen} />
      <Auth.Screen name={AuthScreens.SignInScreen} component={SignInScreen} />

      <Auth.Screen name={AuthScreens.SignUpScreen} component={SignUpScreen} />
      <Auth.Screen name={AuthScreens.OTPScreen} component={OTPScreen} />
      <Auth.Screen name={'SignUpDriver'} component={SignUpDriverStack} />
    </Auth.Navigator>
  )
}
// ---------------- History stack ---------------

const HistoryMeterial =
  createMaterialTopTabNavigator<HistoryMeterialTabParams>()
export const HistoryTab = () => {
  return (
    <HistoryMeterial.Navigator
      initialRouteName={'StaticHistory'}
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.white50,
        style: { backgroundColor: Colors.valhalla },
        indicatorStyle: { backgroundColor: Colors.fruitSalad }
      }}
      swipeEnabled={false}
    >
      <HistoryMeterial.Screen
        name={'StaticHistory'}
        component={StaticHistory}
        options={{ title: translate('static') }}
      />
      <HistoryMeterial.Screen
        name={'DayHistory'}
        component={DayHistory}
        options={{ title: translate('dayHistory') }}
      />
    </HistoryMeterial.Navigator>
  )
}

const renderHeader = () => <HeaderTab title={translate('history')} />

const HistoryStack = createStackNavigator<HistoryStackParams>()
export const History = () => {
  return (
    <HistoryStack.Navigator
      initialRouteName={'History'}
      screenOptions={{
        header: () => renderHeader()
      }}
    >
      <HistoryStack.Screen name={'History'} component={HistoryTab} />
      <HistoryStack.Screen
        name={'HistoryDetail'}
        component={HistoryDetail}
        options={{ headerShown: false }}
      />
    </HistoryStack.Navigator>
  )
}

// ---------------- Account Stack ----------------
const Account = createStackNavigator<AccountStackParams>()

export const AccountStack = () => {
  return (
    <Account.Navigator initialRouteName={'AccountScreen'} headerMode={'none'}>
      <Account.Screen name={'AccountScreen'} component={AccountScreen} />
    </Account.Navigator>
  )
}

// ---------------- Account Stack ----------------
const Home = createStackNavigator<HomeStackParams>()

export const HomeStack = () => {
  return (
    <Home.Navigator initialRouteName={'HomeScreen'} headerMode={'none'}>
      <Home.Screen name={'HomeScreen'} component={HomeScreen} />
    </Home.Navigator>
  )
}

// ---------------- Tab ----------------

const renderTabIcon = (name: string, color: string) => {
  switch (name) {
    case 'History':
      return <TabIcon source={Images.history} color={color} />
    case 'Home':
      return <TabIcon source={Images.home} color={color} />
    case 'Account':
      return <TabIcon source={Images.profile} color={color} />
    default:
      return <TabIcon source={Images.home} color={color} />
  }
}

const Tab = createBottomTabNavigator<TabParams>()
export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          return <>{renderTabIcon(route.name, color)}</>
        }
      })}
      tabBarOptions={{
        activeTintColor: Colors.bahamaBlue,
        inactiveTintColor: Colors.nobel
      }}
    >
      <Tab.Screen name={'Home'} component={HomeStack} />
      <Tab.Screen name={'Account'} component={AccountStack} />
      <Tab.Screen name={'History'} component={History} />
    </Tab.Navigator>
  )
}

// ---------------- Main ----------------

const Main = createStackNavigator<MainStackParams>()
export const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName={'DeliverPackageProofScreen'}
      headerMode={'none'}
    >
      <Main.Screen name={'TabScreen'} component={MainTab} />
      <Main.Screen name={MainScreens.RideScreen} component={RideScreen} />
      <Main.Screen
        name={MainScreens.PhaseRideScreen}
        component={PhaseRideScreen}
      />
      <Main.Screen
        name={MainScreens.GetPackageProofScreen}
        component={GetPackageProofScreen}
      />
      <Main.Screen
        name={MainScreens.DeliverPackageProofScreen}
        component={DeliverPackageProofScreen}
      />
      <Main.Screen name={MainScreens.PayScreen} component={PayScreen} />
    </Main.Navigator>
  )
}
