/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import fonts from '../../../theme/fonts';

class CocktailInfo extends React.Component {
  render() {
    const { cocktail } = this.props;
    const { photo, ingredients, instructions } = cocktail;
    //----------------------------------------------------------
    return (
      <View style={[styles.sombra, styles.redondeado, styles.componente]}>
        <Image
          resizeMode="cover"
          source={{ uri: photo }}
          style={[styles.imagen, styles.redondeado]}
        />
        <View style={styles.contenedor}>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {ingredients}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {'• How to prepare'}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {instructions}
          </Text>
        </View>
      </View>
    );
  }
}

export default CocktailInfo;
