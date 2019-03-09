import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from '../../components';
import styles from './styles';
import iconError from '../../assets/images/common/error.png';

const Error = retry => (
  <View style={[styles.container, { justifyContent: 'space-around' }]}>
    <Image resizeMode="cover" source={iconError} style={styles.imagen} />
    <Text style={styles.info} textBreakStrategy="balanced">
      Se a producido un error
    </Text>
    <Button text="REINTENTAR" onPress={() => retry()} />
  </View>
);

export default Error;
