import { store } from '@/Containers/App'

// Redux
import RideInforActions from '@/Redux/RideInforRedux'
import PackageInforActions from '@/Redux/PackageInfor'

// Type
import { PackageInfor } from '@/Types'
import {
  PhaseBookingAfterRide,
  PhaseBookingInRide
} from '@/Constants/PhaseReduxConstants'

export const emitEvent = (
  type: number,
  index: number | undefined,
  phase: string
) => {
  const state: any = store.getState()
  if (type === 0) {
    if (
      state.rideInfor.phaseBooking ===
        PhaseBookingAfterRide.RIDE_COMPLETE_EVENT &&
      phase === PhaseBookingInRide.BIKER_WAITING
    ) {
      return
    }
    store.dispatch(RideInforActions.setPhaseRide(phase, Date.now()))
  } else {
    if (
      state.rideInfor.phaseBooking ===
        PhaseBookingAfterRide.RIDE_COMPLETE_EVENT &&
      phase === PhaseBookingInRide.BIKER_WAITING
    ) {
      return
    }
    store.dispatch(
      PackageInforActions.setPhasePackage(phase, index, Date.now())
    )
  }
}

export type IndexPhaseType = {
  type: number
  index: number | undefined
}

export const getRideData = (rideHash: string): IndexPhaseType => {
  const state: any = store.getState()
  if (rideHash === state.rideInfor.rideHash) {
    return {
      type: 0,
      index: 0
    }
  } else {
    let indexAndType: IndexPhaseType = {
      type: 1,
      index: undefined
    }
    state.package.package.map((packageInfor: PackageInfor, index: number) => {
      if (packageInfor.rideHash === rideHash) {
        indexAndType = {
          type: 1,
          index
        }
      }
    })
    return indexAndType
  }
}
