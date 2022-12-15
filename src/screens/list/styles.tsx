import { StyleSheet, ViewStyle, StyleProp, ImageStyle } from 'react-native'
import { colors, window } from 'constant'

const SCREEN_WIDTH = window.width < window.height ? window.width : window.height;
const recipeNumColums = 2;
const RECIPE_ITEM_MARGIN = 20;
const RECIPE_ITEM_HEIGHT = 150;

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
  photo: ImageStyle
  category: ViewStyle
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
    marginTop: 10,
    marginBottom: 5
  },
  title: {
    marginBottom: 0
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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
})

export default styles
