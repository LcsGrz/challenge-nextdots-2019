/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import Image from '../image-on-loading';

class CocktailCard extends React.Component {
  render() {
    const { cocktail, onPress } = this.props;
    return (
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
  }
}
export default CocktailCard;
