import React from 'react'
import {
  ImageSourcePropType,
  ViewStyle,
  TouchableOpacity,
  Image,
  ImageStyle
} from 'react-native'

// Styles
import styles from './Styles/AvatarStyles'

type AvatarProps = {
  image: ImageSourcePropType
  wrapperStyle?: ViewStyle
  imageStyle?: ImageStyle
  navigateFunction?: () => void
}

const Avatar = (props: AvatarProps) => {
  const { image, wrapperStyle, imageStyle, navigateFunction } = props

  return (
    <TouchableOpacity
      style={[styles.imageView, wrapperStyle]}
      onPress={navigateFunction}
    >
      <Image source={image} style={[styles.image, imageStyle]} />
    </TouchableOpacity>
  )
}

export default Avatar
