import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

const Finding = (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="white" />
    <Text style={styles.info} textBreakStrategy="balanced">
      Buscando cocktails...
    </Text>
  </View>
);

export default Finding;
