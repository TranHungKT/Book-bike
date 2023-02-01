import apiSauce from 'apisauce'
import AuthConfig from '@/Config/AuthConfig'

// Types
import { RegisterType } from '@/Types'

const create = (baseURL = AuthConfig.baseURL) => {
  const api = apiSauce.create({
    baseURL,
    headers: AuthConfig.headers,
    timeout: AuthConfig.timeOut
  })

  const signInRequest = (userName: string, password: string) => {
    return api.post('authenticate', {
      username: userName,
      password,
      biker: 'false'
    })
  }

  const signUpRequest = (registerDetail: RegisterType) => {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      gender,
      dateOfBirth,
      address
    } = registerDetail
    return api.post('register', {
      firstName,
      lastName,
      female: gender,
      phoneNumber,
      dateOfBirth,
      address,
      email,
      password
    })
  }

  const verifyRequest = (
    userName: string,
    otpToken: string,
    otpCode: string
  ) => {
    return api.post('authenticate2', {
      username: userName,
      otpToken,
      otpCode
    })
  }

  const refreshTokenRequest = (userName: string, refreshToken: string) => {
    return api.post('refresh', {
      username: userName,
      refreshToken
    })
  }

  const changePasswordRequest = (
    phoneNumber: string,
    password: string,
    newPassword: string
  ) => {
    return api.post('change-password', {
      username: phoneNumber,
      password,
      newPassword
    })
  }

  return {
    signInRequest,
    signUpRequest,
    verifyRequest,
    refreshTokenRequest,
    changePasswordRequest
  }
}

export default {
  create
}
