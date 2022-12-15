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
  }
})

export default styles
