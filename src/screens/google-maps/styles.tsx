import { StyleSheet, ViewStyle, Dimensions, Platform } from 'react-native'
import { colors } from 'constant'

const { width } = Dimensions.get('window');

type Styles = {
  mainContainer: ViewStyle
  simpleAppContainer: ViewStyle
  quickAccessContainer: ViewStyle
  quickAccessText: ViewStyle
  quickAccessButtons: ViewStyle
  panelBox: ViewStyle
  title: ViewStyle,
  avatar: ViewStyle
  containerMap: ViewStyle,
  styleMap: ViewStyle
  markerListStyle: ViewStyle
  markerShowButton: ViewStyle
  markerModalText: ViewStyle
  emptySpace: ViewStyle
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
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    // height: 600,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 45,
  },
  styleMap: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  markerListStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10
  },
  markerShowButton: {
    width: 200,
    height: 44,
    borderRadius: 22,
    position: 'absolute',
    top: 100,
    left: width / 2 - 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? 3 : 0
  },
  markerModalText: {
    flex: 3,
    color: '#000',
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'OpenSans',
    textAlign: 'center'
  },
  emptySpace: {
    flex: 1
  }
})

export default styles
