import { RefObject } from 'react'
import { TextInput } from 'react-native'

export const refTextInputFocus = (ref: RefObject<TextInput>) => {
  ref.current && ref.current.focus()
}
