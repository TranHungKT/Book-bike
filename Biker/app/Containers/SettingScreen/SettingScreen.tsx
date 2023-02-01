import { BButton } from '@/Components'
import React from 'react'
import { Text, View, FlatList, ListRenderItemInfo } from 'react-native'

// Redux
import { useDispatch } from 'react-redux'
import AuthActions from '@/Redux/AuthRedux'

// Navigation
import {
  useNavigation,
  CompositeNavigationProp
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  SettingStackParams,
  MainStackParams
} from '@/Navigation/AppNavigationType'

// Components
import { Profile, SettingStackConstants, RenderListScreen } from './Components'
import { SettingStackConstantsType } from './Components/NavigationScreenContants'

// Styles
import styles from './Styles/SettingScreenStyles'

const renderKey = (item: SettingStackConstantsType) => item.screenName

type SettingScreenNavigationProp = StackNavigationProp<
  SettingStackParams,
  'SettingScreen'
>

type NavigationProp = CompositeNavigationProp<
  SettingScreenNavigationProp,
  StackNavigationProp<MainStackParams>
>

const SettingScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const dispatch = useDispatch()
  const signOut = () => {
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

  const renderItem = ({
    item,
    index
  }: ListRenderItemInfo<SettingStackConstantsType>) => {
    return <RenderListScreen item={item} key={index} />
  }

  const renderSeparator = () => <View style={styles.separator} />

  const renderFooter = () => (
    <BButton
      content={'Log out'}
      buttonStyle={styles.logoutStyle}
      textStyle={styles.logoutText}
      onPressButton={signOut}
    />
  )

  return (
    <View style={styles.mainContainer}>
      <Profile />
      <Text style={styles.title}>Account</Text>
      <FlatList
        style={styles.flatlist}
        data={SettingStackConstants}
        renderItem={renderItem}
        keyExtractor={renderKey}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />
    </View>
  )
}

export default SettingScreen
