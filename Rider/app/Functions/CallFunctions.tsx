import { Linking } from 'react-native'

const createError = (msg = '') => Promise.reject(new Error(msg))

const openLink = async (url: string) => {
  const canOpen = await Linking.canOpenURL(url)
  if (!canOpen) {
    return createError(`invalid URL provided: ${url}`)
  }
  try {
    return Linking.openURL(url)
  } catch (err) {
    console.log(err)
  }
}

const call = (phoneNumber: string) => {
  const url = `tel:${phoneNumber}`

  return openLink(url)
}

export default call
