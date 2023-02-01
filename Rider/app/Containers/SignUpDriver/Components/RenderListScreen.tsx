import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Components
import AddImage from './AddImage'

// Type
import { NavigationType } from './NavigationContants'

// Styles
import styles from './Styles/RenderListScreenStyles'

// Svgs

import RightArrow from '@/Svgs/Icons/right.svg'

// Language
import { translate } from '@/Language'

type RenderListScreenType = {
  data: NavigationType
}

const RenderListScreen = (props: RenderListScreenType) => {
  const navigation = useNavigation()

  const { data } = props

  const navigate = (screenName: string) => () => {
    navigation.navigate(screenName)
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigate(data.screenName)}
    >
      <View style={styles.contentView}>
        <AddImage />
        <View>
          <Text style={styles.title}>{translate(data.title)}</Text>
          <Text>{translate('upload')}</Text>
        </View>
      </View>
      <RightArrow width={20} height={20} />
    </TouchableOpacity>
  )
}

export default RenderListScreen
