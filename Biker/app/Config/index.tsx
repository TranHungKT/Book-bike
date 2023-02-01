import { Text, TextInput, LogBox } from 'react-native'

// Set defaultProps component react native
// @ts-ignore
Text.defaultProps = Text.defaultProps || {}
// @ts-ignore
Text.defaultProps.allowFontScaling = false
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false
// @ts-ignore
TextInput.defaultProps.underlineColorAndroid = 'rgba(0,0,0,0)'

LogBox.ignoreLogs([])

if (!__DEV__) {
  console.log = () => {}
  console.error = () => {}
}
