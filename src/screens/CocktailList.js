/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import colors from '../theme/Colors';
import { CocktailView, Button } from '../components';
import fonts from '../theme/fonts';
import iconLupa from '../assets/images/common/lupa.png';
import iconError from '../assets/images/common/error.png';
import { buscarCocktails } from '../actions/cocktails';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  lista: { width: '100%', padding: 20 },
  buscador: {
    width: '80%',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: fonts.regular,
    color: 'white',
    marginLeft: 10,
  },
  containerBuscador: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#0000001f',
    padding: 4,
  },
  lupa: { height: 30, width: 30, marginRight: 10 },
  info: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
  },
  imagen: { width: 300, height: 300 },
});

class CocktailList extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  state = {
    cocktailsFiltrados: [],
    seteados: false,
  };

  componentDidMount() {
    const { cocktails, obtenerCocktails } = this.props;
    //---------------------------------------
    if (!cocktails.cocktailsObtenidos) obtenerCocktails();
  }

  entradaTextoHandler = texto => {
    const { cocktails } = this.props;
    //---------------------------------------
    if (texto.length === 0) {
      this.setState({ cocktailsFiltrados: cocktails.listaCocktails, seteados: true });
    } else {
      let cocktailsFiltrados = cocktails.listaCocktails.filter(item => {
        const nombre = item.titulo.toUpperCase();
        return nombre.indexOf(texto.toUpperCase()) > -1;
      });

      this.setState({ cocktailsFiltrados });
    }
  };

  render() {
    const { componentId, cocktails, obtenerCocktails } = this.props;
    let { cocktailsFiltrados, seteados } = this.state;
    //---------------------------------------------------------------------------------------
    let vistaContenido = (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
        <Text style={[styles.info, { fontFamily: fonts.regular }]} textBreakStrategy="balanced">
          Buscando cocktails...
        </Text>
      </View>
    );

    if (cocktails.cocktailsError) {
      vistaContenido = (
        <View style={[styles.container, { justifyContent: 'space-around' }]}>
          <Image resizeMode="cover" source={iconError} style={styles.imagen} />
          <Text style={[styles.info, { fontFamily: fonts.regular }]} textBreakStrategy="balanced">
            Se a producido un error
          </Text>
          <Button text="REINTENTAR" onPress={() => obtenerCocktails} />
        </View>
      );
    } else if (cocktails.cocktailsObtenidos) {
      if (!seteados)
        this.setState({ cocktailsFiltrados: cocktails.listaCocktails, seteados: true });
      //---------------------------------------
      vistaContenido = (
        <View style={styles.container}>
          <View style={styles.containerBuscador}>
            <TextInput
              placeholder="Buscar Cocktail"
              style={styles.buscador}
              onChangeText={text => this.entradaTextoHandler(text)}
            />
            <Image resizeMode="cover" source={iconLupa} style={styles.lupa} />
          </View>
          <FlatList
            style={styles.lista}
            showsVerticalScrollIndicator={false}
            data={cocktailsFiltrados}
            renderItem={info => <CocktailView coctail={info.item} CID={componentId} />}
          />
        </View>
      );
    }
    //---------------------------------------------------------------------------------------
    return <View style={{ flex: 1 }}>{vistaContenido}</View>;
  }
}

const mapStateToProps = state => {
  return {
    cocktails: state.cocktails,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      obtenerCocktails: buscarCocktails,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CocktailList)
);
