import React, { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useFormikContext } from 'formik'

// Styles
import styles from './Styles/BirthdaySignUpStyles'

// Language
import { translate } from '@/Language'
import { BBackButton, BNextButton } from '@/Components'

type BirthdaySignUp = {
  dateOfBirth: string
}

const BirthdaySignUp = ({ ...childProps }) => {
  const { increasePhase, decreasePhase } = childProps

  const [date, setDate] = useState(new Date())

  const { values, setFieldValue } = useFormikContext<BirthdaySignUp>()

  const navigateFunc = () => {
    increasePhase()
  }

  const onDateChange = (date: Date) => {
    setDate(date)
    setFieldValue('dateOfBirth', date.toISOString().substr(0, 10))
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.smallView}>
        <BBackButton backFunc={decreasePhase} imageStyle={styles.imageStyle} />
      </View>
      <View style={styles.birthday}>
        <Text style={styles.textBirthDay}>{translate('birthday')}</Text>
        <DatePicker
          date={date}
          mode={'date'}
          onDateChange={onDateChange}
          style={styles.datePickerView}
        />
      </View>
      <View style={styles.smallView}>
        <BNextButton
          wrapperStyle={styles.wrapperStyleNextButton}
          navigateFunc={navigateFunc}
          enable={!!values.dateOfBirth}
        />
      </View>
    </SafeAreaView>
  )
}

export default BirthdaySignUp
