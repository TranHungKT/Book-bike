import React from 'react'
import Config from 'react-native-config'
import MapViewDirections from 'react-native-maps-directions'

// Redux
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/Types'

import { Colors } from '@/Themes'

const Direction = () => {
  const { originalLat, originalLng, destinationLat, destinationLng } =
    useSelector(
      (state: RootState) => state.ride.addressAndCoordinates.coordinates,
      shallowEqual
    )

  return (
    <>
      {!!destinationLng && !!destinationLat && (
        <MapViewDirections
          origin={{
            latitude: originalLat,
            longitude: originalLng
          }}
          destination={{
            latitude: destinationLat,
            longitude: destinationLng
          }}
          apikey={Config.GOOGLE_MAPS_API_KEY}
          strokeWidth={6}
          strokeColor={Colors.fruitSalad}
        />
      )}
    </>
  )
}

export default Direction
