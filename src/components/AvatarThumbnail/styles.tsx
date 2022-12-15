import { StyleSheet, ViewStyle } from 'react-native'
import { colors } from 'constant'

type Styles = {
  mainContainer: ViewStyle
  text: ViewStyle
  textContainer: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  mainContainer: {
    flex: 1
  },
  textContainer: {
    backgroundColor: colors.gray3,
    color: colors.paleBlue
  },
  text: {
    color: colors.gray2,
    fontWeight: '600'
  }
})

export default styles
