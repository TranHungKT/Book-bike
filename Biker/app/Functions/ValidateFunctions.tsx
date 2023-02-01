import { isEmpty as isEmptyRamda } from 'ramda'

export const isEmpty = (value: any) => {
  return isEmptyRamda(value)
}

export const validateEmail = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return emailRegex.test(email)
}

export const validateEmptyField = (text: string) => {
  return text.trim().length < 1
}

export const validatePassword = (password: string) => {
  return password.length >= 8
}

export const validateConfirmPassword = (confirmPass: string, pass: string) => {
  return confirmPass === pass
}

export const validatePhoneNumber = (phoneNumber: string) => {
  const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  return phoneNumberRegex.test(phoneNumber)
}
