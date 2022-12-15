import { StyleSheet, ViewStyle, ImageStyle } from 'react-native'
import { colors } from 'constant'

interface Styles {
  container: ViewStyle
  textLogo: ViewStyle
  imgBackground: ImageStyle
  signInWithEmail: ViewStyle
  btnSignIn: ViewStyle
  txtInput: ViewStyle
  signUpNowContainer: ViewStyle
  lnkSignUpNow: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1
  },
  textLogo: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  imgBackground: {
    flex: 1
  },
  signInWithEmail: {
    marginLeft: 28,
    marginRight: 28
  },
  btnSignIn: {
    marginTop: 16,
    marginBottom: 16
  },
  txtInput: {
    marginTop: 4,
    marginBottom: 4
  },
  signUpNowContainer: {
    marginTop: 0,
    marginBottom: 0
  },
  lnkSignUpNow: {
    color: colors.matisse
  }
})

export default styles
