import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import RNFS from 'react-native-fs'
// Components
import { Avatar } from '@/Components'
import { PersonalInfor } from './Components'

// Styles
import styles from './Styles/ProfileScreenStyles'
import { Images } from '@/Themes'

const ProfileScreen = () => {
  const [image, setImage] = useState('')

  const launchImage = () => {
    launchCamera({ mediaType: 'photo' }, (image) => {
      if (image.uri) {
        RNFS.readFile(image.uri, 'base64')
          .then((base) => {
            setImage(base)
          })
          .catch((err) => console.log('ERROR WITH LAUNCH CAMERA', err))
      }
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileView}>
        <Text style={styles.title}>Profile Image</Text>
        <View style={styles.profile}>
          <View>
            <Avatar
              image={Images.biker}
              wrapperStyle={styles.wrapperImage}
              imageStyle={styles.imageAvatar}
            />
            <TouchableOpacity onPress={launchImage}>
              <Text style={styles.picText}>Add a pic</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.imageText}>
            Put your best pic! Everyone will be able to see it
          </Text>
        </View>
      </View>
      <PersonalInfor />
    </ScrollView>
  )
}

export default ProfileScreen
