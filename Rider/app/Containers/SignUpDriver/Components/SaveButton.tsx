import React, { memo } from 'react'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Components
import { BButton } from '@/Components'

// Style
import styles from './Styles/SaveButtonStyles'

// Language
import { translate } from '@/Language'

type SaveButtonProps = {
  onPressFunc: () => void
}

const SaveButton = (props: SaveButtonProps) => {
  const navigation = useNavigation()

  const navigateBack = () => navigation.goBack()

  const onPressButtonFunction = () => {
    props.onPressFunc()
    navigateBack()
  }

  return (
    <BButton
      content={translate('save')}
      buttonStyle={styles.buttonStyle}
      onPressButton={onPressButtonFunction}
    />
  )
}

export default memo(SaveButton)
