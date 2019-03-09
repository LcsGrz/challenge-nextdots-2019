/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import fonts from '../../../theme/fonts';
import Image from '../image-on-loading';
import { goToPage } from '../../../screens/index';
import { infoOpened } from '../../../store/actions/cocktails';

class CocktailCard extends React.Component {
  MostrarInfoCompleta = () => {
    const { CID, isInfoOpened, openInfo, coctail } = this.props;
    if (!isInfoOpened) {
      openInfo(coctail);
      goToPage(CID, 'CocktailDetail');
    }
  };

  render() {
    const { name, photo, ingredients } = this.props.coctail;
    //-------------------------------------------------------------------
    const ingredientesRestantes = ingredients.length - 2;
    let cIngredientes = null;
    if (ingredientesRestantes > 1) {
      cIngredientes = `And ${ingredientesRestantes} more ingredients...`;
    } else if (ingredientesRestantes === 1) {
      cIngredientes = `And ${ingredientesRestantes} more ingredient...`;
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
    isInfoOpened: state.cocktails.infoOpened,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openInfo: infoOpened,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CocktailCard)
);
