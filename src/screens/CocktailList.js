/* eslint-disable */
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
import colors from '../theme/Colors';
import { CocktailView } from '../components';
import fonts from '../theme/fonts';
import iconLupa from '../assets/images/common/lupa.png';
import iconError from '../assets/images/common/error.png';
import NextDotsLogo from '../assets/images/common/nextDotsLogo.png';
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
  imagen: { height: '30%', width: '30%' },
});

class CocktailList extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  state = {
    cocktailsFiltrados: [],
  };

  componentDidMount() {
    if (!this.props.cocktailsObtenidos) obtenerCocktails();
    else this.setState({ cocktailsFiltrados: this.props.listaCocktails });
  }

  render() {
    const { componentId } = this.props;

    /* let vistaContenido = (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
        <Text style={[styles.info, { fontFamily: fonts.regular }]} textBreakStrategy="balanced">
          Buscando cocktails...
        </Text>
      </View>
    );

    if (this.props.cocktailsError) {
      vistaContenido = (
        <View style={styles.container}>
          <Image resizeMode="cover" source={iconError} style={styles.imagen} />
          <Text style={[styles.info, { fontFamily: fonts.regular }]} textBreakStrategy="balanced">
            Se a producido un error
          </Text>
        </View>
      );
    } else if (this.props.cocktailsObtenidos) {
      vistaContenido = (
        <View style={styles.container}>
          <View style={styles.containerBuscador}>
            <TextInput placeholder="Buscar Cocktail" style={styles.buscador} />
            <Image resizeMode="cover" source={iconLupa} style={styles.lupa} />
          </View>
          <FlatList
            style={styles.lista}
            showsVerticalScrollIndicator={false}
            data={test}
            renderItem={info => <CocktailView coctail={info.item} CID={componentId} />}
          />
        </View>
      );
    } */

    const test = [
      {
        key: '0',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['tequila y paco', 'otra droga', 'more droga'],
      },
      {
        key: '1',
        titulo: 'Paco en paco',
        imagen: NextDotsLogo,
        ingredientes: ['zapato', 'very much'],
      },
      {
        key: '2',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '3',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '4',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '5',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '6',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '7',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
    ];
    return (
      <View style={styles.container}>
        <Image resizeMode="cover" source={iconError} style={styles.imagen} />
        <Text style={[styles.info, { fontFamily: fonts.regular }]} textBreakStrategy="balanced">
          Se a producido un error
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cocktails: state.cocktails.cocktails,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    obtenerCocktails: () => dispatch(buscarCocktails()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailList);
