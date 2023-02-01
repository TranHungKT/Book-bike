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
import AuthActions from '@/Redux/AuthRedux'
import UserActions from '@/Redux/UserRedux'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Components
import BTextInput from './BTextInput'
import { BButton } from '@/Components'

// Functions
import ValidateSchema from '@/Functions/Validates/ValidateEditUserData'

// Styles
import styles from './Styles/PersonalInforStyles'
import { Metrics, Colors, Normalize } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svgs
import Name from '@/Svgs/Icons/name.svg'
import Email from '@/Svgs/Icons/email.svg'
import Edit from '@/Svgs/Icons/edit.svg'
import HomeBlack from '@/Svgs/Icons/homeBlack.svg'
import PhoneBlack from '@/Svgs/Icons/phoneBlack.svg'

const defaultImageWidth = Normalize(20)
const defaultImageHeight = Normalize(20)

const PersonalInfor = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

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

  const logOut = () => {
    dispatch(AuthActions.signOut())

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'AuthStack',
          params: { screen: 'AuthScreen' }
        }
      ]
    })
  }

  return (
    <>
      <Formik
        initialValues={userDetail}
        onSubmit={(values) => console.log(values)}
        enableReinitialize={true}
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

            <ScrollView>
              <KeyboardAvoidingView style={styles.inforView}>
                <View style={styles.nameView}>
                  <BTextInput
                    image={
                      <Name width={Normalize(20)} height={Normalize(20)} />
                    }
                    onChangeText={handleChange('firstName')}
                    editable={editable}
                    value={values.firstName}
                    wrapperStyle={styles.wrapperName}
                  />
                  <BTextInput
                    image={
                      <Name width={Normalize(20)} height={Normalize(20)} />
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
                      width={defaultImageWidth}
                      height={defaultImageHeight}
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
                    onValueChange={(value: number) => {
                      if (value === 1) {
                        setFieldValue('gender', true)
                      } else {
                        setFieldValue('gender', false)
                      }
                    }}
                    enabled={editable}
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
                      width={defaultImageWidth}
                      height={defaultImageHeight}
                    />
                  }
                />
                <BTextInput
                  onChangeText={handleChange('address')}
                  editable={editable}
                  value={values.address}
                  image={
                    <HomeBlack
                      width={defaultImageWidth}
                      height={defaultImageHeight}
                    />
                  }
                />
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        )}
      </Formik>
      <BButton
        content='Log out'
        buttonStyle={styles.logoutStyle}
        textStyle={styles.logoutText}
        onPressButton={logOut}
      />
    </>
  )
}

export default PersonalInfor
