import { useEffect } from 'react'
import { setI18nConfig, translate } from './localize'
import * as RNLocalize from 'react-native-localize'

const Language = () => {
  setI18nConfig()

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange)
    return () =>
      RNLocalize.removeEventListener('change', handleLocalizationChange)
  }, [])

  const handleLocalizationChange = () => {
    setI18nConfig()
  }

  return null
}

export { translate }

export default Language
