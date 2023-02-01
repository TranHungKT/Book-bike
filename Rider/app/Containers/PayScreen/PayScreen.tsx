import React from 'react'
import { View, Text, StatusBar } from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParams } from '@/Navigation/AppNavigationType'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Components
import { PriceInfor } from './Components'
import { BButton } from '@/Components'

// Styles
import styles from './Styles/PayScreenStyles'
import { Colors } from '@/Themes'

// Language
import { translate } from '@/Language'

type Navigation = StackNavigationProp<MainStackParams, 'PayScreen'>

const PayScreen = () => {
  const navigation = useNavigation<Navigation>()

  const { price } = useSelector((state: RootState) => state.ride)

  const confirm = () =>
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'TabScreen'
        }
      ]
    })

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={Colors.valhalla}
        hidden={false}
        barStyle={'light-content'}
      />
      <View style={styles.headerView}>
        <Text style={styles.header}>{translate('payment')}</Text>
      </View>

      <View style={styles.priceInforView}>
        <PriceInfor
          title={'Giá cố định'}
          price={Math.round(price / 1000).toString() + '.000'}
        />
        <PriceInfor title={'Phí nền tảng'} price={'0.000'} />
        <PriceInfor title={'Lệ phí cầu đường'} price={'0'} />
        <PriceInfor title={'Phụ phí'} price={'0'} />
      </View>
      <View style={styles.summaryView}>
        <Text style={styles.summaryText}>{translate('summary')}</Text>
        <Text style={styles.summaryText}>
          {Math.round(price / 1000).toString() + '.000 VND'}
        </Text>
      </View>
      <View style={styles.buttonView}>
        <BButton
          onPressButton={confirm}
          content={translate('confirm')}
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
        />
      </View>
    </View>
  )
}

export default PayScreen
