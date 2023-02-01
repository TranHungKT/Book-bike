import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { AirbnbRating } from 'react-native-ratings'
import { Formik } from 'formik'

// Styles
import styles from './Styles/RateStarModalStyles'
import { Colors, Images } from '@/Themes'

// Language
import { translate } from '@/Language'
import { BButton } from '@/Components'
import { TextInput } from 'react-native-gesture-handler'

type RateStarModalProps = {
  isVisible: boolean
  toogleVisible: () => void
}

const RateStarModal = (props: RateStarModalProps) => {
  const { isVisible, toogleVisible } = props

  const ratingCompleted = () => {
    toogleVisible()
  }

  return (
    <Modal isVisible={isVisible} statusBarTranslucent>
      <View style={styles.mainContainer}>
        <Image source={Images.biker} style={styles.imageBiker} />
        <Text style={styles.rateStarText}>{translate('rateStar')}</Text>
        <AirbnbRating
          onFinishRating={ratingCompleted}
          selectedColor={Colors.summerSky}
          unSelectedColor={Colors.whisper}
          showRating={false}
          starStyle={styles.rating}
          defaultRating={0}
        />

        <Formik
          initialValues={{ feedBack: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, values }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={handleChange('feedBack')}
              value={values.feedBack}
              placeholder={translate('additionalInfor')}
              multiline={true}
            />
          )}
        </Formik>
        <BButton
          content={translate('submit')}
          buttonStyle={styles.buttonStyle}
        />
        <TouchableOpacity onPress={toogleVisible}>
          <Text style={styles.notNow}>{translate('notNow').toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default RateStarModal
