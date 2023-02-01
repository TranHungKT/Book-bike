import React, { useState } from 'react'

// Components
import TakePicture from './Components/TakePicture'

// Language
import { translate } from '@/Language'
import SaveButton from './Components/SaveButton'

const BikePhotoScreen = () => {
  const [image, setImage] = useState('')

  const setImageFunction = (image: string) => setImage(image)
  return (
    <>
      <TakePicture
        title={translate('bikePicture')}
        setImageFunction={setImageFunction}
      />
      <SaveButton onPressFunc={() => {}} />
    </>
  )
}

export default BikePhotoScreen
