import { StyleSheet } from 'react-native';
import colors from '../../../theme/Colors';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  info: { fontFamily: fonts.regular, fontSize: 25, fontWeight: '500', color: 'white' },
});
export default styles;
