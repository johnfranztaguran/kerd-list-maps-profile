import { StyleSheet, ViewStyle } from 'react-native'

type Styles = {
  mainContainer: ViewStyle
  navigationContainer: ViewStyle
  mainHeaderContent: ViewStyle
  headerLeft: ViewStyle
  headerRight: ViewStyle
  backButtonWrapper: ViewStyle
  backButton: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  mainContainer: {},
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    height: 50,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    marginTop: 8
  },
  mainHeaderContent: {
    flex: 1,
    marginHorizontal: 50,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerLeft: {
    position: 'absolute',
    left: 0
  },
  headerRight: {
    position: 'absolute',
    right: 0
  },
  backButtonWrapper: {
    marginTop: 24,
    marginRight: 24,
    marginBottom: 24
  },
  backButton: {
    alignItems: 'flex-start',
    margin: 0
  }
})

export default styles
