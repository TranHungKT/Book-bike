import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { SettingStackConstantsType } from './NavigationScreenContants'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Styles
import styles from './Styles/RenderListScreenStyles'
import { Normalize } from '@/Themes'

// Svgs
import Right from '@/Svgs/Icons/right.svg'

type RenderListScreenProps = {
  item: SettingStackConstantsType
}

const RenderListScreen = (props: RenderListScreenProps) => {
  const navigation = useNavigation()

  const { icon, title, screenName } = props.item

  const navigate = (screenName: string) => () => navigation.navigate(screenName)

  return (
    <TouchableOpacity onPress={navigate(screenName)} style={styles.container}>
      <View style={styles.titleView}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
      <>
        <Right width={Normalize(20)} height={Normalize(20)} />
      </>
    </TouchableOpacity>
  )
}

export default RenderListScreen
