/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import fonts from '../../../theme/fonts';
import Image from '../image-on-loading';
import { goToPage } from '../../../screens/index';
import { infoAbierta } from '../../../store/actions/cocktails';

class CocktailCard extends React.Component {
  MostrarInfoCompleta = () => {
    const { CID, infoAbiertaState, abrirInfo, coctail } = this.props;
    if (!infoAbiertaState) {
      abrirInfo(coctail);
      goToPage(CID, 'CocktailDetail');
    }
  };

  render() {
    const { name, photo, ingredients } = this.props.coctail;
    //-------------------------------------------------------------------
    const ingredientesRestantes = ingredients.length - 2;
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
            {name}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {`• ${ingredients[0].ingredient}`}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {`• ${ingredients[1].ingredient}`}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {cIngredientes}
          </Text>
        </View>
        <Image
          resizeMode="cover"
          source={{ uri: photo }}
          style={[styles.imagen, styles.redondeado]}
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    infoAbiertaState: state.cocktails.infoAbierta,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      abrirInfo: infoAbierta,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CocktailCard)
);
