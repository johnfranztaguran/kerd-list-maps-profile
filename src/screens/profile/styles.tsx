import { StyleSheet, ViewStyle } from 'react-native'
import { colors } from 'constant'

type Styles = {
  mainContainer: ViewStyle
  simpleAppContainer: ViewStyle
  quickAccessContainer: ViewStyle
  quickAccessText: ViewStyle
  quickAccessButtons: ViewStyle
  panelBox: ViewStyle
  title: ViewStyle,
  avatar: ViewStyle

  container: ViewStyle
  stepperContainer: ViewStyle
  stepperText: ViewStyle
  h4: ViewStyle
  footerContainer: ViewStyle
  btnFooter: ViewStyle
  bodyContainer: ViewStyle
  txtInput: ViewStyle
  paddingTop16: ViewStyle
  paddingTopBottom16: ViewStyle
  paddingTopBottom8: ViewStyle
  paddingTopBottom424: ViewStyle
  paddingTopBottom48: ViewStyle
  CompleteRegisterBackground: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  mainContainer: {
    backgroundColor: colors.paleBlue
  },
  simpleAppContainer: {
    flex: 1,
    padding: 16
  },
  quickAccessContainer: {
    borderWidth: 1,
    borderColor: colors.gray3,
    padding: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white
  },
  quickAccessText: {
    marginBottom: 16
  },
  quickAccessButtons: {
    marginRight: 8
  },
  panelBox: {
    backgroundColor: colors.white,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 6,
    marginTop: 24
  },
  title: {
    marginBottom: 6
  },
  avatar: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    width: 38,
    height: 38,
    padding: 2
  },

  container: {
    flex: 1,
    backgroundColor: colors.paleBlue,
    justifyContent: 'flex-start'
  },
  stepperContainer: {
    padding: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray3,
    height: 78,
    justifyContent: 'flex-start'
  },
  stepperText: {
    color: colors.gray2
  },
  h4: {
    marginTop: 6,
    color: colors.gray1
  },
  bodyContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    marginBottom: 24
  },
  footerContainer: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.gray3
  },
  btnFooter: {
    margin: 16
  },
  txtInput: {
    marginTop: 4,
    marginBottom: 4
  },
  CompleteRegisterBackground: {
    height: 200,
    width: 200
  },
  paddingTop16: {
    paddingTop: 16
  },
  paddingTopBottom16: {
    paddingTop: 16,
    paddingBottom: 16
  },
  paddingTopBottom8: {
    paddingTop: 8,
    paddingBottom: 8
  },
  paddingTopBottom424: {
    paddingTop: 4,
    paddingBottom: 24
  },
  paddingTopBottom48: {
    paddingTop: 4,
    paddingBottom: 8
  }
})

export default styles
