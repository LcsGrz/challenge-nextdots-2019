/* eslint-disable */
import CocktailService from '../../provider/services/CocktailService';
import { COCKTAILS_OBTAINED,RETRY, COCKTAILS_ERROR, SET_ACTIVE_COCKTAIL,SET_FILTER } from './types';
import Cocktail from '../../entities/Cocktail';



const obtainedCocktails = cocktails => {
  return {
    type: COCKTAILS_OBTAINED,
    cocktails,
  };
};

export const cocktailError = (msg) => {
  return {
    type: COCKTAILS_ERROR,
    msg
  };
};

export const retryFind = () => {
  return dispatch => {
    dispatch(searchCocktails());
    dispatch( {
    type: RETRY,
  });
}
};

export const setActiveCocktail = activeCocktail => {
  return {
    type: SET_ACTIVE_COCKTAIL,
    activeCocktail,
  };
};


export const setFilter = (text) => {
  return{
    type: SET_FILTER,
    filter: text
  };
};

export const searchCocktails = () => {
  return async dispatch => {
    try
    {
    let cocktails = await CocktailService.getCocktails();
    let cocktailWithInfo = await CocktailService.getAllCocktailWithInfo(cocktails.drinks);
    let cocktailsOK = await Cocktail.prepareToSave(cocktailWithInfo);
      console.log(cocktailsOK)
    dispatch(obtainedCocktails(cocktailsOK));
    }
    catch(e)
    {
      dispatch(cocktailError(e.message));
    }
  }; 
};