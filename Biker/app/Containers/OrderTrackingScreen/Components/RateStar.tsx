import React from 'react'
import { View, Text } from 'react-native'
import { AirbnbRating } from 'react-native-ratings'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import UserActions from '@/Redux/UserRedux'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Functions
import {
  getPhaseBookingSelector,
  getRideHashSelector
} from '@/Functions/Selector/ReSelectorFunctions'

// Constants
import { PhaseBookingAfterRide } from '@/Constants/PhaseReduxConstants'

// Styles
import styles from './Styles/RateStarStyles'

// Language
import { translate } from '@/Language'
import { Colors } from '@/Themes'

const RateStar = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const phaseBooking = useSelector(getPhaseBookingSelector)

  const rideHash = useSelector(getRideHashSelector)

  const rateCompleted = (rating: number) => {
    const reviewData = {
      rating,
      rideHash
    }
    dispatch(UserActions.createReviewRequest(reviewData))

    navigation.goBack()
  }

  return phaseBooking === PhaseBookingAfterRide.RIDE_COMPLETE_EVENT ? (
    <View style={styles.container}>
      <Text style={styles.request}>{translate('rateStar')}</Text>

      <AirbnbRating
        onFinishRating={rateCompleted}
        selectedColor={Colors.summerSky}
        unSelectedColor={Colors.whisper}
        showRating={false}
        starStyle={styles.rating}
        defaultRating={0}
      />
    </View>
  ) : (
    <></>
  )
}

export default RateStar
