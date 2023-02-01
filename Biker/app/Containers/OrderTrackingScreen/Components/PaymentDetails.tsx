import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import { PaymentDetails } from '@/Components'

// Functions
import { getPriceSelector } from '@/Functions/Selector/ReSelectorFunctions'

// Style
import { ElementSlideStyle } from '../Styles/OrderTrackingScreenStyles'

const Payment = () => {
  const price = useSelector(getPriceSelector)

  return (
    <PaymentDetails price={price} wrapperStyle={ElementSlideStyle.container} />
  )
}

export default Payment
