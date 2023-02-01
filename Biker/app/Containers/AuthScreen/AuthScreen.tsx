import React from 'react'
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParams } from '@/Navigation/AppNavigationType'
import { AuthScreens } from '@/Constants/AppNavigationConstants'

// Components
import { BButton } from '@/Components'

// Styles
import styles from './Styles/AuthScreenStyles'
import { Images } from '@/Themes'

// Language
import { translate } from '@/Language'

type AuthScreenNavigationProps = StackNavigationProp<
  AuthStackParams,
  AuthScreens.AuthScreen
>

const AuthScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationProps>()

  const navigateToSignIn = () => navigation.navigate(AuthScreens.SignInScreen)

  const navigateToSignUp = () => navigation.navigate(AuthScreens.SignUpScreen)

  return (
    <ImageBackground source={Images.biker} style={styles.background}>
      <StatusBar hidden={false} barStyle={'light-content'} />
      <BButton
        content={translate('signIn').toUpperCase()}
        buttonStyle={styles.signInButton}
        textStyle={styles.signInText}
        onPressButton={navigateToSignIn}
      />
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={navigateToSignUp}
        activeOpacity={0.8}
      >
        <Text style={styles.signUpText}>
          {translate('signUp').toUpperCase()}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default AuthScreen
