import { StyleSheet, TextStyle } from 'react-native';
import { themes, dimens, colors, fonts } from 'constant';

type Styles = {
  text: TextStyle;
  regular: TextStyle;
  bold: TextStyle;
  semibold: TextStyle;
  medium: TextStyle;
  light: TextStyle;
  center: TextStyle;
  right: TextStyle;
  primary: TextStyle;
  secondary: TextStyle;
  gray1: TextStyle;
  gray2: TextStyle;
  black: TextStyle;
  white: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  body: TextStyle;
  subtitle: TextStyle;
  caption: TextStyle;
  label: TextStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  // default style
  text: {
    fontSize: dimens.fontSize.size_12,
    color: colors.black,
  },
  // variations
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  semibold: {
    fontWeight: '500',
  },
  medium: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '200',
  },
  // position
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  // colors
  primary: { color: themes.colors.primary },
  secondary: { color: themes.colors.secondary },
  gray1: { color: colors.gray1 },
  gray2: { color: colors.gray2 },
  black: { color: colors.black },
  white: { color: colors.white },
  // fonts
  h1: {
    fontSize: themes.fonts.h1,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 28,
  },
  h2: {
    fontSize: themes.fonts.h2,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 26,
  },
  h3: {
    fontSize: themes.fonts.h3,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 23,
  },
  h4: {
    fontSize: themes.fonts.h4,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 21,
  },
  h5: {
    fontSize: themes.fonts.h5,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 19,
  },
  body: {
    fontSize: themes.fonts.body,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 16,
  },
  subtitle: {
    fontSize: themes.fonts.subtitle,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 14,
  },
  caption: {
    fontSize: themes.fonts.caption,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 12,
  },
  label: {
    fontSize: themes.fonts.label,
    fontFamily: fonts.OpenSansRegular,
    lineHeight: 9,
  },
});

export default styles;
