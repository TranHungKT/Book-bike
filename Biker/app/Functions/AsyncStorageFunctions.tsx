// Async store
import AsyncStorage from '@react-native-async-storage/async-storage'

const setAsyncStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log('Set async storage error', error)
  }
}

const getAsyncStorage = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    console.log('Get async storage error', error)
  }
}

const removeAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log('Remove async storage error', error)
  }
}

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.log('Clear async storage error', error)
  }
}

export {
  setAsyncStorage,
  getAsyncStorage,
  removeAsyncStorage,
  clearAsyncStorage
}
