import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { Formik } from 'formik'
import { Picker } from '@react-native-picker/picker'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState, UserDetail } from '@/Types'
import UserActions from '@/Redux/UserRedux'
// Components
import BTextInput from './BTextInput'
import { BButton } from '@/Components'

// Functions
import ValidateSchema from '@/Functions/Validates/ValidateEditUserData'

// Styles
import styles from './Styles/PersonalInforStyles'
import { Metrics, Colors } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svgs
import Email from '@/Svgs/Icons/email.svg'
import Edit from '@/Svgs/Icons/edit.svg'
import HomeBlack from '@/Svgs/Icons/homeBlack.svg'
import PhoneBlack from '@/Svgs/Icons/phoneBlack.svg'

const PersonalInfor = () => {
  const dispatch = useDispatch()

  const [editable, setEditable] = useState(false)

  const toggleEditable = () => setEditable(!editable)
  const userDetail = useSelector((state: RootState) => state.user.userDetail)

  const save = (values: UserDetail) => () => {
    setEditable(false)
    const newUserData = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      accountUsername: values.accountUsername,
      dateOfBirth: values.dateOfBirth,
      gender: values.gender,
      phoneNumber: values.phoneNumber
    }

    dispatch(UserActions.updateUserDataRequest(newUserData))
  }

  return (
    <Formik
      initialValues={userDetail}
      onSubmit={(values) => console.log(values)}
      validationSchema={ValidateSchema}
    >
      {({ handleChange, values, setFieldValue }) => (
        <View style={styles.container}>
          <View style={styles.rowView}>
            <Text style={styles.title}>{translate('personalInfor')}</Text>
            <TouchableOpacity onPress={toggleEditable}>
              {editable ? (
                <BButton
                  content={'save'}
                  buttonStyle={[
                    styles.buttonStyle,
                    editable
                      ? { backgroundColor: Colors.royalBlue }
                      : { backgroundColor: Colors.nobel }
                  ]}
                  textStyle={styles.textSaveStyle}
                  onPressButton={save(values)}
                />
              ) : (
                <Edit
                  width={Metrics.defaultImageWidth}
                  height={Metrics.defaultImageHeight}
                  style={styles.editImage}
                />
              )}
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollView}>
            <KeyboardAvoidingView style={styles.inforView}>
              <View style={styles.nameView}>
                <BTextInput
                  image={
                    <Email
                      width={Metrics.defaultImageWidth}
                      height={Metrics.defaultImageHeight}
                    />
                  }
                  onChangeText={handleChange('firstName')}
                  editable={editable}
                  value={values.firstName}
                  wrapperStyle={styles.wrapperName}
                />
                <BTextInput
                  image={
                    <Email
                      width={Metrics.defaultImageWidth}
                      height={Metrics.defaultImageHeight}
                    />
                  }
                  onChangeText={handleChange('lastName')}
                  editable={editable}
                  value={values.lastName}
                  wrapperStyle={styles.wrapperName}
                />
              </View>
              <BTextInput
                image={
                  <Email
                    width={Metrics.defaultImageWidth}
                    height={Metrics.defaultImageHeight}
                  />
                }
                onChangeText={handleChange('accountUsername')}
                editable={editable}
                value={values.accountUsername}
              />
              <View style={styles.genderView}>
                <Text style={styles.genderText}>{translate('gender')}</Text>
                <Picker
                  style={styles.picker}
                  onValueChange={(value) => {
                    if (value == 1) {
                      setFieldValue('gender', true)
                    } else {
                      setFieldValue('gender', false)
                    }
                  }}
                  enabled={editable}
                  selectedValue={values.gender ? 1 : 0}
                >
                  <Picker.Item label={translate('man')} value={1} />
                  <Picker.Item label={translate('woman')} value={0} />
                </Picker>
              </View>
              <BTextInput
                onChangeText={handleChange('phoneNumber')}
                editable={false}
                value={values.phoneNumber}
                image={
                  <PhoneBlack
                    width={Metrics.defaultImageWidth}
                    height={Metrics.defaultImageHeight}
                  />
                }
              />
              <BTextInput
                onChangeText={handleChange('address')}
                editable={editable}
                value={values.address}
                image={
                  <HomeBlack
                    width={Metrics.defaultImageWidth}
                    height={Metrics.defaultImageHeight}
                  />
                }
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      )}
    </Formik>
  )
}

export default PersonalInfor
