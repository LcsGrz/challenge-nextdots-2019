/* eslint-disable */
import CocktailService from '../../provider/services/CocktailService';
import { COCKTAILS_OBTAINED,RETRY, COCKTAILS_ERROR, INFO_OPEN, INFO_CLOSE,SET_FILTER } from './types';
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

export const infoOpened = activeCocktail => {
  return {
    type: INFO_OPEN,
    activeCocktail,
  };
};

export const infoClosed = () => {
  return {
    type: INFO_CLOSE,
  };
};

export const setFilter = (text) => {
  return{
    type: SET_FILTER,
    filter: text
  };
};

const saveCocktails = cocktail => {
  return dispatch => {
    let cocktailsList = [];
    Promise.all(
      cocktail.map(c => {
        cocktailsList = [...cocktailsList,Cocktail.fromJSON(c.drinks[0])];
      })
    ).then(() => {
      dispatch(obtainedCocktails(cocktailsList));
    });
  };
};

export const searchCocktails2 = () => {
  return async dispatch => {
    try{
    let cocktails = await CocktailService.getCocktails();
    let cocktailWithDetail = await CocktailService.getAllCocktailWithInfo(cocktails.drinks);
    dispatch(saveCocktails(cocktailWithDetail));
    }
    catch(e){
      dispatch(cocktailError(e.message));
    }
  }; 
};