import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { SettingStackParams } from '@/Navigation/AppNavigationType'
import { StackNavigationProp } from '@react-navigation/stack'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import UserActions from '@/Redux/UserRedux'
import { RootState } from '@/Types'

// Components
import { Avatar, BActivityIndicator } from '@/Components'

// Styles
import styles from './Styles/ProfileStyles'
import { Images, Normalize } from '@/Themes'

// Svgs
import Pencil from '@/Svgs/Icons/pencil.svg'

type ProfileNavigationProp = StackNavigationProp<
  SettingStackParams,
  'ProfileScreen'
>

const Profile = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<ProfileNavigationProp>()

  const { fetchingGetUserDetail, errorGetUserDetail, userDetail } = useSelector(
    (state: RootState) => state.user
  )

  const { firstName, lastName, accountUsername, phoneNumber } = userDetail

  const navigateToProfileScreen = () => navigation.navigate('ProfileScreen')

  useEffect(() => {
    dispatch(UserActions.getUserDataRequest())
  }, [])

  useEffect(() => {
    if (!fetchingGetUserDetail) {
      if (errorGetUserDetail) {
        console.warn('error get user detail')
      }
    }
  }, [fetchingGetUserDetail, errorGetUserDetail])

  return (
    <View style={styles.container}>
      <View style={styles.inforView}>
        <Avatar image={Images.biker} wrapperStyle={styles.wrapperAvatar} />
        <View>
          <Text style={styles.userName}>{firstName + ' ' + lastName} </Text>
          <Text style={styles.email}>{accountUsername}</Text>
          <Text style={styles.email}>{phoneNumber}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={navigateToProfileScreen}>
        <Pencil
          width={Normalize(20)}
          height={Normalize(20)}
          style={styles.pencil}
        />
      </TouchableOpacity>
      {fetchingGetUserDetail && <BActivityIndicator />}
    </View>
  )
}

export default Profile
