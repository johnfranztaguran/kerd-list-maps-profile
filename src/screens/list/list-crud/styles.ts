import { StyleSheet, ViewStyle } from 'react-native'
import { colors } from 'constant'

interface Styles {
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
    marginBottom: 0,
    marginTop: 0,
    marginHorizontal: 10
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
