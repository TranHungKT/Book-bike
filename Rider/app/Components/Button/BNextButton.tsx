import React from 'react'
import { TouchableOpacity, ViewStyle, Image } from 'react-native'

// Styles
import styles from './Styles/BNextButtonStyles'
import { Images } from '@/Themes'

type BNextButtonProps = {
  navigateFunc: () => void
  wrapperStyle?: ViewStyle
}

const BNextButton = (props: BNextButtonProps) => {
  const { navigateFunc, wrapperStyle } = props
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        wrapperStyle
        // enable ? styles.enable : styles.disable
      ]}
      onPress={navigateFunc}
    >
      <Image
        source={Images.rightArrow}
        resizeMode={'contain'}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}

export default BNextButton
