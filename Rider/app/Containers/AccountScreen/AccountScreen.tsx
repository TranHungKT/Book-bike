import React, { useEffect } from 'react'
import { View, ScrollView, Text } from 'react-native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import UserActions from '@/Redux/UserRedux'
import { RootState } from '@/Types'

// Components
import { Header, PersonalInfor } from './Components'
import { BActivityIndicator } from '@/Components'

// Styles
import styles from './Styles/AccountScreenStyles'

const AccountScreen = () => {
  const dispatch = useDispatch()

  const { fetchingGetUserDetail, errorGetUserDetail } = useSelector(
    (state: RootState) => state.user
  )

  useEffect(() => {
    if (!fetchingGetUserDetail) {
      if (errorGetUserDetail) {
        console.warn('error get user detail')
      }
    }
  }, [fetchingGetUserDetail, errorGetUserDetail])

  useEffect(() => {
    dispatch(UserActions.getUserDataRequest())
  }, [])

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headBackground}>
        <Text style={styles.title}>PROFILE</Text>
      </View>
      <Header />
      <PersonalInfor />

      {fetchingGetUserDetail && <BActivityIndicator />}
    </ScrollView>
  )
}

export default AccountScreen
