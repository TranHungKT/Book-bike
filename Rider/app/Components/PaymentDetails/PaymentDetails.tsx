import { translate } from '@/Language'
import React from 'react'
import { View, ViewStyle } from 'react-native'

// Components
import Fare from './Components/Fare'

// Styles
import styles from './Styles/PaymentDetailsStyles'

type PaymentDetailsProps = {
  price: string
  wrapperStyle?: ViewStyle
}

const PaymentDetails = (props: PaymentDetailsProps) => {
  const { price, wrapperStyle } = props

  return (
    <View style={[styles.container, wrapperStyle]}>
      <Fare
        title={translate('tripFare')}
        price={Math.round(parseInt(price) / 1000).toString() + '.000'}
      />
      <Fare title={translate('platformFare')} price={'0.000'} />
      <View style={styles.line} />
      <Fare
        title={translate('summary')}
        price={Math.round(parseInt(price) / 1000).toString() + '.000'}
        textStyle={styles.textStyle}
      />
    </View>
  )
}

export default PaymentDetails
