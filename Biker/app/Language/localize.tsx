import { I18nManager } from 'react-native'
import * as RNLocalize from 'react-native-localize'
import { memoize } from 'lodash'
import i18n from 'i18n-js'

// English language is the main language for fall back
const translationGetters = {
  en: () => require('./Languages/english.json'),
  vi: () => require('./Languages/vi.json')
}

export const translate = memoize(
  (key, config?) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
)

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false }
  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback

  // clear translation cache
  // @ts-ignore
  translate.cache.clear()

  // update layout direction
  I18nManager.forceRTL(isRTL)

  // set i18n-js config
  // @ts-ignore
  i18n.translations = { [languageTag]: translationGetters[languageTag]() }
  i18n.locale = languageTag
}
