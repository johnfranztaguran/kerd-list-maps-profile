import { StyleSheet, ViewStyle } from 'react-native'
import { colors } from 'constant'

interface Styles {
  loader: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.solidWhite50
  }
})

export default styles
