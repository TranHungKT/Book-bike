import React, { useRef, useState } from 'react'
import {
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Text
} from 'react-native'
import { Formik, FormikValues } from 'formik'
import { launchCamera } from 'react-native-image-picker'
import RNFS from 'react-native-fs'
import Toast from 'react-native-easy-toast'

// Redux
import { useDispatch } from 'react-redux'
import PackageInforActions from '@/Redux/PackageInfor'
import PhaseActions from '@/Redux/PhaseRedux'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { BookingStackParams } from '@/Navigation/AppNavigationType'
import { StackNavigationProp } from '@react-navigation/stack'

// Components
import { Parcel, Recipient } from './Components'
import { BNextButton, Header } from '@/Components'

// Functions
import ValidateRecipientSchema from '@/Functions/Validates/ValidateRecipient'

// Constants
import { PhaseBookingBeforeRide } from '@/Constants/PhaseReduxConstants'

// Styles
import styles from './Styles/InforPackageScreenStyles'
import { Colors, Metrics } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svgs
import Camera from '@/Svgs/Icons/camera.svg'
import ImageSVG from '@/Svgs/Icons/image.svg'

type InforPackageScreenNavigationProps = StackNavigationProp<
  BookingStackParams,
  'InforPackageScreen'
>

const InforPackageScreen = () => {
  const navigation = useNavigation<InforPackageScreenNavigationProps>()
  const dispatch = useDispatch()

  const [category, setCategory] = useState(-1)
  const [weight, setWeight] = useState<number>(-1)
  const [image, setImage] = useState('')

  const selectCategory = (value: number) => setCategory(value)

  const selectWeight = (value: number) => setWeight(value)

  const formikRef = useRef<any>(null)
  const toastRef = useRef<Toast>(null)

  const handleSubmit = () => {
    formikRef.current?.handleSubmit()
  }

  const onSubmit = (values: FormikValues) => {
    const packageInfor = {
      weight: weight,
      category: category,
      receiverInfor: {
        name: values.recipientName,
        phoneNumber: values.phoneNumber
      },
      image: image
    }

    dispatch(PackageInforActions.setPackageInfor(packageInfor))
    dispatch(PhaseActions.setPhase(PhaseBookingBeforeRide.CHOOSE_LOCATION))
    navigation.navigate('DashboardScreen')
  }

  const launchImage = () => {
    launchCamera(
      { mediaType: 'photo', maxWidth: 600, maxHeight: 600 },
      (image) => {
        if (image.uri) {
          RNFS.readFile(image.uri, 'base64')
            .then((base) => {
              setImage(base)
            })
            .catch((err) => toastRef.current?.show('ERROR LAUNCH CAMERA', err))
        }
      }
    )
  }

  return (
    <>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView style={styles.container}>
          <StatusBar
            backgroundColor={Colors.royalBlue}
            hidden={false}
            barStyle={'light-content'}
          />
          <Header
            title={translate('packageInfor').toUpperCase()}
            canCall={false}
            titleStyle={styles.titleStyle}
          />
          <Parcel
            selectCategory={selectCategory}
            selectWeight={selectWeight}
            category={category}
            weight={weight}
          />
          <Formik
            innerRef={formikRef}
            initialValues={{
              recipientName: 'Tran Hung',
              phoneNumber: '0971126179'
            }}
            onSubmit={onSubmit}
            validationSchema={ValidateRecipientSchema}
          >
            {({ values }) => (
              <>
                <Recipient />
                <View style={styles.imageView}>
                  <View style={styles.image}>
                    <ImageSVG
                      width={Metrics.defaultImageWidth}
                      height={Metrics.defaultImageHeight}
                    />
                    {!!image ? (
                      <Text style={styles.imageName}>package.jpg</Text>
                    ) : (
                      <Text style={styles.imageName}>
                        {translate('parcelImage')}
                      </Text>
                    )}
                  </View>
                  <Camera
                    width={Metrics.defaultImageWidth}
                    height={Metrics.defaultImageHeight}
                    onPress={launchImage}
                  />
                </View>
                <BNextButton
                  enable={
                    !!image &&
                    !!values.phoneNumber &&
                    !!values.recipientName &&
                    weight !== -1 &&
                    category !== -1
                  }
                  navigateFunc={handleSubmit}
                  wrapperStyle={styles.buttonStyle}
                />
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  )
}

export default InforPackageScreen
