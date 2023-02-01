import React, { forwardRef } from 'react'

import Toast from 'react-native-easy-toast'

// Styles
import styles from './Style/BToastStyles'
import { Normalize } from '@/Themes'

const BToast = forwardRef((props, ref) => {
  return (
    <Toast
      ref={ref}
      style={styles.toastView}
      position='bottom'
      fadeInDuration={Normalize(750)}
      fadeOutDuration={Normalize(1000)}
      opacity={0.8}
      textStyle={styles.textStyle}
    />
  )
})

export default BToast
