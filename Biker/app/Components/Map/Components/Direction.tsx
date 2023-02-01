import React from 'react'
import Config from 'react-native-config'
import MapViewDirections from 'react-native-maps-directions'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import MapActions from '@/Redux/MapRedux'
// Selector
import {
  getCoordinatesWithIndex,
  getCoordinatesWithoutIndex
} from '@/Functions/Selector/ReSelectorFunctions'

import { Colors } from '@/Themes'

type DirectionProps = {
  indexToTracking?: number
}

type coors = {
  originalLat: number | undefined
  originalLng: number | undefined
  destinationLat: number | undefined
  destinationLng: number | undefined
}

const Direction = (props: DirectionProps) => {
  const dispatch = useDispatch()
  const { indexToTracking } = props

  const makerDatasWithoutIndex = useSelector(getCoordinatesWithoutIndex())

  const makerDatasWithIndex = useSelector(
    getCoordinatesWithIndex(indexToTracking)
  )

  const getDatas = (): coors => {
    if (!!indexToTracking) {
      return {
        originalLat: makerDatasWithIndex && makerDatasWithIndex[0].lat,
        originalLng: makerDatasWithIndex && makerDatasWithIndex[0].lng,
        destinationLat: makerDatasWithIndex && makerDatasWithIndex[1].lat,
        destinationLng: makerDatasWithIndex && makerDatasWithIndex[1].lng
      }
    }
    return {
      originalLat: makerDatasWithoutIndex[0].lat,
      originalLng: makerDatasWithoutIndex[0].lng,
      destinationLat: makerDatasWithoutIndex[1].lat,
      destinationLng: makerDatasWithoutIndex[1].lng
    }
  }

  const getDistance = (data: any) =>
    dispatch(MapActions.getDistance(data.distance))

  const renderDirection = () => {
    const { originalLat, originalLng, destinationLng, destinationLat } =
      getDatas()

    return (
      <>
        {!!originalLat &&
          !!originalLng &&
          !!destinationLng &&
          !!destinationLat && (
            <MapViewDirections
              origin={{
                latitude: originalLat,
                longitude: originalLng
              }}
              destination={{
                latitude: destinationLat,
                longitude: destinationLng
              }}
              onReady={getDistance}
              apikey={Config.GOOGLE_MAPS_API_KEY}
              strokeWidth={6}
              strokeColor={Colors.fruitSalad}
            />
          )}
      </>
    )
  }

  return <>{renderDirection()}</>
}

export default Direction
