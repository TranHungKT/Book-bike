import { call, put, select } from 'redux-saga/effects'

// Api
import UserApi from '@/Services/UserApi'

// Redux
import UserActions from '@/Redux/UserRedux'

// Functions
import { getAccessToken } from '@/Redux/AuthRedux'
import { mapUserDetailToFrontEnd } from '@/Functions/MapDataToFrontendFunctions'

// Types
import { ResponseTypes, RootState } from '@/Types'

const UserAPI = UserApi.create()

const selectAccessToken = (state: RootState) => getAccessToken(state.auth)

export function* getUserDetailSaga() {
  try {
    const token: string = yield select(selectAccessToken)

    const response: ResponseTypes<any> = yield call<any>(
      UserAPI.getUserDetailRequest,
      token
    )

    if (response.ok && response.status === 200) {
      const data = mapUserDetailToFrontEnd(response.data.data)

      yield put(UserActions.getUserDataSuccess(data))
    } else {
      yield put(UserActions.getUserDataError(response.data.data))
    }
  } catch (error) {
    console.log(error)
  }
}

export function* updateUserDetailSaga({ newUserData }: any) {
  try {
    const token: string = yield select(selectAccessToken)

    const response: ResponseTypes<any> = yield call<any>(
      UserAPI.upadteUserDetailRequest,
      newUserData,
      token
    )

    if (response.ok && response.status === 200) {
      yield put(UserActions.updateUserDataSuccess())
    } else {
      yield put(UserActions.updateUserDataError(response.data.data))
    }
  } catch (error) {
    console.log(error)
  }
}
