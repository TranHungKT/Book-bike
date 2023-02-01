// ---------------- Auth Stack ----------------

import { HistoryByDate } from '@/Types'

export type AuthStackParams = {
  SplashScreen: undefined
  AuthScreen: undefined
  SignInScreen: undefined
  // ForgotPasswordScreen: undefined
  SignUpScreen: undefined
  OTPScreen: undefined
  SignUpDriver: SignUpDriverParams
}

export type SignUpDriverParams = {
  SignUpDriverScreen: undefined
  ProfilePhotoScreen: undefined
  IdentifyScreen: undefined
  LicenseScreen: undefined
  BikeInforScreen: undefined
  BikePhotoScreen: undefined
}

// ---------------- Home Stack ----------------
export type HomeStackParams = {
  HomeScreen: undefined
}

// ---------------- Account Stack ----------------
export type AccountStackParams = {
  AccountScreen: undefined
}

// ---------------- History Stack ----------------
export type HistoryStackParams = {
  History: HistoryMeterialTabParams
  HistoryDetail: { historyByDate: HistoryByDate }
}

// ---------------- Tab Params----------------
export type HistoryMeterialTabParams = {
  StaticHistory: undefined
  DayHistory: undefined
}
export type TabParams = {
  Home: HomeStackParams
  History: HistoryMeterialTabParams
  Account: AccountStackParams
}

// ---------------- Main Stack----------------

export type MainStackParams = {
  TabScreen: TabParams
  RideScreen: undefined
  PhaseRideScreen: undefined
  GetPackageProofScreen: undefined
  DeliverPackageProofScreen: undefined
  PayScreen: undefined
}

export type RootStackParams = {
  AuthStack: AuthStackParams
  MainStack: MainStackParams
}
