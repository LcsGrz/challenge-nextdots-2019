/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import {
  searchCocktails,
  setFilter,
  setActiveCocktail,
  retryFind,
} from '../store/actions/cocktails';
import { Error, Finding, CocktailList } from '../fragments';
import getMatchedCocktails from '../store/selectors/cocktails';
import { goToPage } from './index';

class PrincipalContainer extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  componentWillMount() {
    const { cocktails, findCocktails } = this.props;
    //---------------------------------------
    if (cocktails.cocktailList.length === 0) findCocktails();
  }

  //---------------------------------------------------------------------------------------
  textHandler(text) {
    const { filterCocktails } = this.props;
    //---------------------------------------
    filterCocktails(text);
  }

  showDetail(cocktail) {
    const { componentId, openCocktailInfo } = this.props;
    //---------------------------------------
    openCocktailInfo(cocktail);
    goToPage(componentId, 'CocktailDetail', { title: cocktail.name });
  }

  whatToShow() {
    const { cocktails, cocktailsFiltereds, retrySearch } = this.props;

    if (cocktails.cocktailsError)
      return <Error retry={retrySearch} errorMSG={cocktails.cocktailsError} />;
    //-
    if (cocktails.cocktailList.length > 0)
      return (
        <CocktailList
          cocktailsFiltereds={cocktailsFiltereds}
          textHandler={text => this.textHandler(text)}
          onPress={cocktail => this.showDetail(cocktail)}
        />
      );
    //-
    return Finding;
  }

  //---------------------------------------------------------------------------------------
  render() {
    return <View style={{ flex: 1 }}>{this.whatToShow()}</View>;
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
  )(PrincipalContainer)
);
