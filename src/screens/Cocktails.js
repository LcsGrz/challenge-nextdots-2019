import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import {
  searchCocktails,
  setFilter,
  setActiveCocktail,
  retryFind,
} from '../store/actions/cocktails';
import { Error, Finding, CocktailList } from '../components/index';
import getMatchedCocktails from '../store/selectors/cocktails';
import { goToPage } from './index';
import * as CocktailClass from '../entities/Cocktail';

class Cocktail extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  componentDidMount() {
    const { cocktails, findCocktails } = this.props;
    if (cocktails.cocktailList.length === 0) findCocktails();
  }

  _textHandler(text) {
    const { filterCocktails } = this.props;
    filterCocktails(text);
  }

  _showDetail(cocktail) {
    const { componentId, openCocktailInfo } = this.props;
    openCocktailInfo(cocktail);
    goToPage(componentId, 'CocktailDetail', { title: cocktail.name });
  }

  renderCocktails() {
    const { cocktails, cocktailsFiltereds, retrySearch } = this.props;

    if (cocktails.cocktailsError)
      // Si tengo un error, es por que intente el fetch y algo salio mal, muestro el error
      return <Error retry={retrySearch} errorMSG={cocktails.cocktailsError} />;

    if (cocktails.cocktailList.length)
      // Si tengo elementos es por que termine el fetch, devuelvo la flatlist
      return (
        <CocktailList
          cocktailsFiltereds={cocktailsFiltereds}
          textHandler={text => this._textHandler(text)}
          onPress={cocktail => this._showDetail(cocktail)}
        />
      );

    return Finding; // si ninguna de las anteriores,devuelve pantalla de FINDING
  }

  render() {
    return <View style={{ flex: 1 }}>{this.renderCocktails()}</View>;
  }
}

Cocktail.propTypes = {
  componentId: PropTypes.string.isRequired,
  cocktails: PropTypes.any.isRequired,
  cocktailsFiltereds: PropTypes.arrayOf(PropTypes.instanceOf(CocktailClass)).isRequired, // Esta linea devuelve un warning
  retrySearch: PropTypes.func.isRequired,
  findCocktails: PropTypes.func.isRequired,
  openCocktailInfo: PropTypes.func.isRequired,
  filterCocktails: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    cocktails: state.cocktails,
    cocktailsFiltereds: getMatchedCocktails(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      findCocktails: searchCocktails,
      retrySearch: retryFind,
      filterCocktails: setFilter,
      openCocktailInfo: setActiveCocktail,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cocktail)
);

/*
no agrege isFetching por que me parece mejor como esta, son menos datos en el estado, y no parece ser necesario salvo para que 
se pueda leer mejor

no entendi lo de async en el fetch de este componente
*/
