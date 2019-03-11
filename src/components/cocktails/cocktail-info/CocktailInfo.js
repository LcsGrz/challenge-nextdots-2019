import React from 'react';
import { Text, View, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import Cocktail from '../../../entities/Cocktail';

const CocktailInfo = ({ cocktail }) => (
  <View style={[styles.shadow, styles.rounded, styles.component]}>
    <Image
      resizeMode="cover"
      source={{ uri: cocktail.photo }}
      style={[styles.image, styles.rounded]}
    />
    <View style={styles.container}>
      <Text style={styles.ingredient} textBreakStrategy="balanced">
        {cocktail.ingredientsToText()}
      </Text>
      <Text style={styles.ingredient} textBreakStrategy="balanced">
        {'• How to prepare'}
      </Text>
      <Text style={styles.ingredient} textBreakStrategy="balanced">
        {cocktail.instructions}
      </Text>
    </View>
  </View>
);

CocktailInfo.propTypes = {
  cocktail: PropTypes.instanceOf(Cocktail).isRequired,
};

export default CocktailInfo;
