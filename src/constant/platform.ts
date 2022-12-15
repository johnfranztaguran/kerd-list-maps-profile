import { Platform } from 'react-native'

const platform = {
  isIphone: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android'
}

export default platform
