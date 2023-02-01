import React from 'react'
import { View, Text } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

import { RootState } from '@/Types'

// Components
import { Circle } from './SmallComponents'

// Functions
import { getUserDetailSelector } from '@/Functions/Selector/ReSelectorFunctions'

// Style
import styles from './Styles/DriverInforStyles'
import { Normalize } from '@/Themes'

// Svgs
import Driver from '@/Svgs/Icons/taxiDriver.svg'

const DriverInfor = () => {
  const userDetail = useSelector(getUserDetailSelector)

  return (
    <View style={styles.container}>
      <View style={styles.inforView}>
        <Circle
          image={<Driver width={Normalize(25)} height={Normalize(25)} />}
        />
        <View style={styles.infor}>
          {userDetail && (
            <Text style={styles.name}>
              {userDetail.firstName + ' ' + userDetail.lastName}
            </Text>
          )}
          {userDetail && <Text style={styles.name}>59V3 - 18675</Text>}
        </View>
      </View>
    </View>
  )
}

export default DriverInfor
