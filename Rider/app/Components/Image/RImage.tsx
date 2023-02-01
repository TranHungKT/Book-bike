import React, { memo } from 'react'
import FastImage from 'react-native-fast-image'

const RImage = (props: any) => {
  return <FastImage {...props} />
}

export default memo(RImage)
