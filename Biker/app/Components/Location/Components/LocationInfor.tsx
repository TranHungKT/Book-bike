import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/LocationInforStyles'

type LocationInforProps = {
  image: Element
  content: string
  address: string | undefined
}

const LocationInfor = (props: LocationInforProps) => {
  const { image, content, address } = props

  return (
    <View style={styles.container}>
      {image}
      <View style={styles.infor}>
        <Text>{content}</Text>
        <Text numberOfLines={1}>{address}</Text>
      </View>
    </View>
  )
}

export default LocationInfor
