import React, { memo } from 'react'
import { Image } from 'react-native'

// Components

// Styles
import styles from './Styles/BLogoStyles'
import { Images } from '@/Themes'

const BLogo = () => {
  return (
    <Image source={Images.logo} resizeMode={'contain'} style={styles.logo} />
  )
}

export default memo(BLogo)
