import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native'
import { fonts, dimens, colors } from 'constant'

type Styles = {
  buttonLabel: TextStyle
  buttonBorder: TextStyle
  buttonIconContent: ViewStyle
  buttonIconSize: ImageStyle
  buttonIconLabel: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  buttonLabel: {
    /* 14 sp • BUTTON */
    fontFamily: fonts.OpenSansRegular,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: dimens.fontSize.size_14,
    lineHeight: 19,
    marginTop: 12,
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.25,
    textTransform: 'capitalize'
  },
  buttonBorder: {
    borderRadius: 4
  },
  buttonIconContent: {
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.pigeonPost
  },
  buttonIconSize: {
    width: 14,
    height: 14
  },
  buttonIconLabel: {
    marginStart: 14,
    marginEnd: 0
  }
})

export default styles
