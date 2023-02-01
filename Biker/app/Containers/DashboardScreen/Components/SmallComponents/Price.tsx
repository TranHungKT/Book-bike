import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import PhaseActions from '@/Redux/PhaseRedux'
// Functions
import { getBikerDetailSelector } from '@/Functions/Selector/ReSelectorFunctions'

// Types
import { RootState } from '@/Types'

// Styles
import styles from './Styles/PriceStyles'
import { Metrics } from '@/Themes'

// Svg
import Money from '@/Svgs/Icons/money.svg'

// Language
import { translate } from '@/Language'
import { PhaseBookingBeforeRide } from '@/Constants/PhaseReduxConstants'

type PriceProps = {
  index: number
}

const Price = (props: PriceProps) => {
  const dispatch = useDispatch()
  const { index } = props

  const suggestedPrice = useSelector(
    (state: RootState) => state.phase.resultFoundBikers.suggestedPrice
  )
  const order = () => {
    dispatch(PhaseActions.setIndexChooseBiker(index))
    dispatch(PhaseActions.setPhase(PhaseBookingBeforeRide.CHOOSE_BIKER))
  }

  const { extraFee } = useSelector(getBikerDetailSelector(index))

  return (
    <View style={[styles.rowView, styles.containerView]}>
      <View style={styles.imageView}>
        <Money
          width={Metrics.defaultImageWidth}
          height={Metrics.defaultImageHeight}
        />
      </View>
      <Text style={styles.name}>{suggestedPrice + extraFee}K</Text>
      <TouchableOpacity
        style={[styles.callButton, styles.orderButton]}
        onPress={order}
      >
        <Text style={styles.callText}>{translate('order')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Price
