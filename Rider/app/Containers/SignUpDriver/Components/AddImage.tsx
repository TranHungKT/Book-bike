import React from 'react'
import { View, Image } from 'react-native'

import ImageSVG from '@/Svgs/Icons/image.svg'

import styles from './Styles/AddImageStyles'

type AddImageProps = {
  image?: string
}

const AddImage = (props: AddImageProps) => {
  const { image } = props
  return (
    <View style={styles.imageView}>
      {image ? (
        <Image source={{ uri: image }} style={styles.imageUri} />
      ) : (
        <ImageSVG width={25} height={25} style={styles.image} />
      )}
    </View>
  )
}

export default AddImage
