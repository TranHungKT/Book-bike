import React, { memo } from 'react'
import { View, FlatList, ListRenderItemInfo } from 'react-native'

// Components

import InforRider from './InforRider'
import InforBike from './InforBike'
import Price from './Price'

// Types
import { PayloadFoundBikers } from '@/Types'

// Styles
import styles from './Styles/RenderListBikersStyles'

type RenderListBikersProps = {
  payloadFoundBikers: PayloadFoundBikers[]
}

const keyExtractor = (item: PayloadFoundBikers) =>
  'ListBikers' + item.userDetail.firstName

const RenderListBikers = (props: RenderListBikersProps) => {
  const { payloadFoundBikers } = props

  const renderListBikers = ({
    item,
    index
  }: ListRenderItemInfo<PayloadFoundBikers>) => {
    return (
      <View
        style={styles.container}
        key={'ListBikers' + item.userDetail.firstName + index}
      >
        <InforRider index={index} wrapperStyle={styles.wrapperStyle} />
        <Price index={index} />
        <InforBike index={index} />
      </View>
    )
  }

  return (
    <>
      {payloadFoundBikers[0].phone !== '' && (
        <FlatList
          data={payloadFoundBikers}
          renderItem={renderListBikers}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  )
}

export default memo(RenderListBikers)
