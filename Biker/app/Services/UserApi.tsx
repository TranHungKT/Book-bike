import apiSauce from 'apisauce'
import ManagementApiConfig from '@/Config/ManagementApiConfig'
import { UserDetail } from '@/Types'

const create = (baseURL = ManagementApiConfig.baseURL) => {
  const api = apiSauce.create({
    baseURL,
    headers: ManagementApiConfig.headers,
    timeout: ManagementApiConfig.timeOut
  })

  const getUserDetailRequest = (token: string) =>
    api.get(`user/get-user?token=${token}`)

  const upadteUserDetailRequest = (newUserData: UserDetail, token: string) => {
    const {
      firstName,
      lastName,
      gender,
      accountUsername,
      address,
      dateOfBirth
    } = newUserData

    return api.post('user/update-user', {
      first_name: firstName,
      last_name: lastName,
      female: gender,
      email: accountUsername,
      address,
      date_of_birth: dateOfBirth,
      token
    })
  }

  const createReviewTrip = (
    rideHash: string,
    rating: number,
    accessToken: string
  ) => {
    return api.post('biker/create-review-trip', {
      rideHash,
      star: rating,
      comment: '',
      token: accessToken
    })
  }

  return {
    getUserDetailRequest,
    upadteUserDetailRequest,
    createReviewTrip
  }
}

export default {
  create
}
