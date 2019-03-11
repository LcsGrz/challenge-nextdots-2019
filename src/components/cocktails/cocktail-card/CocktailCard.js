import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import Image from '../../index';
import Cocktail from '../../../entities/Cocktail';

const CocktailCard = ({ cocktail, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(cocktail)}
    style={[styles.shadow, styles.rounded, styles.component]}
  >
    <View style={styles.container}>
      <Text style={styles.title} textBreakStrategy="balanced">
        {cocktail.name}
      </Text>
      <Text style={styles.ingredient} textBreakStrategy="balanced">
        {`• ${cocktail.ingredients[0].ingredient}`}
      </Text>
      <Text style={styles.ingredient} textBreakStrategy="balanced">
        {`• ${cocktail.ingredients[1].ingredient}`}
      </Text>
      <Text style={styles.ingredient} textBreakStrategy="balanced">
        {cocktail.remainingIngredients()}
      </Text>
    </View>
    <Image
      resizeMode="cover"
      source={{ uri: cocktail.photo }}
      style={[styles.image, styles.rounded]}
    />
  </TouchableOpacity>
);

CocktailCard.propTypes = {
  cocktail: PropTypes.instanceOf(Cocktail).isRequired,
  onPress: PropTypes.func,
};

CocktailCard.defaultProps = {
  onPress: () => {},
};

export default CocktailCard;
