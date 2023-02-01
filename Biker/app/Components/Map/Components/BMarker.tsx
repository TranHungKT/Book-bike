import React, { useState, useRef } from 'react'
import { Marker } from 'react-native-maps'

// Styles
import { Metrics } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svgs
import PlaceOrgin from '@/Svgs/Icons/location.svg'
import Destination from '@/Svgs/Icons/destination.svg'
import DeliveryMan from '@/Svgs/Icons/deliveryMan.svg'

type NewMarkerProps = {
  lat: number
  lng: number
  type: number

  nameOfBiker?: string
}

const NewMarker = (props: NewMarkerProps) => {
  const { lat, lng, type, nameOfBiker } = props

  const [showCallOut, setShowCallOut] = useState(false)

  const refMarker = useRef<Marker>(null)

  const getImage = () => {
    switch (type) {
      case 0:
        return (
          <PlaceOrgin
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        )
      case 1:
        return (
          <Destination
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        )
      case 2:
      case 3:
        return (
          <DeliveryMan
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        )
      default:
        return (
          <PlaceOrgin
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        )
    }
  }

  const getDescription = () => {
    switch (type) {
      case 0:
        return translate('youAreHere')
      case 1:
        return translate('destinationIsHere')
      case 2:
        return translate('driverIsHere')
      case 3:
        return nameOfBiker
      default:
        return
    }
  }

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
    <>
      {lat !== 0 && lng !== 0 && (
        <Marker
          ref={refMarker}
          coordinate={{
            latitude: lat,
            longitude: lng
          }}
          onPress={onPressMarker}
          title={getDescription()}
        >
          {getImage()}
        </Marker>
      )}
    </>
  )
}

export default NewMarker
