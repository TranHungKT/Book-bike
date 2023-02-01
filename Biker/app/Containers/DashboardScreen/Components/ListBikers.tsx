import React, { memo } from 'react'
import { View, Text } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import SocketActions from '@/Redux/SocketRedux'
import PhaseActions from '@/Redux/PhaseRedux'

// Components
import {
  RenderLocation,
  RenderListBikers,
  Distance,
  RenderActivitiIndicator,
  FooterButton
} from './SmallComponents'

// Constants
import {
  PhaseBookingBeforeRide,
  SERVICE
} from '@/Constants/PhaseReduxConstants'

// Styles
import styles from './Styles/ListBikersStyles'

// Language
import { translate } from '@/Language'

const ListBikers = () => {
  const dispatch = useDispatch()
  const { isFindingBikers, errorEmitBooking } = useSelector(
    (state: RootState) => state.socket
  )

  const { resultFoundBikers } = useSelector((state: RootState) => state.phase)

  const addressAndCoordinates = useSelector(
    (state: RootState) => state.map.addressAndCoordinates
  )

  const service = useSelector((state: RootState) => state.phase.service)

  const packageInfor = useSelector((state: RootState) => {
    if (service === SERVICE.DELIVERY) return state.package.package
  })

  const packageInformation = packageInfor
    ? packageInfor[packageInfor.length - 1]
    : null

  const retryFinding = () => {
    if (service === SERVICE.DELIVERY && packageInformation) {
      const {
        senderProof,
        receiverInfor,
        weight,
        category
      } = packageInformation
      dispatch(
        SocketActions.emitDeliveryRequest(
          addressAndCoordinates,
          receiverInfor,
          {
            senderProof,
            weight,
            category
          }
        )
      )
    } else {
      dispatch(SocketActions.emitBookingRequest(addressAndCoordinates))
    }
    dispatch(PhaseActions.setPhase(PhaseBookingBeforeRide.GET_BIKER))
  }
  const renderRegion = () => {
    if (isFindingBikers) {
      if (!errorEmitBooking) {
        return <RenderActivitiIndicator title={translate('retryFinding')} />
      }
      return <RenderActivitiIndicator title={translate('findingBikers')} />
    } else {
      if (!errorEmitBooking) {
        return (
          <RenderListBikers payloadFoundBikers={resultFoundBikers.bikers} />
        )
      }

      return (
        <>
          <Text style={styles.errorEmptyResult}>
            {translate('notFoundBiker')}
          </Text>
          <FooterButton
            title={translate('retry')}
            onPress={retryFinding}
            wrapperStyle={styles.retryButtonStyle}
          />
        </>
      )
    }
  }

  return (
    <View style={styles.mainContainer}>
      <RenderLocation wrapperStyle={styles.location} />
      <Distance />
      <View style={styles.listContainer}>{renderRegion()}</View>
    </View>
  )
}

export default memo(ListBikers)
