import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import ReduxNavigation from '@/Navigation/ReduxNavigation'

// Redux
import { useDispatch } from 'react-redux'
import StartupActions from '@/Redux/StartupRedux'

// Components
import { RNetWork } from '@/Components'

const RootContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(StartupActions.startup())
  }, [])

  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <ReduxNavigation />
      <RNetWork />
    </>
  )
}

export default RootContainer
