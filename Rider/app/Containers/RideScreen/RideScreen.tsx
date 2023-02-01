import React from 'react'
import { SafeAreaView } from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { MainStackParams } from '@/Navigation/AppNavigationType'
import { StackNavigationProp } from '@react-navigation/stack'

// Redux
import { useDispatch } from 'react-redux'
import PhaseRiderActions from '@/Redux/PhaseRiderRedux'

// Components
import { Price, CustomerInfor, RideInfor } from './Components'

// Styles
import styles from './Styles/RideScreenStyles'
import { PhaseRider } from '@/Constants/PhaseRiderConstants'

type RideScreenNavigationProp = StackNavigationProp<
  MainStackParams,
  'RideScreen'
>

const RideScreen = () => {
  const navigation = useNavigation<RideScreenNavigationProp>()

  const dispatch = useDispatch()

  const navigateToHome = () => {
    dispatch(PhaseRiderActions.setPhaseRider(PhaseRider.NEED_A_RIDE))
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'TabScreen'
        }
      ]
    })
  }

  const navigateToPhaseRideScreen = () =>
    navigation.reset({
      index: 1,
      routeNames: ['TabScreen', 'PhaseRideScreen'],
      routes: [
        {
          name: 'TabScreen'
        },
        {
          name: 'PhaseRideScreen'
        }
      ]
    })

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Price navigateBack={navigateToHome} />
      <CustomerInfor />
      <RideInfor navigateToPhaseRider={navigateToPhaseRideScreen} />
    </SafeAreaView>
  )
}

export default RideScreen
