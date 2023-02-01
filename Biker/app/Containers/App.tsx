import React from 'react'
import 'react-native-gesture-handler'
import '@/Config'

import RootContainer from './RootContainer'

import { Provider } from 'react-redux'
import createStore from '@/Redux'

// Language
import Language from '@/Language'

// create our store
export const store = createStore()

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
      <Language />
    </Provider>
  )
}

export default App
