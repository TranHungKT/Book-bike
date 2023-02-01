import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types
import { PhaseRiderState } from '@/Types/RootState'

// Constants
import { PhaseRider } from '@/Constants/PhaseRiderConstants'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setPhaseRider: ['phaseRider'],
  setService: ['service'],

  findRideAfterQuitRequest: [''],
  findRideAfterQuitSuccess: [''],
  findRideAfterQuitError: ['error']
})

export const PhaseRiderType = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<PhaseRiderState> =
  Immutable({
    phaseRider: PhaseRider.NOT_READY,
    service: '',

    fetchingRequestFindBikerAfterQuit: false,
    errorRequestFindBikerAfterQuit: null
  })

/* ------------- Reducers ------------- */

// Set phase rider
export const setPhaseRider = (state = INITIAL_STATE, { phaseRider }: any) =>
  state.merge({ phaseRider })

export const setService = (state = INITIAL_STATE, { service }: any) =>
  state.merge({ service })

export const findRideAfterQuitRequest = (state = INITIAL_STATE) =>
  state.merge({
    errorRequestFindBikerAfterQuit: null,
    fetchingRequestFindBikerAfterQuit: true
  })
export const findRideAfterQuitSuccess = (state = INITIAL_STATE) =>
  state.merge({
    fetchingRequestFindBikerAfterQuit: false,
    errorRequestFindBikerAfterQuit: null
  })
export const findRideAfterQuitError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({
    errorRequestFindBikerAfterQuit: error,
    fetchingRequestFindBikerAfterQuit: false
  })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PHASE_RIDER]: setPhaseRider,

  [Types.SET_SERVICE]: setService,

  [Types.FIND_RIDE_AFTER_QUIT_REQUEST]: findRideAfterQuitRequest,
  [Types.FIND_RIDE_AFTER_QUIT_SUCCESS]: findRideAfterQuitSuccess,
  [Types.FIND_RIDE_AFTER_QUIT_ERROR]: findRideAfterQuitError
})
