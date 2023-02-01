import React, { useState } from 'react'

// Components
import TakePicture from './Components/TakePicture'
import SaveButton from './Components/SaveButton'
import { translate } from '@/Language'

const ProfilePhotoScreen = () => {
  const [image, setImage] = useState('')

  const setImageFunction = (image: string) => setImage(image)

  return (
    <>
      <TakePicture
        title={translate('uploadProfile')}
        setImageFunction={setImageFunction}
      />
      <SaveButton onPressFunc={() => {}} />
    </>
  )
}

export default ProfilePhotoScreen
