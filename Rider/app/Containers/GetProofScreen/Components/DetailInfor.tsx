import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/DetailInforStyles'

// Lânguage
import { translate } from '@/Language'

type DetailInforProps = {
  title: string
  content?: number | string
  isCategory?: boolean
}

const DetailInfor = (props: DetailInforProps) => {
  const { title, content, isCategory } = props

  const renderCategory = (content: any) => {
    switch (content) {
      case 1:
        return translate('food')
      case 2:
        return translate('clothing')
      case 3:
        return translate('eletronics')
      case 4:
        return translate('fragile')
      case 5:
        return translate('other')
      default:
        return
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text>{'\u2B24'}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      {isCategory ? (
        <Text style={styles.content}>{renderCategory(content)}</Text>
      ) : (
        <Text style={styles.content}>{content}</Text>
      )}
    </View>
  )
}

export default DetailInfor
