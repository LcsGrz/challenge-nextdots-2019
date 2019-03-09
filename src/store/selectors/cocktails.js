import { createSelector } from 'reselect';

const cocktailsSelector = state => state.cocktails.listaCocktails;

const getMatchedCocktails = state => {
  return createSelector(
    [cocktailsSelector],
    cocktails => cocktails.filter(cocktail => cocktail.nameMatch(state.cocktails.filter))
  )(state);
};

export default getMatchedCocktails;
