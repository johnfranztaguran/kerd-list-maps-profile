import { StyleSheet, ViewStyle } from 'react-native';
import { themes, colors } from 'constant';

type Styles = {
  block: ViewStyle;
  row: ViewStyle;
  column: ViewStyle;
  card: ViewStyle;
  center: ViewStyle;
  middle: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
  top: ViewStyle;
  bottom: ViewStyle;
  shadow: ViewStyle;
  primary: ViewStyle;
  secondary: ViewStyle;
  gray1: ViewStyle;
  gray2: ViewStyle;
  black: ViewStyle;
  white: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: 6,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 13,
    elevation: 2,
  },
  primary: { backgroundColor: themes.colors.primary },
  secondary: { backgroundColor: themes.colors.secondary },
  gray1: { backgroundColor: colors.gray1 },
  gray2: { backgroundColor: colors.gray2 },
  black: { backgroundColor: colors.black },
  white: { backgroundColor: colors.white },
});

export default styles;
