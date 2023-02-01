import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'
// Navigation
import { useNavigation } from '@react-navigation/native'
import { HistoryStackParams } from '@/Navigation/AppNavigationType'
import { StackNavigationProp } from '@react-navigation/stack'

// Types
import { HistoryByDate } from '@/Types'

// Styles
import styles from './Styles/RenderHistoryStyles'

// Svgs
import Right from '@/Svgs/Icons/right.svg'
import Cancel from '@/Svgs/Icons/close.svg'
type RenderHistoryProps = {
  item: HistoryByDate
  index: number
}

type RenderHistoryNavigationProp = StackNavigationProp<
  HistoryStackParams,
  'History'
>

const RenderHistory = (props: RenderHistoryProps) => {
  const navigation = useNavigation<RenderHistoryNavigationProp>()

  const { price, addressDestination, date, isRideCancelled } = props.item

  const navigateToDetails = () =>
    navigation.navigate('HistoryDetail', { historyByDate: props.item })

  return (
    <TouchableOpacity onPress={navigateToDetails} style={styles.container}>
      <View style={styles.time}>
        <Text style={styles.timeText}>{moment(date).format('hh:mm A')}</Text>
      </View>
      <View style={styles.inforView}>
        <Text style={styles.destination} numberOfLines={1}>
          262 Luy Ban Bich {addressDestination}
        </Text>
        <Text style={styles.price}>{price / 1000}K</Text>
      </View>
      <>
        {isRideCancelled ? (
          <Cancel width={15} height={15} style={styles.deliveryMan} />
        ) : (
          <Right width={15} height={15} style={styles.deliveryMan} />
        )}
      </>
    </TouchableOpacity>
  )
}

export default RenderHistory
