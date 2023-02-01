import React, { useRef, useEffect } from 'react'
import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native'
import Config from 'react-native-config'
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef
} from 'react-native-google-places-autocomplete'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import MapActions from '@/Redux/MapRedux'
import PhaseActions from '@/Redux/PhaseRedux'
import { RootState } from '@/Types'

// Constants
import { PhaseBooking } from '@/Constants/PhaseReduxConstants'

// Styles
import styles from './Styles/SearchPlacesScreenStyles'
import { Metrics, Normalize } from '@/Themes'

// Language
import { translate } from '@/Language'

// Svgs
import Location from '@/Svgs/Icons/location.svg'
import Destination from '@/Svgs/Icons/destination.svg'
import LeftArrow from '@/Svgs/Icons/leftArrowBlack.svg'

const SearchPlacesScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { addressOriginalLocation, addressDestination } = useSelector(
    (state: RootState) => state.map.addressAndCoordinates.address
  )

  const refDestinationLocation = useRef<GooglePlacesAutocompleteRef>(null)
  const refOriginalLocation = useRef<GooglePlacesAutocompleteRef>(null)

  const navigateBack = () => navigation.goBack()

  const onPressYourOriginalLocation = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    if (details) {
      const lat = details.geometry.location.lat
      const lng = details.geometry.location.lng
      const address = data.description

      dispatch(MapActions.setOriginalLocation(lng, lat, address))
    }
  }

  const onPressYourDestination = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    if (details) {
      const lat = details.geometry.location.lat
      const lng = details.geometry.location.lng
      const address = data.description
      dispatch(PhaseActions.setPhase(PhaseBooking.CONFIRM_BOOK))
      dispatch(MapActions.setDestination(lng, lat, address))
      navigateBack()
    }
  }

  const renderLeftButtonYourLocaition = () => {
    return (
      <Location
        width={Normalize(20)}
        height={Normalize(20)}
        style={styles.image}
      />
    )
  }

  const renderLeftButtonDestination = () => {
    return (
      <Destination
        width={Normalize(20)}
        height={Normalize(20)}
        style={styles.image}
      />
    )
  }

  const renderRow = (data: GooglePlaceData, index: number) => {
    const { description, structured_formatting } = data
    const { main_text } = structured_formatting

    return (
      <View key={'resultRow' + index}>
        <Text style={styles.mainText}>{main_text}</Text>
        <Text numberOfLines={1}>{description}</Text>
      </View>
    )
  }

  useEffect(() => {
    addressOriginalLocation &&
      refOriginalLocation.current?.setAddressText(addressOriginalLocation)
    addressDestination &&
      refDestinationLocation.current?.setAddressText(addressDestination)
  }, [addressDestination, addressOriginalLocation])

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={navigateBack}>
          <LeftArrow
            width={Metrics.defaultImageWidth}
            height={Metrics.defaultImageHeight}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <GooglePlacesAutocomplete
          ref={refOriginalLocation}
          placeholder={translate('originalLocation')}
          fetchDetails={true}
          query={{
            key: Config.GOOGLE_MAPS_API_KEY,
            language: 'vi',
            components: 'country:vn'
          }}
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
            row: styles.row
          }}
          textInputProps={{
            selectTextOnFocus: true
          }}
          isRowScrollable={false}
          enablePoweredByContainer={false}
          onPress={onPressYourOriginalLocation}
          renderRow={renderRow}
          renderLeftButton={renderLeftButtonYourLocaition}
          debounce={2000}
        />
        <GooglePlacesAutocomplete
          ref={refDestinationLocation}
          placeholder={translate('whereTo')}
          fetchDetails={true}
          query={{
            key: Config.GOOGLE_MAPS_API_KEY,
            language: 'vi',
            components: 'country:vn'
          }}
          styles={{
            textInput: styles.textInput,
            container: styles.destinationContainer,
            separator: styles.separator,
            row: styles.row
          }}
          textInputProps={{
            selectTextOnFocus: true,
            returnKeyType: 'none'
          }}
          isRowScrollable={false}
          renderRow={renderRow}
          enablePoweredByContainer={false}
          onPress={onPressYourDestination}
          renderLeftButton={renderLeftButtonDestination}
          debounce={2000}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchPlacesScreen
