import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import RNFS from 'react-native-fs'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParams } from '@/Navigation/AppNavigationType'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import SocketActions from '@/Redux/SocketRedux'
import { RootState } from '@/Types'

// Components
import { HeaderWithCamera } from './Components'
import { BButton } from '@/Components'

// Styles
import styles from './Styles/DeliverPackageProofScreenStyles'
import { Normalize } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svg
import Camera from '@/Svgs/Icons/camera.svg'
type DeliverPackageProofeScreenNavigationProp = StackNavigationProp<
  MainStackParams,
  'DeliverPackageProofScreen'
>

const DeliverPackageProofeScreen = () => {
  const navigation = useNavigation<DeliverPackageProofeScreenNavigationProp>()

  const dispatch = useDispatch()

  const [image, setImage] = useState('')

  const [imageToShow, setImageToShow] = useState('')

  const rideHash = useSelector((state: RootState) => state.ride.rideHash)

  const onPressCamera = () => {
    launchCamera(
      { mediaType: 'photo', maxWidth: 600, maxHeight: 600 },
      (image) => {
        if (image.uri) {
          setImageToShow(image.uri)

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

  const confirmSendPackage = () => {
    dispatch(SocketActions.emitCompleteDelivery(rideHash, image))
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'PayScreen'
        }
      ]
    })
  }

  return (
    <View style={styles.container}>
      <HeaderWithCamera
        title={translate('confirmSend')}
        setImage={() => {}}
        needCamera={false}
      />
      <Text style={styles.confirmSendText}>
        {translate('confirmSendQuestion')}
      </Text>

      <Text style={styles.rideHash}>{rideHash}</Text>
      <View style={styles.box}>
        {imageToShow ? (
          <Image style={styles.image} source={{ uri: imageToShow }} />
        ) : (
          <TouchableOpacity onPress={onPressCamera}>
            <Camera width={Normalize(50)} height={Normalize(50)} />
          </TouchableOpacity>
        )}
      </View>
      {imageToShow ? (
        <BButton
          content={translate('reImage')}
          buttonStyle={styles.buttonRont}
          textStyle={styles.textRont}
          onPressButton={onPressCamera}
        />
      ) : (
        <></>
      )}
      <BButton
        content={translate('confirmSend')}
        buttonStyle={styles.buttonConfirm}
        disable={!image}
        onPressButton={confirmSendPackage}
      />
    </View>
  )
}

export default DeliverPackageProofeScreen
