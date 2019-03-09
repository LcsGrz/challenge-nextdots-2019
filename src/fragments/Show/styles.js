import { StyleSheet } from 'react-native';
import colors from '../../theme/Colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  buscador: {
    width: '80%',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: fonts.regular,
    color: 'white',
    marginLeft: 10,
  },
  containerBuscador: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#0000001f',
    padding: 4,
  },
  lupa: { height: 30, width: 30, marginRight: 10 },
  lista: { width: '100%', padding: 20 },
});
export default styles;
