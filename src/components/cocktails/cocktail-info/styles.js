import { StyleSheet } from 'react-native';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  rounded: {
    borderRadius: 4,
  },
  component: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  container: {
    width: '100%',
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 10,
  },
  ingredient: {
    fontFamily: fonts.regular,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
});

export default styles;
