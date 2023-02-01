import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types
import { HistoryState } from '@/Types/RootState'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getHistoryRequest: ['date'],
  getHistorySuccess: ['history', 'date'],
  getHistoryError: ['error'],

  getReportRequest: ['f_date', 't_date'],
  getReportSuccess: ['report'],
  getReportError: ['error']
})

export const HistoryTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE: Immutable.ImmutableObject<HistoryState> = Immutable(
  {
    fetchingHistory: false,
    errorFetchingHistory: null,
    history: [],
    historyRequested: [],
    fetchingReport: false,
    errorFetchingReport: null,
    report: [
      // { date: '2021-04-08', amt: 10, count_success: 20, count_cancel: 10 },
      // { date: '2021-04-09', amt: 20, count_success: 30, count_cancel: 2 },
      // { date: '2021-04-10', amt: 30, count_success: 20, count_cancel: 6 },
      // { date: '2021-04-11', amt: 20, count_success: 50, count_cancel: 2 },
      // { date: '2021-04-12', amt: 40, count_success: 10, count_cancel: 8 },
      // { date: '2021-04-13', amt: 20, count_success: 10, count_cancel: 1 },
      // { date: '2021-04-14', amt: 50, count_success: 10, count_cancel: 10 }
    ]
  }
)

export const getHistoryRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingHistory: true, errorFetchingHistory: null })
export const getHistorySuccess = (
  state = INITIAL_STATE,
  { history, date }: any
) =>
  state.merge({
    fetchingHistory: false,
    errorFetchingHistory: null,
    history: state.history.concat([history]),
    historyRequested: state.historyRequested.concat(date)
  })
export const getHistoryError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ fetchingHistory: false, errorFetchingHistory: error })

export const getReportRequest = (state = INITIAL_STATE) =>
  state.merge({ fetchingReport: true, errorFetchingReport: null })
export const getReportSuccess = (state = INITIAL_STATE, { report }: any) =>
  state.merge({ fetchingReport: false, errorFetchingReport: null, report })
export const getReportError = (state = INITIAL_STATE, { error }: any) =>
  state.merge({ fetchingReport: false, errorFetchingReport: error })
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_HISTORY_REQUEST]: getHistoryRequest,
  [Types.GET_HISTORY_SUCCESS]: getHistorySuccess,
  [Types.GET_HISTORY_ERROR]: getHistoryError,

  [Types.GET_REPORT_REQUEST]: getReportRequest,
  [Types.GET_REPORT_SUCCESS]: getReportSuccess,
  [Types.GET_REPORT_ERROR]: getReportError
})
