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
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    height: '100%',
    width: '50%',
  },
  image: {
    height: '100%',
    width: '44%',
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 25,
    fontWeight: '500',
  },
  ingredient: {
    fontFamily: fonts.regular,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
