import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import moment from 'moment'
import { BarChart, XAxis, AccessorFunction } from 'react-native-svg-charts'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import HistoryActions from '@/Redux/HistoryRedux'

// Components
import { Calendar, Revenue } from './Components'
import { BActivityIndicator } from '@/Components'

// Functions
import { isEmpty } from '@/Functions/ValidateFunctions'

// Types
import { RootState, ReportHistory } from '@/Types'

// Styles
import styles from './Styles/FromToHistoryStyles'
import { Colors } from '@/Themes'

const WeeklyHistory = () => {
  const dispatch = useDispatch()

  const { fetchingReport, errorFetchingReport, report } = useSelector(
    (state: RootState) => state.history
  )

  const [revenue, setRevenue] = useState(0)

  const [fromToDate, setFromToDate] = useState<string[]>([])

  const selectDate = (dateChoosen: string) => {
    const newDate = moment(dateChoosen).format('YYYY-MM-DD')
    if (fromToDate.length !== 1) {
      // IF THERE IS 0 OR MORE THAN 1 ELEMENT IN ARRAY, RESET ARRAY WITH ONE NEW ELEMENT
      setFromToDate([newDate])
    } else {
      setFromToDate([...fromToDate, newDate].sort())
    }
  }

  const customDatesStyles = [
    {
      startDate: fromToDate[0],
      endDate: fromToDate[1],
      dateNameStyle: styles.dateNameStyle,
      dateNumberStyle: styles.dateNumberStyle,
      dateContainerStyle: styles.dateContainerStyle
    }
  ]

  const renderYAccessor: AccessorFunction<ReportHistory, number> = ({ item }) =>
    item.amount
  const renderLabel = (index: number) => {
    const arrayLength = report.length

    let keySeperator = Math.ceil(arrayLength / 8)

    if (arrayLength < 8) {
      return report[index].date
    }
    if (index % keySeperator === 0 && index < report.length - keySeperator) {
      return report[index + keySeperator - 1].date
    }
    if (index === arrayLength - 1) {
      return report[arrayLength - 1].date
    }
    return ''
  }
  useEffect(() => {
    const arrayLength = fromToDate.length
    if (arrayLength === 2) {
      dispatch(HistoryActions.getReportRequest(fromToDate[0], fromToDate[1]))
    }
  }, [fromToDate])

  useEffect(() => {
    if (!fetchingReport) {
      if (errorFetchingReport) {
        console.warn('ERROR REPORT') // NOT HANDLE YET
        return
      }

      const tempRevenue = report.reduce(
        (total, history) => total + history.amount,
        0
      )
      setRevenue(tempRevenue)
    }
  }, [errorFetchingReport, fetchingReport])

  useEffect(() => {
    setTimeout(
      () =>
        dispatch(
          HistoryActions.getReportRequest(
            moment().subtract(7, 'days').format('YYYY-MM-DD'),
            moment().format('YYYY-MM-DD')
          )
        ),
      1000
    )
  }, [])

  return (
    <>
      <Calendar
        onDateSelected={selectDate}
        customDatesStyles={customDatesStyles}
        selectedDate={fromToDate[fromToDate.length - 1]}
        scrollerPaging
      />
      {!isEmpty(report) && (
        <>
          <Text style={styles.fromToText}>
            {report[0].date} --{'>'} {report[report.length - 1].date}
          </Text>
          <BarChart
            data={report}
            style={styles.barChart}
            svg={{ fill: Colors.royalBlue }}
            contentInset={styles.contentInset}
            yAccessor={renderYAccessor}
            animate
            animationDuration={500}
          />
          <XAxis
            style={styles.xAxis}
            data={report}
            formatLabel={renderLabel}
            contentInset={styles.contentInsetXAxis}
            svg={{ fill: Colors.black, fontWeight: 'bold' }}
          />
        </>
      )}
      <Revenue revenue={revenue} wrapperStyle={styles.wrapperStyle} />
      {fetchingReport && !isEmpty(report) && <BActivityIndicator />}
    </>
  )
}

export default WeeklyHistory
