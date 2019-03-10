/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from '../../components';
import styles from './styles';
import iconError from '../../assets/images/common/error.png';

const Error = ({ retry }) => (
  <View style={[styles.container, { justifyContent: 'space-around' }]}>
    <Image resizeMode="cover" source={iconError} style={styles.image} />
    <Text style={styles.info} textBreakStrategy="balanced">
      Oops... An error occurred
    </Text>
    <Button text="RETRY" onPress={() => retry()} />
  </View>
);

export default Error;
