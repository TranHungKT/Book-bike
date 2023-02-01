import React from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import RNFS from 'react-native-fs'

// Style
import styles from './Styles/HeaderWithCameraStyles'
import { Colors, Normalize } from '@/Themes'

// Svgs
import Camera from '@/Svgs/Icons/camera.svg'

type HeaderWithCameraProps = {
  title: string
  setImage: (image: string) => void
  needCamera: boolean
}

const HeaderWithCamera = (props: HeaderWithCameraProps) => {
  const { title, setImage, needCamera } = props

  const onPressCamera = () => {
    launchCamera(
      { mediaType: 'photo', maxWidth: 600, maxHeight: 600 },
      (image) => {
        if (image.uri) {
          RNFS.readFile(image.uri, 'base64')
            .then((base) => {
              setImage(base)
            })
            .catch((err) => {
              console.log('ERROR LAUNCH CAMERA', err)
            })
        }
      }
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.atomic}
        barStyle={'light-content'}
      />

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      {needCamera && (
        <TouchableOpacity onPress={onPressCamera}>
          <Camera width={Normalize(25)} height={Normalize(25)} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default HeaderWithCamera
