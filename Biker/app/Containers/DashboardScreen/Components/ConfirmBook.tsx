import React, { memo, useEffect, useState, useRef } from 'react'
import { View, TextInput } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Types'
import SocketActions from '@/Redux/SocketRedux'
import RideInforActions from '@/Redux/RideInforRedux'
import PackageInforActions from '@/Redux/PackageInfor'
import PhaseActions from '@/Redux/PhaseRedux'
import MapActions from '@/Redux/MapRedux'
// Components
import { FooterButton, InforRider } from './SmallComponents'
import { BActivityIndicator, BToast } from '@/Components'

// Styles
import styles from './Styles/ConfirmBookStyles'
import { Metrics } from '@/Themes'

// Language
import { translate } from '@/Language'
import {
  PhaseBookingBeforeRide,
  PhaseBookingInRide,
  SERVICE
} from '@/Constants/PhaseReduxConstants'

// Svgs
import Dollar from '@/Svgs/Icons/money.svg'
import Toast from 'react-native-easy-toast'

const PriceSchema = Yup.object().shape({
  price: Yup.string().required('Required')
})
let isBook = false

const ConfirmBook = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const addressAndCoordinates = useSelector(
    (state: RootState) => state.map.addressAndCoordinates
  )

  const toastRef = useRef<Toast>(null)

  const [price, setPrice] = useState('')

  const { indexChooseBiker } = useSelector((state: RootState) => state.phase)

  const { isChooseBikerRequest, errorEmitChooseBiker } = useSelector(
    (state: RootState) => state.socket
  )

  const { rideHash, bikers, suggestedPrice } = useSelector(
    (state: RootState) => state.phase.resultFoundBikers
  )

  const service = useSelector((state: RootState) => state.phase.service)

  const packageInfor = useSelector((state: RootState) => state.package.package)

  const phoneNumber = bikers[indexChooseBiker].userDetail?.phoneNumber
  const initialPrice = suggestedPrice + bikers[indexChooseBiker].extraFee

  const orderBiker = (price: string) => {
    setPrice(price)
    if (service === SERVICE.DELIVERY) {
      dispatch(
        SocketActions.emitChooseBikerDeliveryRequest(
          phoneNumber,
          rideHash,
          price
        )
      )
    } else {
      dispatch(
        SocketActions.emitChooseBikerRequest(phoneNumber, rideHash, price)
      )
    }
    isBook = true
  }

  const serviceWhenDelivery = () => {
    dispatch(
      PackageInforActions.setPackageAfterConfirmBook(
        {
          price,
          phaseBooking: PhaseBookingInRide.WAIT_BIKER,
          time: Date.now(),
          addressAndCoordinates,
          biker: bikers[indexChooseBiker],
          rideHash
        },
        packageInfor.length - 1
      )
    )

    dispatch(PhaseActions.setIndexOfPhaseRide(packageInfor.length))
  }

  const serviceWhenRide = () => {
    dispatch(
      RideInforActions.setRideAfterConfirmBook({
        phaseBooking: PhaseBookingInRide.WAIT_BIKER,
        time: Date.now(),
        addressAndCoordinates,
        biker: bikers[indexChooseBiker],
        rideHash,
        price
      })
    )

    dispatch(PhaseActions.setIndexOfPhaseRide(0))
  }

  useEffect(() => {
    if (!isChooseBikerRequest && isBook) {
      if (errorEmitChooseBiker) {
        toastRef.current?.show(translate('canNotSendRequest'))
      } else {
        if (service === SERVICE.DELIVERY) {
          serviceWhenDelivery()
        } else {
          serviceWhenRide()
        }

        navigation.navigate('OrderTrackingScreen')

        dispatch(PhaseActions.setPhase(PhaseBookingBeforeRide.CHOOSE_SERVICE))

        dispatch(MapActions.resetDataAfterBook())
      }

      isBook = false
    }
  }, [errorEmitChooseBiker, isChooseBikerRequest, isBook])

  return (
    <>
      <Formik
        initialValues={{ price: initialPrice + '000' }}
        onSubmit={(values) => {
          orderBiker(values.price)
        }}
        validationSchema={PriceSchema}
      >
        {({ handleChange, values, handleSubmit }) => (
          <View style={styles.mainContainer}>
            <InforRider
              index={indexChooseBiker}
              wrapperStyle={styles.container}
            />
            <View style={styles.inputView}>
              <View style={styles.imageView}>
                <Dollar height={25} width={Metrics.defaultImageWidth} />
              </View>
              <TextInput
                placeholder={'59000đ'}
                style={styles.textInput}
                value={values.price}
                onChangeText={handleChange('price')}
                keyboardType={'number-pad'}
              />
            </View>
            <FooterButton
              title={translate('order')}
              onPress={handleSubmit}
              wrapperStyle={styles.wrapperStyle}
            />
          </View>
        )}
      </Formik>
      {isChooseBikerRequest && <BActivityIndicator />}
      <BToast ref={toastRef} />
    </>
  )
}

export default memo(ConfirmBook)
