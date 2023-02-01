import React from 'react'

// Components
import NamePhoneSignUp from './NamePhoneSignUp'
import NameSignUp from './NameSignUp'
import Gender from './Gender'
import BirthdaySignUp from './BirthdaySignUp'
import Address from './Address'

interface RenderPhaseModalProps {
  phase: number
  increasePhase?: () => void
  decreasePhase?: () => void
  handleSignUp?: () => void
}

const RenderPhase = ({ phase, ...childProps }: RenderPhaseModalProps) => {
  switch (phase) {
    case 0:
      return <NamePhoneSignUp {...childProps} />
    case 1:
      return <NameSignUp {...childProps} />
    case 2:
      return <BirthdaySignUp {...childProps} />
    case 3:
      return <Gender {...childProps} />
    case 4:
      return <Address {...childProps} />
    default:
      return <NamePhoneSignUp {...childProps} />
  }
}

export default RenderPhase
