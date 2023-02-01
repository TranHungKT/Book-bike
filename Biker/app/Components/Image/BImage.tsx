import React, { memo } from 'react'
import FastImage from 'react-native-fast-image'

const FImage = (props: any) => {
  return <FastImage {...props} />
}

export default memo(FImage)
