import { StyleSheet, ViewStyle } from 'react-native'

interface Styles {
  selectionBottomListHeaderWrapper: ViewStyle
  selectionListOptionWrapper: ViewStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  selectionBottomListHeaderWrapper: {
    zIndex: 2,
    overflow: 'visible'
  },
  selectionListOptionWrapper: {
    padding: 2
  }
})

export default styles
