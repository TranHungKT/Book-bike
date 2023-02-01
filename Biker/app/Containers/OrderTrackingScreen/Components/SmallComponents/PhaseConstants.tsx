import React from 'react'

import { Metrics } from '@/Themes'

import WaitConfirm from '@/Svgs/Icons/waitingConfirm.svg'
import Confirm from '@/Svgs/Icons/confirm.svg'
import Destination from '@/Svgs/Icons/destination.svg'
import Completed from '@/Svgs/Icons/completed.svg'
import Rejected from '@/Svgs/Icons/rejected.svg'
import BikerReceived from '@/Svgs/Icons/bikerReceived.svg'

export const PhaseWaiting: Phase = {
  image: (
    <WaitConfirm
      height={Metrics.defaultImageWidth}
      width={Metrics.defaultImageWidth}
    />
  ),
  title: 'orderSent'
}

export const PhaseConfirmRide: Phase = {
  image: (
    <Confirm
      height={Metrics.defaultImageWidth}
      width={Metrics.defaultImageWidth}
    />
  ),
  title: 'orderConfirm'
}

export const PhaseBikerWait: Phase = {
  image: (
    <Destination
      height={Metrics.defaultImageWidth}
      width={Metrics.defaultImageWidth}
    />
  ),
  title: 'bikerCame'
}

export const PhaseCompleteRide: Phase = {
  image: (
    <Completed
      height={Metrics.defaultImageWidth}
      width={Metrics.defaultImageWidth}
    />
  ),
  title: 'rideComplete'
}

export const PhaseReject: Phase = {
  image: (
    <Rejected
      height={Metrics.defaultImageWidth}
      width={Metrics.defaultImageWidth}
    />
  ),
  title: 'orderReject'
}

export const PhaseBikerReceivedPackage = {
  image: (
    <BikerReceived
      height={Metrics.defaultImageWidth}
      width={Metrics.defaultImageWidth}
    />
  ),
  title: 'bikerReceivedPackage'
}

export type Phase = {
  image: Element
  title: string
}

export type PhaseConstantsType = Phase[]
