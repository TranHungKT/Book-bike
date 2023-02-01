import React from 'react'

import HistoryOrder from '@/Svgs/Icons/historyOrder.svg'
import Bell from '@/Svgs/Icons/bell.svg'
import Lock from '@/Svgs/Icons/lock.svg'
import Friends from '@/Svgs/Icons/friends.svg'

import { Normalize } from '@/Themes'

const SettingStackConstants: SettingStackConstantsType[] = [
  {
    icon: <HistoryOrder width={Normalize(20)} height={Normalize(20)} />,
    title: 'My Orders',
    screenName: 'OrderHistoryScreen'
  },
  {
    icon: <Bell width={Normalize(20)} height={Normalize(20)} />,
    title: 'Notification',
    screenName: 'NotificationScreen'
  },
  {
    icon: <Friends width={Normalize(20)} height={Normalize(20)} />,
    title: 'Invite Friend',
    screenName: 'InviteFriendScreen'
  },
  {
    icon: <Lock width={Normalize(20)} height={Normalize(20)} />,
    title: 'Change Password',
    screenName: 'ChangePasswordScreen'
  }
]

export type SettingStackConstantsType = {
  icon: Element
  title: string
  screenName: string
}

export default SettingStackConstants
