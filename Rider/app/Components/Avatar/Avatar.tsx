import React from 'react'
import { View, ImageSourcePropType, ViewStyle } from 'react-native'

// Components
import { RImage } from '../Image'

// Styles
import styles from './Styles/AvatarStyles'

type AvatarProps = {
  wrapperStyle?: ViewStyle
  image: ImageSourcePropType
  rating?: number
}

const Avatar = (props: AvatarProps) => {
  const { image, wrapperStyle } = props
  return (
    <View style={[styles.container, wrapperStyle]}>
      <RImage source={image} style={styles.image} />
    </View>
  )
}

export default Avatar
