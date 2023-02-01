import apiSauce from 'apisauce'
import HistoryApiConfig from '@/Config/HistoryConfig'

const create = (baseURL = HistoryApiConfig.baseURL) => {
  const api = apiSauce.create({
    baseURL,
    headers: HistoryApiConfig.headers,
    timeout: HistoryApiConfig.timeOut
  })

  // -----------Server of Lam ----------
  const getHistoryRequest = (
    token: string,
    date: string,
    userAgent: string
  ) => {
    return api.get(`delivery?token=${token}&date=${date}&UID=${userAgent}`)
  }

  const getReportRequest = (
    token: string,
    f_date: string,
    t_date: string,
    userAgent: string
  ) =>
    api.get(
      `delivery/statistics?token=${token}&f_date=${f_date}&t_date=${t_date}&UID=${userAgent}`
    )

  // const getHistoryRequest = (token: string, date: string) =>
  //   api.get(`biker/get-detail-biker-log?token=${token}&date=${date}`)

  // const getReportRequest = (token: string, f_date: string, t_date: string) =>
  //   api.get(`user/history?token=${token}&f_date=${f_date}&t_date=${t_date}`)

  return {
    getHistoryRequest,
    getReportRequest
  }
}

export default {
  create
}
