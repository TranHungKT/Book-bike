import { call, put, select } from 'redux-saga/effects'

// Redux
import HistoryActions from '@/Redux/HistoryRedux'

// Api
import HistoryApi from '@/Services/HistoryApi'

// Types
import { ResponseTypes, RootState, HistoryByDate, ReportHistory } from '@/Types'

// Functions
import { getAccessToken } from '@/Redux/AuthRedux'
import {
  mapHistoryToFrontEnd,
  mapReportToFrontEnd
} from '@/Functions/MapDataToFrontendFunctions'

const HistoryAPI = HistoryApi.create()

const selectAccessToken = (state: RootState) => getAccessToken(state.auth)

export function* getHistorySaga(HistoryPayload: any) {
  try {
    const { date } = HistoryPayload
    const token: string = yield select(selectAccessToken)

    const response: ResponseTypes<any> = yield call<any>(
      HistoryAPI.getHistoryRequest,
      token,
      date
    )

    if (response.ok && response.status === 200) {
      const data = response.data.data.map((data: HistoryByDate) =>
        mapHistoryToFrontEnd(data)
      )
      yield put(HistoryActions.getHistorySuccess(data, date))
    } else {
      yield put(HistoryActions.getHistoryError('eroror'))
    }
  } catch (error) {
    yield put(HistoryActions.getHistoryError('can not get history'))
  }
}

export function* getReportSaga(ReportPayload: any) {
  try {
    const { f_date, t_date } = ReportPayload
    const token: string = yield select(selectAccessToken)

    const response: ResponseTypes<any> = yield call<any>(
      HistoryAPI.getReportRequest,
      token,
      f_date,
      t_date
    )

    if (response.ok && response.status === 200) {
      const data = response.data.data.map((data: ReportHistory) =>
        mapReportToFrontEnd(data)
      )

      yield put(HistoryActions.getReportSuccess(data))
    } else {
      yield put(HistoryActions.getReportError('eroror'))
    }
  } catch (error) {
    yield put(HistoryActions.getReportError('can not get history'))
  }
}
