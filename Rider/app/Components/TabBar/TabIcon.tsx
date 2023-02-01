import React from 'react'
import { ImageSourcePropType } from 'react-native'

// Components
import { RImage } from '../Image'

// Styles
import styles from './Styles/TabIconStyles'

type TabIconProps = {
  source: ImageSourcePropType
  color: string
}

const TabIcon = (props: TabIconProps) => {
  const { source, color } = props
  return <RImage source={source} style={styles.icon} tintColor={color} />
}

export default TabIcon
