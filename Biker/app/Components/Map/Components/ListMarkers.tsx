import React from 'react'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/Types'

// Selector
import {
  getCoordinatesWithIndex,
  getCoordinatesWithoutIndex
} from '@/Functions/Selector/ReSelectorFunctions'

// Constants
import {
  PhaseBooking,
  PhaseBookingBeforeRide
} from '@/Constants/PhaseReduxConstants'

// Types
import BMarker from './BMarker'

type ListMarkersProps = {
  indexToTracking?: number
}

const ListMarkers = (props: ListMarkersProps) => {
  const { indexToTracking } = props

  const listBikers = useSelector(
    (state: RootState) => state.phase.resultFoundBikers.bikers
  )

  const phase = useSelector((state: RootState) => state.phase.phase)

  const makerDatasWithoutIndex = useSelector(getCoordinatesWithoutIndex())

  const makerDatasWithIndex = useSelector(
    getCoordinatesWithIndex(indexToTracking)
  )

  const renderListBiker = () =>
    listBikers.map((biker, index) => {
      const { userDetail, location } = biker
      const { lat, lng } = location
      const { firstName, lastName } = userDetail
      return (
        (phase === PhaseBookingBeforeRide.GET_BIKER ||
          phase === PhaseBookingBeforeRide.CHOOSE_BIKER) && (
          <BMarker
            lat={lat}
            lng={lng}
            type={3}
            key={index}
            nameOfBiker={firstName + ' ' + lastName}
          />
        )
      )
    })

  const renderListMaker = () =>
    indexToTracking
      ? makerDatasWithIndex?.map((maker, index) => (
          <BMarker {...maker} key={index} />
        ))
      : makerDatasWithoutIndex?.map((maker, index) => (
          <BMarker {...maker} key={index} />
        ))

  return (
    <>
      {renderListMaker()}
      {renderListBiker()}
    </>
  )
}

export default ListMarkers
