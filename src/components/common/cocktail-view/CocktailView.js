/* eslint-disable */

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import fonts from '../../../theme/fonts';
import Image from '../image-on-loading';
import cc from './aasdd.jpg';
import { goToPage } from '../../../screens/index';

class CocktailView extends React.Component {
  MostrarInfoCompleta = () => {
    const { CID } = this.props;
    goToPage(CID, 'cocktailInfo', null);
  };

  render() {
    const { titulo, imagen, ingredientes } = this.props.coctail;
    //-------------------------------------------------------------------
    const ingredientesRestantes = ingredientes.length - 2;
    let cIngredientes = null;
    if (ingredientesRestantes > 1) {
      cIngredientes = `Y ${ingredientesRestantes} ingredientes mas...`;
    } else if (ingredientesRestantes === 1) {
      cIngredientes = `Y ${ingredientesRestantes} ingrediente mas...`;
    }
    //-------------------------------------------------------------------
    return (
      <TouchableOpacity
        onPress={this.MostrarInfoCompleta}
        style={[styles.sombra, styles.redondeado, styles.componente]}
      >
        <View style={styles.contenedor}>
          <Text style={[styles.titulo, { fontFamily: fonts.regular }]} textBreakStrategy="balanced">
            {titulo}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {`• ${ingredientes[0]}`}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {`• ${ingredientes[1]}`}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {cIngredientes}
          </Text>
        </View>
        <Image resizeMode="cover" source={cc} style={[styles.imagen, styles.redondeado]} />
      </TouchableOpacity>
    );
  }
}

export default CocktailView;
