import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  showAuth: [],
  showHome: []
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({})

/* ------------- Reducers ------------- */
export const showAuth = (state: any) => state
export const showHome = (state: any) => state

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_AUTH]: showAuth,
  [Types.SHOW_HOME]: showHome
})

// /* ------------- Selectors ------------- */
