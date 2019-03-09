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
import { CocktailCard, Button } from '../components';
import fonts from '../theme/fonts';
import iconLupa from '../assets/images/common/lupa.png';
import iconError from '../assets/images/common/error.png';
import { buscarCocktails, setFilter } from '../store/actions/cocktails';
import getMatchedCocktails from '../store/selectors/cocktails';

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

  componentWillMount() {
    const { cocktails, findCocktails } = this.props;
    //---------------------------------------
    if (cocktails.listaCocktails.length === 0) findCocktails();
  }

  textHandler = text => {
    const { filterCocktails } = this.props;
    //---------------------------------------
    filterCocktails(text);
  };

  render() {
    const { componentId, cocktails, findCocktails, cocktailsFiltereds } = this.props;
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
          <Button text="REINTENTAR" onPress={() => findCocktails()} />
        </View>
      );
    } else if (cocktails.listaCocktails.length > 0) {
      //---------------------------------------
      vistaContenido = (
        <View style={styles.container}>
          <View style={styles.containerBuscador}>
            <TextInput
              placeholder="Buscar Cocktail"
              style={styles.buscador}
              onChangeText={text => this.textHandler(text)}
            />
            <Image resizeMode="cover" source={iconLupa} style={styles.lupa} />
          </View>
          <FlatList
            style={styles.lista}
            showsVerticalScrollIndicator={false}
            data={cocktailsFiltereds}
            keyExtractor={(item, index) => index.toString()}
            renderItem={info => <CocktailCard coctail={info.item} CID={componentId} />}
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
    cocktailsFiltereds: getMatchedCocktails(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      findCocktails: buscarCocktails,
      filterCocktails: setFilter,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CocktailList)
);
