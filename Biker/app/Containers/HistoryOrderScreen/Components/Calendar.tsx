import React, { memo } from 'react'
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'

// Styles
import styles from './Styles/CalendarStyles'
import { Colors } from '@/Themes'

const Calendar = ({ ...props }) => {
  return (
    <CalendarStrip
      scrollable
      calendarAnimation={{ type: 'sequence', duration: 500 }}
      style={styles.calendar}
      calendarHeaderStyle={styles.calendarHeaderStyle}
      calendarColor={Colors.whisper}
      dateNumberStyle={styles.dateNumberStyle}
      dateNameStyle={styles.dateNameStyle}
      iconContainer={styles.iconContainer}
      highlightDateNameStyle={styles.highlightDateNameStyle}
      highlightDateNumberStyle={styles.highlightDateNumberStyle}
      highlightDateContainerStyle={styles.highlightDateContainerStyle}
      maxDate={moment()}
      minDate={moment().subtract(120, 'days')}
      {...props}
    />
  )
}

export default memo(Calendar)
