import React, { memo } from 'react'

import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps'

// Redux
import { useSelector } from 'react-redux'

// Components
import { Direction, ListMarkers } from './Components'

// Functions
import { getCoordinatesWithoutIndex } from '@/Functions/Selector/ReSelectorFunctions'

// Styles
import styles from './Styles/BMapStyles'

import CustomMapStyles from './Styles/CustomMapStyles'

type BMapProps = {
  indexToTracking?: number
}

const BMap = (props: BMapProps) => {
  const { indexToTracking } = props

  const coordinateWithoutIndex = useSelector(getCoordinatesWithoutIndex())
  const region: Region = {
    latitude: coordinateWithoutIndex[0].lat,
    longitude: coordinateWithoutIndex[0].lng,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02
  }

  return (
    <MapView
      ref={(mapRef) => (mapRef === null ? null : mapRef.fitToElements(true))}
      style={styles.map}
      initialRegion={region}
      mapPadding={styles.edgePadding}
      provider={PROVIDER_GOOGLE}
      customMapStyle={CustomMapStyles}
      maxZoomLevel={18}
    >
      <ListMarkers indexToTracking={indexToTracking} />
      <Direction indexToTracking={indexToTracking} />
    </MapView>
  )
}

export default memo(BMap)
