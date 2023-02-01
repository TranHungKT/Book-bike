import React from 'react'
import { TouchableOpacity, Image, ViewStyle, ImageStyle } from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Styles
import styles from './Styles/BBackButtonStyles'
import { Images } from '@/Themes'

type BBackButtonProps = {
  backFunc?: () => void
  wrapperStyle?: ViewStyle
  imageStyle?: ImageStyle
}

const BBackButton = (props: BBackButtonProps) => {
  const navigation = useNavigation()

  const { backFunc, wrapperStyle, imageStyle } = props

  const navigateBack = () => navigation.goBack()

  return (
    <TouchableOpacity
      style={[styles.mainContainer, wrapperStyle]}
      onPress={backFunc ? backFunc : navigateBack}
    >
      <Image
        source={Images.leftArrow}
        resizeMode={'contain'}
        style={[styles.image, imageStyle]}
      />
    </TouchableOpacity>
  )
}

export default BBackButton
