import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'

// Styles
import styles from './Styles/HeaderDetailStyles'
import { Colors } from '@/Themes'
// Svgs
import Back from '@/Svgs/Icons/back.svg'

type HeaderDetailProps = {
  title: string
  onPressFunction: () => void
}

const HeaderDetail = (props: HeaderDetailProps) => {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.royalBlue}
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backView}
          onPress={props.onPressFunction}
        >
          <Back width={20} height={20} />
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.backView} />
      </View>
    </>
  )
}

export default HeaderDetail
