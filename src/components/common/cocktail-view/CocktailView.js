/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import fonts from '../../../theme/fonts';
import Image from '../image-on-loading';
import { goToPage } from '../../../screens/index';
import { infoAbierta } from '../../../actions/cocktails';

class CocktailView extends React.Component {
  MostrarInfoCompleta = () => {
    const { CID, infoAbiertaState, abrirInfo, coctail } = this.props;
    if (!infoAbiertaState) {
      abrirInfo(coctail);
      goToPage(CID, 'cocktailInfo');
    }
  };

  render() {
    const { Titulo, Imagen, Ingredientes } = this.props.coctail;
    //-------------------------------------------------------------------
    const ingredientesRestantes = Ingredientes.length - 2;
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
            {Titulo}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {`• ${Ingredientes[0]}`}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {`• ${Ingredientes[1]}`}
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
          source={{ uri: Imagen }}
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
  )(CocktailView)
);
