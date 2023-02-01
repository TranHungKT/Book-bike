import React from 'react'
import { Text, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { Formik } from 'formik'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ChangePasswordStackParams } from '@/Navigation/AppNavigationType'

// Components
import { BBackButton, BButton } from '@/Components'
import BTextInput from '../SettingScreen/Components/BTextInput'

// Functions
import Validate from '@/Functions/Validates/ValidateChangePassword'

// Styles
import styles from './Styles/ConfirmUserNameScreenScreenStyles'
import { translate } from '@/Language'

type NavigationProps = StackNavigationProp<
  ChangePasswordStackParams,
  'ConfirmPasswordScreen'
>

const ConfirmUserNameScreen = () => {
  const navigation = useNavigation<NavigationProps>()

  const navigateToNewPassword = (password: string) =>
    navigation.navigate('ChangePasswordScreen', {
      password: 'Kaaa@m11e23f58Z!AV44!!'
    })
  return (
    <SafeAreaView style={styles.container}>
      <BBackButton imageStyle={styles.imageStyle} />
      <Text style={styles.title}>{translate('changePassword')}</Text>
      <Text style={styles.require}>{translate('changePasswordRequire')}</Text>
      <KeyboardAvoidingView>
        <Formik
          initialValues={{ password: '' }}
          validationSchema={Validate}
          onSubmit={(values) => {
            navigateToNewPassword(values.password)
          }}
        >
          {({ handleChange, values, errors, handleSubmit }) => (
            <>
              <BTextInput
                image={<></>}
                onChangeText={handleChange('password')}
                wrapperStyle={styles.wrapperStyle}
                placeholder={translate('examplePassword')}
                error={errors.password}
                value={values.password}
              />
              <BButton
                content={'next'}
                buttonStyle={styles.buttonStyle}
                onPressButton={handleSubmit}
              />
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ConfirmUserNameScreen
