import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Styles {
  listIcon: ViewStyle
  inputFieldStyle: TextStyle
  optionContainer: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  listIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0
  },
  inputFieldStyle: {
    fontSize: 16,
    lineHeight: 24
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8
  }
})

export default styles
