import React, { memo } from 'react'

// Component
import { FooterButton, RenderLocation } from './SmallComponents'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import PhaseActions from '@/Redux/PhaseRedux'
import SocketActions from '@/Redux/SocketRedux'
import { RootState } from '@/Types'

// Constnants
import {
  PhaseBookingBeforeRide,
  SERVICE
} from '@/Constants/PhaseReduxConstants'

// Styles
import styles from './Styles/ChooseLocationStyles'

// Language
import { translate } from '@/Language'

type ChooseLocationProps = {
  onPress: () => void
}

const ChooseLocation = (props: ChooseLocationProps) => {
  const { phase } = useSelector((state: RootState) => state.phase)

  const { onPress } = props

  const dispatch = useDispatch()
  const addressAndCoordinates = useSelector(
    (state: RootState) => state.map.addressAndCoordinates
  )

  const service = useSelector((state: RootState) => state.phase.service)

  const packageInfor = useSelector((state: RootState) => {
    if (service === SERVICE.DELIVERY) {
      return state.package.package
    }
  })

  const packageInformation = packageInfor
    ? packageInfor[packageInfor.length - 1]
    : null

  const confirm = () => {
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

  return (
    <>
      <RenderLocation wrapperStyle={styles.location} />
      {/* {phase === PhaseBookingBeforeRide.CHOOSE_LOCATION ? (
        <FooterButton title={translate('search')} onPress={onPress} />
      ) : ( */}
      <FooterButton title={translate('confirm')} onPress={confirm} />
      {/* )} */}
    </>
  )
}

export default memo(ChooseLocation)
