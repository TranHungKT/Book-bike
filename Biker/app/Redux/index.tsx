import { createStore, combineReducers, applyMiddleware } from 'redux'
import R from 'ramda'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '@/Sagas'

/* ------------- Assemble The Reducers ------------- */
export const rootReducer = combineReducers({
  app: require('./AppRedux').reducer,
  auth: require('./AuthRedux').reducer,
  rideInfor: require('./RideInforRedux').reducer,
  phase: require('./PhaseRedux').reducer,
  socket: require('./SocketRedux').reducer,
  user: require('./UserRedux').reducer,
  map: require('./MapRedux').reducer,
  package: require('./PackageInfor').reducer,
  history: require('./HistoryRedux').reducer
})

export default () => {
  const middleware = []
  // Add Redux Logger
  const USE_LOGGING = __DEV__
  const loggingBlacklist = [
    'EFFECT_TRIGGERED',
    'EFFECT_RESOLVED',
    'EFFECT_REJECTED',
    'persist/REHYDRATE'
  ]
  const reduxLogger = createLogger({
    predicate: (getState, { type }) =>
      USE_LOGGING && R.not(R.contains(type, loggingBlacklist)),
    duration: true,
    colors: {
      title: () => 'red',
      prevState: () => 'green',
      action: () => 'blue',
      nextState: () => 'orange'
    }
  })
  // middleware.push(reduxLogger)

  // Add Saga Middleware
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const middleWareEnhancer = applyMiddleware(...middleware)

  // Create Store
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
