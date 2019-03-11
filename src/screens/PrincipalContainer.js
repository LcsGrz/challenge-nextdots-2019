/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { searchCocktails, setFilter, infoOpened } from '../store/actions/cocktails';
import { Error, Finding, CocktailList } from '../fragments';
import getMatchedCocktails from '../store/selectors/cocktails';
import { goToPage } from './index';

class PrincipalContainer extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  componentWillMount() {
    const { findCocktails } = this.props;
    //---------------------------------------
    findCocktails();
  }

  //---------------------------------------------------------------------------------------
  textHandler(text) {
    const { filterCocktails } = this.props;
    //---------------------------------------
    filterCocktails(text);
  }

  showDetail(cocktail) {
    const { componentId, isInfoOpened, openInfo } = this.props;
    if (!isInfoOpened) {
      openInfo(cocktail);
      goToPage(componentId, 'CocktailDetail', { title: cocktail.name });
    }
  }

  whatToShow() {
    const { cocktails, findCocktails, cocktailsFiltereds } = this.props;
    //  console.log('eeeee');
    //-
    if (cocktails.isFetching) return Finding;
    //-
    if (cocktails.cocktailsError) return <Error retry={findCocktails} />;
    //-
    return (
      <CocktailList
        cocktailsFiltereds={cocktailsFiltereds}
        textHandler={text => this.textHandler(text)}
        onPress={cocktail => this.showDetail(cocktail)}
      />
    );
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
  )(PrincipalContainer)
);
