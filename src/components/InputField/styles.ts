import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { dimens, fonts, colors, platform } from 'constant'

interface Styles {
  wrapper: ViewStyle
  inputContainer: ViewStyle
  input: ViewStyle
  prefix: TextStyle
  helper: ViewStyle
  info: TextStyle
}
const { isAndroid } = platform

const styles: Styles = StyleSheet.create<Styles>({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputContainer: {
    flexGrow: 1
  },
  input: {
    height: 40
  },
  prefix: {
    lineHeight: 56,
    height: 56,
    fontFamily: fonts.OpenSansRegular,
    fontWeight: '500',
    fontSize: dimens.fontSize.size_16,
    paddingTop: 4,
    paddingRight: 14
  },
  helper: {
    paddingLeft: 56
  },
  info: {
    color: colors.gunPowder,
    fontFamily: isAndroid ? fonts.OpenSansSemibold : fonts.OpenSansRegular,
    fontWeight: '600'
  }
})

export default styles
