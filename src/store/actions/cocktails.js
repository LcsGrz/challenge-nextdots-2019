/* eslint-disable */
import { COCKTAILS_OBTAINED, COCKTAILS_ERROR, INFO_OPEN, INFO_CLOSE,SET_FILTER } from './types';
import Cocktail from '../../entities/Cocktail';

export const cocktailsObtenidos = cocktails => {
  return {
    type: COCKTAILS_OBTAINED,
    cocktails,
  };
};

export const cocktailError = () => {
  return {
    type: COCKTAILS_ERROR,
  };
};
export const infoAbierta = cocktailActivo => {
  return {
    type: INFO_OPEN,
    cocktailActivo,
  };
};
export const infoCerrada = () => {
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
const guardarInformacion = cocktail => {
  return dispatch => {
    let listaCocktails = [];
    Promise.all(
      cocktail.map(c => {
        listaCocktails = [...listaCocktails,Cocktail.fromJSON(c.drinks[0])];
      })
    ).then(() => {
      dispatch(cocktailsObtenidos(listaCocktails));
    });
  };
};

const buscarMasInformacion = datos => {
  return dispatch => {
    Promise.all(datos.map(d => fetch(COCKTAIL_DETAIL + d.idDrink).then(res => res.json()))).then(
      drinks => {
        dispatch(guardarInformacion(drinks));
      }
    );
  };
};

const fetchaso = () => {
  fetch(COCKTAIL_LIST, {
    method: 'POST',
  })
    .catch(err => {
      return err.message;
    })
    .then(res => res.json())
    .then(parsedRes => {
      return parsedRes;
    });
};

export const buscarCocktails = () => {
  return dispatch => {
    fetch(COCKTAIL_LIST, {
      method: 'POST',
    })
      .catch(err => {
        console.log(err);
        dispatch(cocktailError());
      })
      .then(res => res.json())
      .then(parsedRes => {
        dispatch(buscarMasInformacion(parsedRes.drinks));
      });
  };
};

const COCKTAIL_LIST = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';
const COCKTAIL_DETAIL = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
