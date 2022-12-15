import { StyleSheet } from 'react-native';
import { colors } from 'constant'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  content: {
    alignItems: 'center',
    marginTop: 19,
    paddingBottom: 20
  },
  pokemonContainer: {
    height: 234,
    width: 291,
    marginTop: 14
  },
  pokemonImage: {
    marginTop: 0,
    height: 150,
    width: 220
  },
  displayNameText: {
    fontSize: 20,
    lineHeight: 19,
    color: colors.nevada
  },
  container: {
    flex: 1,
    backgroundColor: colors.athensGray,
    marginBottom: 20
  },
});

export default styles;
