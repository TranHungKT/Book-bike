import React, { useState, useRef } from 'react'
import { View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Formik } from 'formik'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import SignUpDriverActions from '@/Redux/SignUpDriverRedux'
import { RootState } from '@/Types'

// Components
import TakePicture from './Components/TakePicture'
import { BLabelTextInput } from '@/Components'

// Functions
// import ValidateBike from '@/Functions/Validates/ValidateBike'
import { refTextInputFocus } from '@/Functions/RefFunctions'

// Styles
import styles from './Styles/IdentifyScreenStyles'

// Language
import { translate } from '@/Language'
import SaveButton from './Components/SaveButton'
import { BIKE_INFOR } from '@/Constants/TypeDataSignUpDriver'

type Values = {
  licensePlate: string
  vehicleIssue: string
}

const BikeInforScreen = () => {
  const dispatch = useDispatch()
  const [image, setImage] = useState('')

  const { licensePlate, vehicleIssue } = useSelector(
    (state: RootState) => state.signUpDriver
  )

  const setImageFunction = (image: string) => setImage(image)

  // const licensePlateRef = useRef<TextInput>(null)
  const brandRef = useRef<TextInput>(null)
  const dateManufactureRef = useRef<TextInput>(null)
  const vehicleRef = useRef<TextInput>(null)

  const onLicensePlateSubmitEditing = () => refTextInputFocus(brandRef)
  const onBrandSubmitEditing = () => refTextInputFocus(dateManufactureRef)
  // const onDateManufactureEditing = () => refTextInputFocus(vehicleRef)

  const save = (values: Values) => {
    dispatch(
      SignUpDriverActions.setInformation({
        type: BIKE_INFOR,
        value: {
          licensePlate: values.licensePlate,
          vehicleIssue: values.vehicleIssue
        }
      })
    )
  }

  return (
    <>
      <Formik
        initialValues={{
          licensePlate: licensePlate,
          brand: '',
          dateManufacture: '',
          vehicleIssue: vehicleIssue
        }}
        onSubmit={(values) => {
          save(values)
          return
        }}
        // validationSchema={ValidateBike}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <ScrollView>
              <TakePicture
                title={translate('bikeSleeper')}
                setImageFunction={setImageFunction}
              />

              <KeyboardAvoidingView>
                <BLabelTextInput
                  value={values.licensePlate}
                  label={translate('licensePlate')}
                  textInputStyle={styles.textInputStyle}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.licensePlate}
                  isRequired
                  returnKeyType={'next'}
                  onChangeText={handleChange('licensePlate')}
                  onSubmitEditing={onLicensePlateSubmitEditing}
                />
                <BLabelTextInput
                  ref={brandRef}
                  textInputStyle={styles.textInputStyle}
                  value={values.brand}
                  label={translate('brand')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.brand}
                  isRequired
                  returnKeyType={'next'}
                  onChangeText={handleChange('brand')}
                  onSubmitEditing={onBrandSubmitEditing}
                />
                <BLabelTextInput
                  ref={dateManufactureRef}
                  textInputStyle={styles.textInputStyle}
                  value={values.dateManufacture}
                  label={translate('dateManufacture')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.dateManufacture}
                  isRequired
                  returnKeyType={'next'}
                  onChangeText={handleChange('dateManufacture')}
                />
                <BLabelTextInput
                  ref={vehicleRef}
                  textInputStyle={styles.textInputStyle}
                  value={values.vehicleIssue}
                  label={translate('vehicleIssue')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.vehicleIssue}
                  isRequired
                  returnKeyType={'next'}
                  keyboardType={'number-pad'}
                  onChangeText={handleChange('vehicleIssue')}
                />
              </KeyboardAvoidingView>
            </ScrollView>
            <View style={styles.saveButtonView}>
              <SaveButton onPressFunc={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </>
  )
}

export default BikeInforScreen
