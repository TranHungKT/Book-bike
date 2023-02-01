// ---------------- Auth Stack ----------------
import { HistoryByDate } from '@/Types'

export type AuthStackParams = {
  SplashScreen: undefined
  AuthScreen: undefined
  SignInScreen: undefined
  ForgotPasswordScreen: undefined
  SignUpScreen: undefined
  OTPScreen: { userName: string }
}

export type HistoryStackParams = {
  History: HistoryTab
  HistoryDetail: { historyByDate: HistoryByDate }
}

export type HistoryTab = {
  OnGoingScreen: undefined
  HistoryScreen: undefined
}

export type BookingStackParams = {
  InforPackageScreen: undefined
  DashboardScreen: undefined
  SearchPlacesScreen: undefined
  RideScreen: undefined
  OrderTrackingScreen: undefined
}

export type ChangePasswordStackParams = {
  ConfirmPasswordScreen: undefined
  ChangePasswordScreen: { password: string }
}

export type SettingStackParams = {
  SettingScreen: undefined
  ProfileScreen: undefined
  OrderHistoryScreen: HistoryTab
  NotificationScreen: undefined
  ChangePasswordScreen: ChangePasswordStackParams
  InviteFriendScreen: undefined
}

export type MainStackParams = {
  BookingStack: BookingStackParams
  SettingStack: SettingStackParams
}

export type RootStackParams = {
  AuthStack: AuthStackParams
  BookingStack: BookingStackParams
}
