import React from 'react'
import { View, Text, ViewStyle } from 'react-native'

// Styles
import styles from './Styles/RevenueStyles'

// Language
import { translate } from '@/Language'

type RevenueProps = {
  revenue: number
  wrapperStyle?: ViewStyle
}

const Revenue = (props: RevenueProps) => {
  const { revenue, wrapperStyle } = props
  return (
    <View style={[styles.container, wrapperStyle]}>
      <Text style={styles.revenueText}>{translate('revenue')}</Text>
      <View style={styles.priceView}>
        <Text style={styles.unit}>VND</Text>
        <Text style={styles.revenue}>{revenue}</Text>
      </View>
    </View>
  )
}

export default Revenue
