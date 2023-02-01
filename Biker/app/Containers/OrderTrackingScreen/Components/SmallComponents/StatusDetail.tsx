import React from 'react'
import { View, Text } from 'react-native'

// Type
import { Phase } from './PhaseConstants'

// Styles
import styles from './Styles/StatusDetailStyles'

// Language
import { translate } from '@/Language'

type StatusDetailProps = {
  phase: Phase
  time: number
}

const StatusDetail = (props: StatusDetailProps) => {
  const { image, title } = props.phase

  const renderTime = () => {
    const hours = new Date(props.time).getHours()
    const minutes = new Date(props.time).getMinutes()
    return (
      <Text style={styles.title}>
        {hours} : {minutes}
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        {image}
        <Text style={styles.title}>{translate(title)}</Text>
      </View>
      {renderTime()}
    </View>
  )
}

export default StatusDetail
