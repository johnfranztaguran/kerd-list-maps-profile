import { StyleSheet, ViewStyle, Platform } from 'react-native'
import { dimens, colors } from 'constant'

interface Styles {
  container: ViewStyle
  header: ViewStyle
  headerContentContainer: ViewStyle
  headerTitleContainer: ViewStyle
  closeContainer: ViewStyle
  contentContainer: ViewStyle
  mainContentContainer: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  header: {
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadowBlack,
        shadowOffset: dimens.shadowOffset,
        shadowRadius: 5
      }
    })
  },
  headerContentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 12,
    paddingHorizontal: 16
  },
  headerTitleContainer: {
    flex: 1
  },
  contentContainer: {
    flex: 1
  },
  mainContentContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  closeContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 0
  }
})

export default styles
