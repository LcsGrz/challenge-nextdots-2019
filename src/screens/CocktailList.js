/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { searchCocktails, setFilter, infoOpened } from '../store/actions/cocktails';
import getMatchedCocktails from '../store/selectors/cocktails';
import { Error, Finding, Show } from '../fragments';
import { goToPage } from './index';

class CocktailList extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  componentWillMount() {
    const { cocktails, findCocktails } = this.props;
    //---------------------------------------
    if (cocktails.cocktailList.length === 0) findCocktails();
  }

  textHandler = text => {
    const { filterCocktails } = this.props;
    //---------------------------------------
    filterCocktails(text);
  };

  showCocktailDetail(cocktail) {
    const { componentId, isInfoOpened, openInfo } = this.props;
    if (!isInfoOpened) {
      openInfo(cocktail);
      goToPage(componentId, 'CocktailDetail');
    }
  }

  render() {
    const { componentId, cocktails, findCocktails, cocktailsFiltereds } = this.props;
    //---------------------------------------------------------------------------------------
    let vistaContenido = Finding;

    if (cocktails.cocktailsError) {
      vistaContenido = Error(findCocktails);
    } else if (cocktails.cocktailList.length > 0) {
      //---------------------------------------
      vistaContenido = Show(
        this.textHandler,
        cocktailsFiltereds,
        componentId,
        this.showCocktailDetail
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
    isInfoOpened: state.infoOpened,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      findCocktails: searchCocktails,
      filterCocktails: setFilter,
      openInfo: infoOpened,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CocktailList)
);
