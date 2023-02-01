import React, { useEffect } from 'react'
import { View, FlatList, ListRenderItemInfo } from 'react-native'

// Navigation
import { RootStackParams } from '@/Navigation/AppNavigationType'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import AuthActions from '@/Redux/AuthRedux'
import SignUpDriverActions from '@/Redux/SignUpDriverRedux'
// Components
import { BActivityIndicator, BButton } from '@/Components'
import {
  NavigationConstants,
  NavigationType
} from './Components/NavigationContants'
import RenderListScreen from './Components/RenderListScreen'

// Constants
import {
  AppStacks,
  // AuthScreens,
  MainScreens
} from '@/Constants/AppNavigationConstants'

// Types
import { RootState } from '@/Types'

// Styles
import styles from './Styles/SignUpDriverSreenStyles'
import { translate } from '@/Language'
import { confirmAlert } from '@/Functions/AlertFunctions'

const keyExtractor = (item: NavigationType, index: number) =>
  index + item.screenName
let isSignUp = false

type SignUpDriverSreenNavigationProps = StackNavigationProp<
  RootStackParams,
  AppStacks.AuthStack
>

const SignUpDriverSreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<SignUpDriverSreenNavigationProps>()

  const { licensePlate, numberID, numberLicense, vehicleIssue } = useSelector(
    (state: RootState) => state.signUpDriver
  )

  const { fetchingSignUpDriver, errorSignUpDriver, refreshToken, userName } =
    useSelector((state: RootState) => state.auth)

  const isDisableButton = () =>
    !licensePlate || !numberID || !numberLicense || !vehicleIssue

  const renderItem = ({ item, index }: ListRenderItemInfo<NavigationType>) => {
    return <RenderListScreen data={item} key={index} />
  }

  const renderSeparator = () => {
    return <View style={styles.separator} />
  }

  const renderFooter = () => {
    return (
      <BButton
        content={translate('sendRequest')}
        buttonStyle={styles.buttonStyle}
        disable={isDisableButton()}
        onPressButton={signUpDriver}
      />
    )
  }

  const signUpDriver = () => {
    isSignUp = true

    dispatch(
      AuthActions.signUpDriverRequest({
        numberLicense,
        numberID,
        licensePlate,
        vehicleIssue,
        userName,
        refreshToken
      })
    )
  }

  const navigateToHome = () =>
    navigation.reset({
      index: 0,
      routes: [
        {
          name: AppStacks.MainStack,
          params: { screen: MainScreens.HomeScreen }
        }
      ]
    })

  useEffect(() => {
    if (isSignUp && !fetchingSignUpDriver) {
      if (errorSignUpDriver) {
        return confirmAlert({
          title: 'Đăng nhập thất bại',
          content: errorSignUpDriver,
          onPressOK: () => {}
        })
      } else {
        dispatch(SignUpDriverActions.resetDataAfterSuccess())
        navigateToHome()
      }
      isSignUp = false
    }
  }, [isSignUp, fetchingSignUpDriver, errorSignUpDriver])

  return (
    <>
      <FlatList
        data={NavigationConstants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />
      {fetchingSignUpDriver && <BActivityIndicator />}
    </>
  )
}

export default SignUpDriverSreen
