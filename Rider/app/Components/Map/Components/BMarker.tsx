import React, { memo, useRef, useState } from 'react'
import { Marker } from 'react-native-maps'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'
import { translate } from '@/Language'

type BMarkerProps = {
  image: Element
  type: number // 0 is original, 1 is destination
  id: string
}

const BMarker = (props: BMarkerProps) => {
  const [showCallOut, setShowCallOut] = useState(false)

  const { image, type, id } = props

  const latitude = useSelector((state: RootState) => {
    switch (type) {
      case 0:
        return state.ride.addressAndCoordinates.coordinates.originalLat
      case 1:
        return state.ride.addressAndCoordinates.coordinates.destinationLat
      case 2:
      default:
        return state.socket.currentLocation.lat
    }
  })

  const longitude = useSelector((state: RootState) => {
    switch (type) {
      case 0:
        return state.ride.addressAndCoordinates.coordinates.originalLng
      case 1:
        return state.ride.addressAndCoordinates.coordinates.destinationLng
      case 2:
      default:
        return state.socket.currentLocation.lng
    }
  })

  const getDescription = () => {
    switch (type) {
      case 0:
        return translate('customeriIsHere')
      case 1:
        return translate('destinationIsHere')
      case 2:
      default:
        return translate('youAreHere')
    }
  }

  const refMarker = useRef<Marker>(null)

  const onPressMarker = () => {
    if (showCallOut) {
      setShowCallOut(false)
      refMarker.current?.hideCallout()
    } else {
      setShowCallOut(true)
      refMarker.current?.showCallout()
    }
  }

  return (
    <Marker
      identifier={id}
      ref={refMarker}
      coordinate={{
        latitude: latitude,
        longitude: longitude
      }}
      title={getDescription()}
      onPress={onPressMarker}
    >
      {image}
    </Marker>
  )
}

export default memo(BMarker)
