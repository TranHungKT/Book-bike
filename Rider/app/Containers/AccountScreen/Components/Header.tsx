import React from 'react'
import { View, Text } from 'react-native'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Components
import { Avatar } from '@/Components'

// Styles
import styles from './Styles/HeaderStyles'
import { Images } from '@/Themes'

const Header = () => {
  const { firstName, lastName, totalTripRider } = useSelector(
    (state: RootState) => state.user.userDetail
  )

  return (
    <View style={styles.container}>
      <Avatar image={Images.rider} wrapperStyle={styles.wrapperStyle} />
      <Text style={styles.nameText}>{firstName + ' ' + lastName}</Text>
      <View style={styles.rowView}>
        <View style={[styles.infor, styles.separate]}>
          <Text style={styles.numberText}>{totalTripRider}</Text>
          <Text>Total Trips</Text>
        </View>
        <View style={styles.infor}>
          <Text style={styles.numberText}>2.5</Text>
          <Text>Years</Text>
        </View>
      </View>
    </View>
  )
}

export default Header
