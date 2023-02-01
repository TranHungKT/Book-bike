import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/HeaderTabStyles'

type HeaderTabProps = {
  title: string
}

const HeaderTab = (props: HeaderTabProps) => {
  const { title } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default HeaderTab
