import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from 'constant';
import textStyle from '../Text/styles';

interface Styles {
  textInput: ViewStyle;
  infoContainer: TextStyle;
  rightContainer: ViewStyle;
  highlighted: ViewStyle;
  view: ViewStyle;
  info: ViewStyle;
  text: ViewStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  textInput: {
    height: 40,
  },
  infoContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  rightContainer: {
    position: 'absolute',
    top: 40,
    right: 10,
    zIndex: 1,
    marginRight: 16,
  },
  highlighted: {
    color: colors.java,
    textDecorationLine: 'underline',
  },
  view: {
    marginTop: -8,
    marginBottom: -10,
  },
  info: {
    ...textStyle.caption,
    marginTop: 10,
  },
  text: {
    ...textStyle.caption,
    color: colors.cinnabar,
  },
});

export default styles;
