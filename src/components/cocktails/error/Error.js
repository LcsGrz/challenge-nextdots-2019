import React from 'react';
import { View, Image, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { Button } from '../../index';
import styles from './styles';
import iconError from '../../../assets/images/common/error.png';

const Error = ({ retry, errorMSG }) => (
  <View style={[styles.container, { justifyContent: 'space-around' }]}>
    <Image resizeMode="cover" source={iconError} style={styles.image} />
    <Text style={styles.info} textBreakStrategy="balanced">
      Oops... An error occurred
    </Text>
    <Text style={styles.info} textBreakStrategy="balanced">
      {errorMSG}
    </Text>
    <Button text="RETRY" onPress={() => retry()} />
  </View>
);

Error.propTypes = {
  errorMSG: PropTypes.string.isRequired,
  retry: PropTypes.func,
};

Error.defaultProps = {
  retry: () => {},
};

export default Error;
