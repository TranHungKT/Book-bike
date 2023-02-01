import React, { memo } from 'react'
import { ViewStyle } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Components
import { BMarker, Direction } from './Components'

// Styles
import styles from './Styles/BMapStyles'
import { Metrics } from '@/Themes'
import CustomMapStyles from './Styles/CustomMapStyles'

// Svgs
import PlaceOrgin from '@/Svgs/Icons/location.svg'
import Destination from '@/Svgs/Icons/destination.svg'
import DeliveryMan from '@/Svgs/Icons/deliveryMan.svg'

type BMapProps = {
  wrapperStyle?: ViewStyle
  type: number // Type 0 is map without destination
}

const BMap = (props: BMapProps) => {
  const { wrapperStyle, type } = props

  const { destinationLat, destinationLng, originalLat, originalLng } =
    useSelector(
      (state: RootState) => state.ride.addressAndCoordinates.coordinates
    )

  const currentLocation = useSelector(
    (state: RootState) => state.socket.currentLocation
  )

  const region: Region = {
    latitude: currentLocation.lat,
    longitude: currentLocation.lng,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02
  }

  return (
    <MapView
      ref={(mapRef) => (mapRef === null ? null : mapRef.fitToElements(true))}
      style={[styles.map, wrapperStyle]}
      mapPadding={styles.edgePadding}
      initialRegion={region}
      provider={PROVIDER_GOOGLE}
      customMapStyle={CustomMapStyles}
      maxZoomLevel={18}
    >
      <BMarker
        id={'Marker1'}
        image={
          <DeliveryMan
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
          />
        }
        type={2}
      />
      {!!originalLat && !!originalLng && type !== 0 && (
        <BMarker
          id={'Marker2'}
          image={
            <PlaceOrgin
              width={Metrics.defaultImageWidth}
              height={Metrics.defaultImageHeight}
            />
          }
          type={0}
        />
      )}
      {!!destinationLat && !!destinationLng && type !== 0 && (
        <>
          <Direction />
          <BMarker
            id={'Marker3'}
            image={
              <Destination
                width={Metrics.defaultImageWidth}
                height={Metrics.defaultImageHeight}
              />
            }
            type={1}
          />
        </>
      )}
    </MapView>
  )
}

export default memo(BMap)
