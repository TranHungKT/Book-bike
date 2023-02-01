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
import SaveButton from './Components/SaveButton'

// Functions
// import ValidateID from '@/Functions/Validates/ValidateID'
import { refTextInputFocus } from '@/Functions/RefFunctions'

// Constants
import { IDENTITY } from '@/Constants/TypeDataSignUpDriver'

// Styles
import styles from './Styles/IdentifyScreenStyles'

// Language
import { translate } from '@/Language'

const IdentifyScreen = () => {
  const dispatch = useDispatch()
  const [image, setImage] = useState('')

  const setImageFunction = (image: string) => setImage(image)

  const numberID = useSelector(
    (state: RootState) => state.signUpDriver.numberID
  )

  const dateCreatedRef = useRef<TextInput>(null)
  const addressRef = useRef<TextInput>(null)
  const placeRef = useRef<TextInput>(null)
  const outDateRef = useRef<TextInput>(null)

  const onNumberIdSubmitEditing = () => refTextInputFocus(dateCreatedRef)
  const onDateCreatedSubmitEditing = () => refTextInputFocus(addressRef)
  const onAddressSubmitEditing = () => refTextInputFocus(placeRef)
  const onPlaceSubmitEditing = () => refTextInputFocus(outDateRef)

  const save = (values: { numberID: string }) => {
    dispatch(
      SignUpDriverActions.setInformation({
        type: IDENTITY,
        value: values.numberID
      })
    )
  }

  return (
    <>
      <Formik
        initialValues={{
          numberID: numberID,
          dateCreated: '',
          address: '',
          place: '',
          outDate: ''
        }}
        onSubmit={(values) => save(values)}
        // validationSchema={ValidateID}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <ScrollView>
              <TakePicture
                title={translate('frontSide')}
                setImageFunction={setImageFunction}
              />
              <TakePicture
                title={translate('behideSide')}
                setImageFunction={setImageFunction}
              />

              <KeyboardAvoidingView>
                <BLabelTextInput
                  value={values.numberID}
                  label={translate('numberID')}
                  textInputStyle={styles.textInputStyle}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.numberID}
                  isRequired
                  keyboardType={'number-pad'}
                  returnKeyType={'next'}
                  onChangeText={handleChange('numberID')}
                  onSubmitEditing={onNumberIdSubmitEditing}
                />

                <BLabelTextInput
                  ref={dateCreatedRef}
                  textInputStyle={styles.textInputStyle}
                  value={values.dateCreated}
                  label={translate('dateCreated')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.dateCreated}
                  isRequired
                  returnKeyType={'next'}
                  onChangeText={handleChange('dateCreated')}
                  onSubmitEditing={onDateCreatedSubmitEditing}
                />
                <BLabelTextInput
                  ref={addressRef}
                  textInputStyle={styles.textInputStyle}
                  value={values.address}
                  label={translate('address')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.address}
                  isRequired
                  returnKeyType={'next'}
                  onChangeText={handleChange('address')}
                  onSubmitEditing={onAddressSubmitEditing}
                />
                <BLabelTextInput
                  ref={placeRef}
                  textInputStyle={styles.textInputStyle}
                  value={values.place}
                  label={translate('place')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.place}
                  isRequired
                  returnKeyType={'next'}
                  onChangeText={handleChange('place')}
                  onSubmitEditing={onPlaceSubmitEditing}
                />
                <BLabelTextInput
                  ref={outDateRef}
                  textInputStyle={styles.textInputStyle}
                  value={values.outDate}
                  label={translate('outDate')}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.outDate}
                  isRequired
                  returnKeyType={'next'}
                  onChangeText={handleChange('outDate')}
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

export default IdentifyScreen
