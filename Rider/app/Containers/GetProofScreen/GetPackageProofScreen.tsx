import React, { useState } from 'react'
import { View, Text } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import SocketActions from '@/Redux/SocketRedux'
import PhaseRiderActions from '@/Redux/PhaseRiderRedux'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParams } from '@/Navigation/AppNavigationType'

// Components
import { HeaderWithCamera, DetailInfor } from './Components'
import { BButton } from '@/Components'

// Constants
import { PhaseRider } from '@/Constants/PhaseRiderConstants'

// Styles
import styles from './Styles/GetPackageProofScreenStyles'

// Language
import { translate } from '@/Language'

type GetPackageProofScreenNavigationProp = StackNavigationProp<
  MainStackParams,
  'GetPackageProofScreen'
>

const GetPackageProofScreen = () => {
  const dispatch = useDispatch()

  const navigation = useNavigation<GetPackageProofScreenNavigationProp>()

  const [image, setImage] = useState('')
  const category = useSelector(
    (state: RootState) => state.ride.package?.category
  )

  const weight = useSelector((state: RootState) => state.ride.package?.weight)

  const rideHash = useSelector((state: RootState) => state.ride.rideHash)

  const getImage = (image: string) => setImage(image)

  const confirmGetPackage = () => {
    dispatch(SocketActions.emitBikerReceivedPackage(rideHash, image))

    dispatch(PhaseRiderActions.setPhaseRider(PhaseRider.GO_TO_DESTINATION))
    navigation.navigate('PhaseRideScreen')
  }

  return (
    <View style={styles.container}>
      <HeaderWithCamera
        title={translate('packageInfor')}
        setImage={getImage}
        needCamera={true}
      />
      <Text style={styles.requestPackageText}>
        {translate('requestPackage')}
      </Text>
      <DetailInfor title={translate('codeOrder')} content={rideHash} />
      <DetailInfor title={translate('type')} content={category} isCategory />
      <DetailInfor title={translate('weight')} content={weight + ' kg'} />

      <BButton
        content={translate('somethingRontWithPackage')}
        buttonStyle={styles.buttonRont}
        textStyle={styles.textRont}
      />
      <BButton
        content={translate('confirmGetPackage')}
        buttonStyle={styles.buttonConfirm}
        disable={!image}
        onPressButton={confirmGetPackage}
      />
    </View>
  )
}

export default GetPackageProofScreen
