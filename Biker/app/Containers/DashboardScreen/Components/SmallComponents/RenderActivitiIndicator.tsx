import React from 'react'
import Modal from 'react-native-modal'

// Component
import { BActivityIndicator } from '@/Components'

// Styles
import styles from './Styles/RenderActivitiIndicatorStyles'

type RenderActivitiIndicatorProps = {
  title: string
}

const RenderActivitiIndicator = (props: RenderActivitiIndicatorProps) => {
  const { title } = props
  return (
    <Modal isVisible statusBarTranslucent style={styles.container}>
      <BActivityIndicator title={title} />
    </Modal>
  )
}

export default RenderActivitiIndicator
