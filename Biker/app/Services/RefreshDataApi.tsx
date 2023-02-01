import apiSauce from 'apisauce'
import SocketConfig from '@/Config/SocketConfig'
import { getUniqueId } from 'react-native-device-info'

const uniqueId = getUniqueId()

const create = (baseURL = SocketConfig.baseURL) => {
  const api = apiSauce.create({
    baseURL,
    headers: SocketConfig.headers,
    timeout: SocketConfig.timeOut
  })

  const refreshDataAfterQuitRequest = (accessToken: string) => {
    return api.get(`user?token=${accessToken}&UID=${uniqueId}`)
  }

  return { refreshDataAfterQuitRequest }
}

export default { create }
