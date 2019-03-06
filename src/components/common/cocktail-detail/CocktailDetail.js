/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import fonts from '../../../theme/fonts';

class CocktailDetail extends React.Component {
  render() {
    const { cocktail } = this.props;
    const { Imagen, Ingredientes, Cantidades, Preparacion } = cocktail;
    //----------------------------------------------------------
    let ingCant = [];
    for (let c = 0; c < Ingredientes.length; c++) {
      ingCant.push(`${Ingredientes[c]}\n`);
      ingCant.push(`${Cantidades[c]}\n`);
    }
    //----------------------------------------------------------
    return (
      <View style={[styles.sombra, styles.redondeado, styles.componente]}>
        <Image
          resizeMode="cover"
          source={{ uri: Imagen }}
          style={[styles.imagen, styles.redondeado]}
        />
        <View style={styles.contenedor}>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {ingCant}
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
            {Preparacion}
          </Text>
        </View>
      </View>
    );
  }
}

export default CocktailDetail;
