import React from 'react'
import { View, Text, ScrollView, StatusBar } from 'react-native'
import moment from 'moment'

// Navigation
import { useNavigation, useRoute } from '@react-navigation/native'

// Components
import { HeaderDetail } from './Components'
import { Location, PaymentDetails } from '@/Components'

// Styles
import styles from './Styles/HistoryDetailStyles'
import { translate } from '@/Language'

import { Colors } from '@/Themes'

const HistoryDetail = () => {
  const route = useRoute<any>()
  const navigation = useNavigation()

  const {
    date,
    rideHash,
    addressOrigin,
    addressDestination,
    price
  } = route.params.historyByDate

  const navigateBack = () => navigation.goBack()

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.royalBlue}
        barStyle={'light-content'}
      />
      <HeaderDetail
        title={moment(date).format('DD-MM-YYYY')}
        onPressFunction={navigateBack}
      />
      <Text style={styles.rideHash}>
        {translate('orders')}: {rideHash}
      </Text>
      <View style={styles.locationView}>
        <Location
          origin={addressOrigin}
          destination={addressDestination}
          inforStyle={styles.inforStyle}
          lineStyle={styles.lineStyle}
          textStyle={styles.textStyle}
        />
      </View>
      <View style={styles.amountView}>
        <Text style={styles.price}>{price / 1000}K</Text>
        <View style={styles.timeView}>
          <View style={[styles.timeDistanceView, styles.borderTimeDistance]}>
            <Text style={styles.infor}>15 min</Text>
            <Text style={styles.title}>Time</Text>
          </View>
          <View style={styles.timeDistanceView}>
            <Text style={styles.infor}>25 km</Text>
            <Text style={styles.title}>Distance</Text>
          </View>
        </View>
      </View>
      <View style={styles.type}>
        <Text>{'Service type'}</Text>
        <Text>{'Ride'}</Text>
      </View>
      <Text style={styles.content}>{translate('receipt')}</Text>
      <PaymentDetails price={price} wrapperStyle={styles.wrapperStyle} />
    </ScrollView>
  )
}

export default HistoryDetail
