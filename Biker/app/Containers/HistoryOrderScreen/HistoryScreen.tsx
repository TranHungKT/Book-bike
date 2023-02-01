import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItemInfo, View } from 'react-native'
import moment from 'moment'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import HistoryActions from '@/Redux/HistoryRedux'

// Components
import { Calendar, NumberOfRide, Revenue, RenderHistory } from './Components'
import { BActivityIndicator } from '@/Components'
// Types
import { RootState, HistoryByDate } from '@/Types'

// Styles
import styles from './Styles/HistoryScreenStyles'
import { isEmpty } from '@/Functions/ValidateFunctions'

const keyExtractor = (item: HistoryByDate, index: number) =>
  'ListBikers' + index

const HistoryScreen = () => {
  const dispatch = useDispatch()

  const [indexOfHistory, setIndexOfHistory] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const [numberOfRide, setNumberOfRide] = useState(0)

  const { history, historyRequested } = useSelector(
    (state: RootState) => state.history
  )

  const { fetchingHistory, errorFetchingHistory } = useSelector(
    (state: RootState) => state.history
  )

  const selectDate = (dateChoosen: string) => {
    const date = moment(dateChoosen).format('YYYY-MM-DD')
    const indexOfHistoryRequested = historyRequested.indexOf(date)
    if (indexOfHistoryRequested === -1) {
      dispatch(HistoryActions.getHistoryRequest(date))
    } else {
      setIndexOfHistory(indexOfHistoryRequested)
    }
  }

  const renderHistory = ({
    item,
    index
  }: ListRenderItemInfo<HistoryByDate>) => {
    return <RenderHistory item={item} key={index} index={index} />
  }

  const renderHeader = () => (
    <>
      <Revenue revenue={revenue} />
      <NumberOfRide numberOfRide={numberOfRide} />
    </>
  )

  const renderSeparator = () => <View style={styles.separator} />

  useEffect(() => {
    selectDate(moment().format())
  }, [])

  useEffect(() => {
    if (!fetchingHistory && !!errorFetchingHistory) {
      console.warn('ERROR HISTORY') // NOT HANDLE YET
    } else {
      setIndexOfHistory(history.length - 1)
    }
  }, [fetchingHistory, errorFetchingHistory])

  useEffect(() => {
    if (!isEmpty(history)) {
      const tempRevenue = history[indexOfHistory].reduce(
        (total, historyByDate) => {
          if (historyByDate.isRideCancelled) {
            return total
          } else {
            return total + historyByDate.price
          }
        },
        0
      )
      setRevenue(tempRevenue)
      setNumberOfRide(history[indexOfHistory].length)
    }
  }, [indexOfHistory])

  return (
    <>
      <Calendar scrollerPaging onDateSelected={selectDate} />
      <FlatList
        data={history[indexOfHistory]}
        renderItem={renderHistory}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
      />
      {fetchingHistory && <BActivityIndicator />}
    </>
  )
}

export default HistoryScreen
