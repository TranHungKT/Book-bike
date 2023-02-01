import React, { useState } from 'react'
import { View, KeyboardAvoidingView, ScrollView } from 'react-native'
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
import ValidateLicense from '@/Functions/Validates/ValidateLicense'

// Styles
import styles from './Styles/LicenseScreenStyles'

// Language
import { translate } from '@/Language'
import { NUMBER_LICENSE } from '@/Constants/TypeDataSignUpDriver'

const LicenseScreen = () => {
  const dispatch = useDispatch()
  const [image, setImage] = useState('')

  const numberLicense = useSelector(
    (state: RootState) => state.signUpDriver.numberLicense
  )

  const setImageFunction = (image: string) => setImage(image)

  const save = (values: { numberLicense: string }) => {
    dispatch(
      SignUpDriverActions.setInformation({
        type: NUMBER_LICENSE,
        value: values.numberLicense
      })
    )
  }

  return (
    <>
      <Formik
        initialValues={{
          numberLicense: numberLicense
        }}
        onSubmit={(values) => {
          save(values)
          return
        }}
        validationSchema={ValidateLicense}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <ScrollView>
              <TakePicture
                title={translate('frontSideLicense')}
                setImageFunction={setImageFunction}
              />
              <TakePicture
                title={translate('behideSideLicense')}
                setImageFunction={setImageFunction}
              />

              <KeyboardAvoidingView>
                <BLabelTextInput
                  value={values.numberLicense}
                  label={translate('numberLicense')}
                  textInputStyle={styles.textInputStyle}
                  wrapperStyle={styles.textInput}
                  errorMessage={errors.numberLicense}
                  isRequired
                  keyboardType={'number-pad'}
                  returnKeyType={'next'}
                  onChangeText={handleChange('numberLicense')}
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

export default LicenseScreen
