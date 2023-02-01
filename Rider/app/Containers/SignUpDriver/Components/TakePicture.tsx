import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { launchCamera } from 'react-native-image-picker'

// Components
import { BButton } from '@/Components'
import AddImage from './AddImage'

// Styles
import styles from './Styles/TakePictureStyles'

type TakePictureProps = {
  title: string
  setImageFunction: (image: string) => void
}

const TakePicture = (props: TakePictureProps) => {
  const { title, setImageFunction } = props

  const [tempImage, setTempImage] = useState('')

  const takePicture = () => {
    launchCamera(
      { mediaType: 'photo', maxWidth: 600, maxHeight: 600 },
      (image) => {
        if (image.uri) {
          setImageFunction(image.uri)
          setTempImage(image.uri)
        }
      }
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <AddImage image={tempImage} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <BButton
        content={'picture'}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        onPressButton={takePicture}
      />
    </View>
  )
}

export default TakePicture
