import React, { useRef } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useFormikContext } from 'formik'

// Components
import { BLabelTextInput } from '@/Components'

// Functions
import { refTextInputFocus } from '@/Functions/RefFunctions'

// Style
import styles from './Styles/RecipientStyles'

// Language
import { translate } from '@/Language'

type Recipient = {
  recipientName: string
  phoneNumber: string
  image: string
}

const Recipient = () => {
  const { values, errors, handleChange } = useFormikContext<Recipient>()

  const nameRef = useRef<TextInput>(null)
  const phoneNumberRef = useRef<TextInput>(null)

  const onNameSubmitEditing = () => refTextInputFocus(phoneNumberRef)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>{translate('recipientInfor')}</Text>

        <>
          <BLabelTextInput
            label={translate('recipientName')}
            value={values.recipientName}
            onChangeText={handleChange('recipientName')}
            ref={nameRef}
            errorMessage={errors.recipientName}
            onSubmitEditing={onNameSubmitEditing}
            wrapperStyle={styles.wrapperStyle}
            textInputStyle={styles.textInputStyle}
            returnKeyType={'next'}
          />
          <BLabelTextInput
            label={translate('phoneNumber')}
            value={values.phoneNumber}
            onChangeText={handleChange('phoneNumber')}
            ref={phoneNumberRef}
            errorMessage={errors.phoneNumber}
            wrapperStyle={styles.wrapperStyle}
            textInputStyle={styles.textInputStyle}
            returnKeyType={'next'}
            keyboardType={'phone-pad'}
          />
        </>
      </View>
    </>
  )
}

export default Recipient
